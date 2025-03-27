import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // For navigation to individual blog posts
import { Blog } from "../types/Blog.ts"; // Import the Blog interface

const API_BASE_URL = "http://localhost:5000/api"; // Update base URL

function PostPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]); // Use the Blog interface for state

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get<Blog[]>(`${API_BASE_URL}/post`); // Specify the response type
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="container-fluid pt-3">
      <h1 className="text-center">Posts</h1>
      <div className="row">
        {blogs.map((blog) => (
          <div className="col-md-4 mb-4" key={blog._id}>
            <div className="card">
              <img
                src={blog.imageUrl}
                className="card-img-top"
                alt={blog.title}
              />{" "}
              {/* Assuming each blog has an image */}
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">
                  {blog.content.substring(0, 100)}...
                </p>{" "}
                {/* Display a snippet of the content */}
                <Link to={`/blogs/${blog._id}`} className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostPage;
