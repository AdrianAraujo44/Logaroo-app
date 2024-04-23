import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import axios from 'axios';

interface PostData {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface PostContextType {
  posts: PostData[];
  setPosts: React.Dispatch<React.SetStateAction<PostData[]>>;
}

const initialPostContext: PostContextType = {
  posts: [],
  setPosts: () => {}
};

const PostContext = createContext<PostContextType>(initialPostContext);

export const PostProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<PostData[]>([]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get<PostData[]>('https://jsonplaceholder.typicode.com/posts');
      setPosts(response.data);
    } catch (e) {
      console.error('Erro ao buscar os posts:');
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePosts = () => useContext(PostContext);
