import { useMemo } from "react";

export const useSortedPosts = (posts, sortType) => {
  const sortedPosts = useMemo(() => {
    if (sortType) {
      return [...posts].sort((a, b) => a[sortType].localeCompare(b[sortType]));
    }
    return posts;
  }, [sortType, posts]);

  return sortedPosts;
};

export const usePosts = (posts, sortType, searchQuery) => {
  const sortedPosts = useSortedPosts(posts, sortType);

  const searchedAndSortedPosts = useMemo(() => {
    const lowQuery = searchQuery.toLowerCase();
    return [...sortedPosts].filter(
      (post) =>
        post.title.toLowerCase().includes(lowQuery) ||
        post.body.toLowerCase().includes(lowQuery)
    );
  }, [searchQuery, sortedPosts]);

  return searchedAndSortedPosts;
};
