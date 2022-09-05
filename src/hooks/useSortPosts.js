import { useMemo } from "react";

export const useSortPosts = (posts, sort) => {
    const sortedPost = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) =>
        a[sort].localeCompare(b[sort])
      );
    } else {
      return posts;
    }
    }, [sort, posts]);
    
    return sortedPost
    
}

export const usePost = (posts, sort, query) => {
   const sortedPost = useSortPosts(posts, sort)
  const sortAndSearchPost = useMemo(() => {
    return sortedPost.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, sortedPost]);
    return sortAndSearchPost
}