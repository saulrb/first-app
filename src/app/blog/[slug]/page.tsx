import { NextPage } from 'next'

type Props = {
  params: {
    slug: any
  }
}
const BlogPostPage: NextPage<Props> = ({ params: { slug = null } }) => {
  console.log('slug:', slug)
  return (
    <>
      <main>
        <h1> Blog Post </h1>
        <p>{slug}</p>
      </main>
    </>
  )
}

export default BlogPostPage
