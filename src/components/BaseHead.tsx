import React from 'react'
import '../styles/blog.css'

export interface Props {
  title: string
  description: string
}

function BaseHead(props: Props) {
  const { title, description } = props

  return (
    <>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
    </>
  )
}

export default BaseHead
