import Image from 'next/image'


export interface Post {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    date: string;
    imageUrl: string;
  }
 

interface BlogPostProps {
  post:Post
}

export default function BlogPosts({ post }: BlogPostProps) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image
        src={post.imageUrl}
        alt={post.title}
        width={800}
        height={400}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <div className="flex justify-between items-center text-gray-500 mb-4">
          <span>{post.author}</span>
          <span>{post.date}</span>
        </div>
        <div className="prose max-w-none">
          <p>{post.content}</p>
        </div>
      </div>
    </article>
  )
}

