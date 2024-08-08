import {
  ComputedFields,
  defineDocumentType,
  makeSource,
} from 'contentlayer2/source-files';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import { slug } from 'github-slugger';
import { fromHtmlIsomorphic } from 'hast-util-from-html-isomorphic';
import path from 'path';
import {
  extractTocHeadings,
  remarkCodeTitles,
  remarkExtractFrontmatter,
  remarkImgToJsx,
} from 'pliny/mdx-plugins/index.js';
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer.js';
import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeCitation from 'rehype-citation';
import rehypeKatex from 'rehype-katex';
import rehypePresetMinify from 'rehype-preset-minify';
import rehypePrismPlus from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
// Remark and Rehype packages
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';

import siteMetadata from './src/data/siteMetadata';

const root = process.cwd();
const isProduction = process.env.NODE_ENV === 'production';

// Tag colors
const tagColorsPath = path.join(root, 'data/tagColors.json');
const tagColors = existsSync(tagColorsPath)
  ? JSON.parse(readFileSync(tagColorsPath, 'utf8'))
  : {};

const colors = [
  'blue',
  'orange',
  'green',
  'pink',
  'brown',
  'red',
  'yellow',
  'purple',
  'gray',
];

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

const computedFields: ComputedFields = {
  readingTime: {
    type: 'json',
    resolve: (doc) => readingTime(doc.body.raw),
  },
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.replace(/^.+?(\/)/, ''),
  },
  path: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath,
  },
  filePath: {
    type: 'string',
    resolve: (doc) => doc._raw.sourceFilePath,
  },
  toc: {
    type: 'json',
    resolve: (doc) => extractTocHeadings(doc.body.raw),
  },
  tagColors: {
    type: 'json',
    resolve: (doc) => {
      const newTagColors = {};
      if (Array.isArray(doc.tags)) {
        doc.tags.forEach((tag) => {
          if (!tagColors[tag.name]) {
            tagColors[tag.name] = tag.color || getRandomColor();
          }
          if (!newTagColors[tag.name]) {
            newTagColors[tag.name] = {
              name: tag.name,
              color: tagColors[tag.name],
              count: 0,
            };
          }
          newTagColors[tag.name].count += 1;
        });
        if (Object.keys(newTagColors).length > 0) {
          writeFileSync(tagColorsPath, JSON.stringify(tagColors, null, 2));
        }
        return Object.values(newTagColors);
      } else {
        console.error('Tags is not an array:', doc.tags);
        return [];
      }
    },
  },
};

/**
 * Count the occurrences of all tags across blog posts and write to json file
 */ function createTagCount(allPosts) {
  const tagCount: Record<string, number> = {};
  allPosts.forEach((file) => {
    if (file.tags && (!isProduction || file.draft !== true)) {
      file.tags.forEach((tag) => {
        const formattedTag = slug(tag);
        if (formattedTag in tagCount) {
          tagCount[formattedTag] += 1;
        } else {
          tagCount[formattedTag] = 1;
        }
      });
    }
  });
  writeFileSync('./src/app/tag-data.json', JSON.stringify(tagCount));
}

function createSearchIndex(allPosts) {
  if (
    siteMetadata?.search?.provider === 'kbar' &&
    siteMetadata.search.kbarConfig.searchDocumentsPath
  ) {
    writeFileSync(
      `public/${siteMetadata.search.kbarConfig.searchDocumentsPath}`,
      JSON.stringify(allCoreContent(sortPosts(allPosts))),
    );
    console.log('Local search index generated...');
  }
}

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: 'blog/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    tags: {
      type: 'list',
      of: {
        type: 'json',
        shape: {
          name: { type: 'string', required: true },
          count: { type: 'number', required: true },
          color: { type: 'string', required: true },
        },
      },
      default: [],
    },
    lastmod: { type: 'date' },
    draft: { type: 'boolean' },
    summary: { type: 'string' },
    images: { type: 'json' },
    authors: { type: 'list', of: { type: 'string' } },
    layout: { type: 'string' },
    bibliography: { type: 'string' },
    canonicalUrl: { type: 'string' },
    coverImage: { type: 'string' },
  },
  computedFields: {
    ...computedFields,
    structuredData: {
      type: 'json',
      resolve: (doc) => ({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: doc.title,
        datePublished: doc.date,
        dateModified: doc.lastmod || doc.date,
        description: doc.summary,
        image: doc.coverImage || doc.images?.[0] || siteMetadata.socialBanner,
        url: `${siteMetadata.siteUrl}/${doc._raw.flattenedPath}`,
      }),
    },
  },
}));

export const Authors = defineDocumentType(() => ({
  name: 'Authors',
  filePathPattern: 'authors/**/*.mdx',
  contentType: 'mdx',
  fields: {
    name: { type: 'string', required: true },
    avatar: { type: 'string' },
    occupation: { type: 'string' },
    company: { type: 'string' },
    email: { type: 'string' },
    twitter: { type: 'string' },
    linkedin: { type: 'string' },
    github: { type: 'string' },
    layout: { type: 'string' },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: 'src/data',
  documentTypes: [Post, Authors],
  mdx: {
    cwd: process.cwd(),
    remarkPlugins: [
      remarkExtractFrontmatter,
      remarkGfm,
      remarkCodeTitles,
      remarkMath,
      remarkImgToJsx,
    ],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'prepend',
          headingProperties: {
            className: ['content-header'],
          },
          content: fromHtmlIsomorphic(
            `
            <span class="content-header-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 linkicon">
            <path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z" />
            <path d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 1 0 0 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z" />
            </svg>
            </span>
            `,
            { fragment: true },
          ),
        },
      ],
      rehypeKatex,
      [rehypeCitation, { path: path.join(root, 'data') }],
      [rehypePrismPlus, { defaultLanguage: 'js', ignoreMissing: true }],
      rehypePresetMinify,
    ],
  },
  onSuccess: async (importData) => {
    const { allPosts } = await importData();
    createTagCount(allPosts);
    createSearchIndex(allPosts);
  },
});
