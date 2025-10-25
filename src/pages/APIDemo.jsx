import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { fetchPosts } from '../api/fetchData';

const APIDemo = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const loadPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchPosts(10);
      setPosts(data);
    } catch (err) {
      setError('Failed to load posts. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card className="w-full">
      <h2 className="text-2xl font-bold mb-4">API Data - JSONPlaceholder Posts</h2>

      <div className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
        />
        <Button onClick={loadPosts} disabled={loading}>
          {loading ? 'Loading...' : 'Refresh'}
        </Button>
      </div>

      {loading && (
        <div className="text-center py-8">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <p className="mt-2 text-gray-500 dark:text-gray-400">Loading posts...</p>
        </div>
      )}

      {error && (
        <div className="bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 p-4 rounded-lg mb-4">
          {error}
        </div>
      )}

      {!loading && !error && (
        <div className="space-y-3">
          {filteredPosts.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400 text-center py-4">
              No posts found matching "{searchTerm}"
            </p>
          ) : (
            filteredPosts.map((post) => (
              <div
                key={post.id}
                className="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700 transition-colors"
              >
                <h3 className="font-semibold text-lg mb-2 capitalize">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{post.body}</p>
                <span className="text-xs text-gray-400 mt-2 inline-block">Post ID: {post.id}</span>
              </div>
            ))
          )}
        </div>
      )}

      <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
        Showing {filteredPosts.length} of {posts.length} posts
      </div>
    </Card>
  );
};

export default APIDemo;
