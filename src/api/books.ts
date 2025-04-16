import { Book, NewBooksResponse } from '../types/Book';

export async function fetchNewBooks(): Promise<NewBooksResponse> {
	const res = await fetch('https://api.itbook.store/1.0/new');
	if (!res.ok) throw new Error('Network response was not ok');
	return res.json();
}

export async function fetchBookDetail(isbn: string): Promise<Book> {
	const res = await fetch(`https://api.itbook.store/1.0/books/${isbn}`);
	if (!res.ok) throw new Error('Failed to load book details');
	return res.json();
}
