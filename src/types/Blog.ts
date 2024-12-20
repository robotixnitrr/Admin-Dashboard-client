// Admin-Dashboard-client/src/types/Blog.ts
export interface Blog {
  _id: string; // Unique identifier for the blog post
  title: string; // Title of the blog post
  content: string; // Content of the blog post
  author: string; // Author's ID (can be expanded to include author details if needed)
  imageUrl?: string; // Optional image URL
  category?: string; // Optional category
  createdAt: string; // Timestamp of when the blog was created
  updatedAt: string; // Timestamp of when the blog was last updated
}
