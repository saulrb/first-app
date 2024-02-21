import { NextPage } from 'next'
import Link from 'next/link'

const BlogPage: NextPage = async () => {
  return (
    <>
      <h1> This is a blog</h1>
      <p>
        <Link href="/blog/post-1">Post 1</Link>
      </p>
      <p>
        <Link href="/blog/post-2">Post 2</Link>
      </p>
    </>
  )
}

export default BlogPage
