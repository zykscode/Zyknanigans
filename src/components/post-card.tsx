import Image from "next/image"
import Link from "next/link"
import { formatDate } from "@/lib/utils"
import { getPlaiceholder } from 'plaiceholder'
import fs from 'fs'
import path from 'path'

interface Post {
  key: string
  title: string
  coverImage?: string
  summary?: string
  date?: string
  slug: string
}

interface PostcardProps {
  post: Post
  image: string
}

const getImage = async (src: string) => {
  try {
    const filePath = path.join(process.cwd(), 'public', 'images', 'blog', src);
    const buffer = await fs.promises.readFile(filePath);
    const {
      metadata: { height, width },
      ...plaiceholder
    } = await getPlaiceholder(buffer, { size: 10 });
    return {
      ...plaiceholder,
      img: { src: `/images/blog${src}`, height, width },
    };
  } catch (error) {
    console.error('Error fetching image:', error);
    return {
      base64: '',
      img: { src: '', height: 0, width: 0 },
    };
  }
};

const Postcard: React.FC<PostcardProps> = async ({ post, image }) => {
  const { base64, img } = await getImage(image);
  return (
    <article className="group relative flex flex-col space-y-2">
      {image && (
        <Image
          src={`${img.src}`}
          placeholder="blur"
          {...img}
          blurDataURL={base64}
          alt={post.title}
          width={804}
          height={452}
          className="rounded-md border bg-muted transition-colors"
        />
      )}
      <h2 className="text-2xl font-extrabold">{post.title}</h2>
      {post.summary && (
        <p className="text-muted-foreground">{post.summary}</p>
      )}
      {post.date && (
        <p className="text-sm text-muted-foreground">
          {formatDate(post.date)}
        </p>
      )}
      <Link href={post.slug} className="absolute inset-0">
        <span className="sr-only">View Article</span>
      </Link>
    </article>
  )
}

export default Postcard