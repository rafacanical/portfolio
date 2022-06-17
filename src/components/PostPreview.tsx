import React from 'react'

export interface Props {
  post: any
}

function PostPreview(props: Props) {
  const { post } = props
  return (
    <div>
      <div>
        <i>{post.frontmatter.publishdate}</i>
      </div>
      <a href={post.url} class="home-post">
        <h2>{post.frontmatter.title}</h2>
      </a>
      <div>
        {post.frontmatter.description}{' '}
        <a href={post.url} class="home-post">
          Read more...
        </a>
      </div>
      <br />
    </div>
  )
}

export default PostPreview
