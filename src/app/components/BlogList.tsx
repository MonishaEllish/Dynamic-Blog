import Image from 'next/image'
import Link from 'next/link'
import { BlogPost } from '../lib/BlogData'

interface BlogListProps {
  posts: BlogPost[]
}

export default function BlogList({ posts }: BlogListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image
            src={post.imageUrl}
            alt={post.title}
            width={300}
            height={200}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{post.date}</span>
              <Link href={`/blog/${post.id}`} className="text-blue-600 hover:underline">
                Read more
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

