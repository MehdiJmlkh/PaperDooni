export const articleKeys = {
  all: ["articles"] as const,
  single: (id: number) => [...articleKeys.all, id] as const,
  list: (searchText: string, page: number, size: number) =>
    [...articleKeys.all, searchText, page, size] as const,
};
