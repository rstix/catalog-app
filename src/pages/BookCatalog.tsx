import { useNewBooks } from '../hooks/useNewBooks';
import { Link } from 'react-router-dom';

export default function BookCatalog() {
	const { data, isLoading, isError, error } = useNewBooks();

	if (isLoading) return <p>Loading...</p>;
	if (isError) return <p>Error loading products {error.message}</p>;

	return (
		<div className="grid gap-4 p-4 sm:grid-cols-2 md:grid-cols-4">
			{data!.books.map((book) => (
				<Link
					key={book.isbn13}
					to={`/book/${book.isbn13}`}
					className="block border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
				>
					<img
						src={book.image}
						alt={book.title}
						className="w-full h-auto max-w-42 mx-auto"
					/>
					<div className="p-4">
						<h2 className="text-lg font-semibold mb-1">{book.title}</h2>
						<p className="text-sm text-gray-600">{book.price}</p>
					</div>
				</Link>
			))}
		</div>
	);
}
