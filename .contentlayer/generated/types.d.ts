// NOTE This file is auto-generated by Contentlayer

import type { Markdown, MDX, ImageFieldData, IsoDateTimeString } from 'contentlayer2/core'
import * as Local from 'contentlayer2/source-files'

export { isType } from 'contentlayer2/client'

export type { Markdown, MDX, ImageFieldData, IsoDateTimeString }

/** Document types */
export type Authors = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Authors'
  name: string
  avatar?: string | undefined
  occupation?: string | undefined
  company?: string | undefined
  email?: string | undefined
  twitter?: string | undefined
  linkedin?: string | undefined
  github?: string | undefined
  layout?: string | undefined
  /** MDX file body */
  body: MDX
  readingTime: json
  slug: string
  path: string
  filePath: string
  toc: json
  tagColors: json
}

export type Post = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Post'
  title: string
  date: IsoDateTimeString
  tags: any[]
  lastmod?: IsoDateTimeString | undefined
  draft?: boolean | undefined
  summary?: string | undefined
  images?: any | undefined
  authors?: string[] | undefined
  layout?: string | undefined
  bibliography?: string | undefined
  canonicalUrl?: string | undefined
  coverImage?: string | undefined
  /** MDX file body */
  body: MDX
  readingTime: json
  slug: string
  path: string
  filePath: string
  toc: json
  tagColors: json
  structuredData: json
}  

/** Nested types */
  

/** Helper types */

export type AllTypes = DocumentTypes | NestedTypes
export type AllTypeNames = DocumentTypeNames | NestedTypeNames

export type DocumentTypes = Authors | Post
export type DocumentTypeNames = 'Authors' | 'Post'

export type NestedTypes = never
export type NestedTypeNames = never

export type DataExports = {
  allDocuments: DocumentTypes[]
  allPosts: Post[]
  allAuthors: Authors[]
}


export interface ContentlayerGenTypes {
  documentTypes: DocumentTypes
  documentTypeMap: DocumentTypeMap
  documentTypeNames: DocumentTypeNames
  nestedTypes: NestedTypes
  nestedTypeMap: NestedTypeMap
  nestedTypeNames: NestedTypeNames
  allTypeNames: AllTypeNames
  dataExports: DataExports
}

declare global {
  interface ContentlayerGen extends ContentlayerGenTypes {}
}

export type DocumentTypeMap = {
  Authors: Authors
  Post: Post
}

export type NestedTypeMap = {

}

 