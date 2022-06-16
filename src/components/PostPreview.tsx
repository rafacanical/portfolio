import React from 'react'

export interface Props {
  post: any
}

function PostPreview(props: Props) {
  const { post } = props
  return (
    <a href={post.url} class="home-post">
      <div class="container">
        <div class="tags">
          <span class="tag">{post.frontmatter.tag}</span>
        </div>
        <time>{post.frontmatter.publishDate}</time>
        <div class="content">
          <h2>{post.frontmatter.title}</h2>
        </div>
      </div>
    </a>
  )
}

export default PostPreview
