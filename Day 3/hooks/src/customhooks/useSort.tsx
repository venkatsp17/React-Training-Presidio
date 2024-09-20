import { useState, useCallback } from 'react';

type SortOrder = 'asc' | 'desc';

const useSort = <T,>(items: T[], key: keyof T) => {
  const [sortKey, setSortKey] = useState<keyof T>(key);
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

  const sortedItems = useCallback(() => {
    return [...items].sort((a, b) => {
      if (a[sortKey] < b[sortKey]) return sortOrder === 'asc' ? -1 : 1;
      if (a[sortKey] > b[sortKey]) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  }, [items, sortKey, sortOrder]);

  const toggleSortOrder = (key: keyof T) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  return { sortedItems: sortedItems(), sortKey, sortOrder, toggleSortOrder };
};

export default useSort;
