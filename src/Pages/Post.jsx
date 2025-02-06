import React, { useState, useEffect } from "react";
import PostService from "../Services/post.service";

const Post = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    PostService.get()
      .then((response) => {
        setPosts(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Posts</h1>
      <div className="space-y-6 w-full max-w-2xl">
        {posts.map((post) => (
          <div key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">{post.title}</h2>
              <p className="text-gray-700 mt-2">{post.content}</p>
              <div className="mt-4 text-sm text-gray-500">
                <p><strong>Published:</strong> {post.published ? "Yes" : "No"}</p>
                <p><strong>Author:</strong> {post.author ? post.author.name : "Unknown"}</p>
                <p><strong>Email:</strong> {post.author ? post.author.email : "Unknown"}</p>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-2">
              <h4 className="text-sm font-medium text-gray-600">Comments:</h4>
              <ul className="mt-2 space-y-2">
                {post.comments.length > 0 ? (
                  post.comments.map((comment) => (
                    <li key={comment.id} className="bg-gray-100 p-2 rounded">
                      <p className="text-gray-800">{comment.text}</p>
                      <p className="text-sm text-gray-500">
                        <strong>Commented by:</strong> {comment.user.name} ({comment.user.email})
                      </p>
                      <p className="text-sm text-gray-500">
                        <strong>Date:</strong> {new Date(comment.createdAt).toLocaleString()}
                      </p>
                    </li>
                  ))
                ) : (
                  <p className="text-sm text-gray-500">No comments yet.</p>
                )}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
