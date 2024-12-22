import { notFound } from 'next/navigation'

import Header from "../../components/Header"
import BlogPost from '../../components/BlogPost'
import CommentSection from '../../components/CommentSection'
import blogPosts  from '../../lib/BlogData'


export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find((post: { id: number }) => post.id === parseInt(params.id))

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <BlogPost post={post} />
        <CommentSection />
      </main>
    </div>
  )
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post: { id: { toString: () => string } }) => ({
    id: post.id.toString(),
  }))
}