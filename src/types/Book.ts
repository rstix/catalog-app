export interface Book {
	title: string;
	subtitle: string;
	isbn13: string;
	price: string;
	image: string;
	url: string;
}

export interface NewBooksResponse {
	error: string; // "0" on success
	total: string; // e.g. "20"
	books: Book[]; // array of 20 books
}
