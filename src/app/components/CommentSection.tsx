'use client'

import { useState } from 'react'

interface Comment {
  id: number
  author: string
  content: string
  date: string
}

export default function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState('')
  const [authorName, setAuthorName] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.trim() && authorName.trim()) {
      const comment: Comment = {
        id: Date.now(),
        author: authorName.trim(),
        content: newComment.trim(),
        date: new Date().toISOString().split('T')[0]
      }
      setComments([...comments, comment])
      setNewComment('')
      setAuthorName('')
    }
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      <form onSubmit={handleSubmit} className="mb-6 space-y-4">
        <div>
          <label htmlFor="authorName" className="block text-sm font-medium text-gray-700 mb-1">
            Your Name
          </label>
          <input
            type="text"
            id="authorName"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label htmlFor="commentContent" className="block text-sm font-medium text-gray-700 mb-1">
            Your Comment
          </label>
          <textarea
            id="commentContent"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            rows={4}
            placeholder="Leave a comment..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
        >
          Post Comment
        </button>
      </form>
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-gray-100 p-4 rounded">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">{comment.author}</span>
              <span className="text-sm text-gray-500">{comment.date}</span>
            </div>
            <p>{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

