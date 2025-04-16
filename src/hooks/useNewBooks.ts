import { useQuery } from '@tanstack/react-query';
import { fetchNewBooks } from '../api/books';
import { NewBooksResponse } from '../types/Book';

export function useNewBooks() {
	return useQuery<NewBooksResponse, Error>({
		queryKey: ['newBooks'],
		queryFn: fetchNewBooks,
	});
}
