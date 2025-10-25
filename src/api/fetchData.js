/**
 * API utility functions for fetching data from JSONPlaceholder
 */

const API_BASE = 'https://jsonplaceholder.typicode.com';

/**
 * Fetch posts from JSONPlaceholder API
 * @param {number} limit - Number of posts to fetch
 * @returns {Promise<Array>} Array of posts
 */
export const fetchPosts = async (limit = 10) => {
  try {
    const response = await fetch(`${API_BASE}/posts?_limit=${limit}`);
    if (!response.ok) throw new Error('Failed to fetch posts');
    return await response.json();
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

/**
 * Fetch users from JSONPlaceholder API
 * @returns {Promise<Array>} Array of users
 */
export const fetchUsers = async () => {
  try {
    const response = await fetch(`${API_BASE}/users`);
    if (!response.ok) throw new Error('Failed to fetch users');
    return await response.json();
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export default { fetchPosts, fetchUsers };
