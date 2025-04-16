import { useParams, Link } from 'react-router-dom';
import { useBookDetail } from '../hooks/useBookDetail';

export default function BookDetail() {
	const { isbn } = useParams<{ isbn: string }>();
	const { data: book, isLoading, isError, error } = useBookDetail(isbn!);

	if (isLoading) return <p>Loading...</p>;
	if (isError) return <p>Error loading products {error.message}</p>;

	return (
		<div className="max-w-4xl mx-auto p-6">
			<Link to="/" className="inline-block mb-4 text-blue-600 hover:underline">
				← Back to list
			</Link>
			<div className="flex flex-col md:flex-row gap-6">
				<img
					src={book!.image}
					alt={book!.title}
					className="w-full md:w-1/3 rounded-lg shadow"
				/>
				<div>
					<h1 className="text-3xl font-bold mb-2">{book!.title}</h1>
					{book!.subtitle && (
						<h2 className="text-xl text-gray-700 mb-4">{book!.subtitle}</h2>
					)}
					<p className="text-2xl font-semibold mb-4">Price: {book!.price}</p>
					<a
						href={book!.url}
						target="_blank"
						rel="noopener"
						className="inline-block px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
					>
						View on IT Bookstore
					</a>
				</div>
			</div>
		</div>
	);
}
