import Header from './components/Header'
import BlogList from './components/BlogList'
import blogPosts from './lib/BlogData'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold  mb-6">Latest Blog Posts</h1>
        <BlogList posts={blogPosts} />
      </main>
    </div>
  )
}
