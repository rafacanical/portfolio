import React from 'react'

export interface Props {
  post: any
}

function PostPreview(props: Props) {
  const { post } = props
  return (
    <div className="mb-8">
      <a href={post.url} class="text-gray-900 mb-1 inline-block text-2xl font-bold hover:text-red-600">
        <h2>{post.frontmatter.title}</h2>
      </a>
      <div className="text-gray-600 mb-2">{post.frontmatter.description}</div>
      <div className="text-sm text-gray-500">{post.frontmatter.publishdate}</div>
    </div>
  )
}

export default PostPreview
