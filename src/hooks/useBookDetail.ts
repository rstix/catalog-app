import { useQuery } from '@tanstack/react-query';
import { fetchBookDetail } from '../api/books';
import { Book } from '../types/Book';

export function useBookDetail(isbn: string) {
	return useQuery<Book, Error>({
		queryKey: ['book', isbn],
		queryFn: () => fetchBookDetail(isbn),
		enabled: !!isbn,
		retry: 1,
	});
}
