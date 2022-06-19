import React from 'react'

export interface Props {
  title: string
  publishdate: string
  children: any
}

function PostPreview(props: Props) {
  const { title, publishdate, children } = props
  return (
    <>
      <div>
        <article className="mb-8">
          <div>
            <header>
              <p className="text-sm text-gray-500">{publishdate}</p>
              <h1 className="text-gray-900 mb-4 inline-block text-2xl font-bold">{title}</h1>
            </header>
            <main className="text-gray-600 mb-2 post">{children}</main>
          </div>
        </article>
        <div className="text-sm text-gray-500">© {new Date().getFullYear()} Rafael Morais</div>
      </div>
    </>
  )
}

export default PostPreview
