import { useEffect, useRef } from "react";

export const useObserver = (ref, canLoad, isLoading, action) => {
  const observer = useRef();

  useEffect(() => {
    if (isLoading) return;

    if (observer.current) observer.current.disconnect();

    var callback = (entries, observer) => {
      if (entries[0].isIntersecting && canLoad) {
        action();
      }
    };

    observer.current = new IntersectionObserver(callback);
    observer.current.observe(ref.current);
  }, [isLoading]);
};
