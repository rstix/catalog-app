import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookCatalog from './pages/BookCatalog';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import BookDetail from './pages/BookDetail';

const queryClient = new QueryClient();

function App() {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<Router>
					<Routes>
						<Route path="/" element={<BookCatalog />} />
						<Route path="/book/:isbn" element={<BookDetail />} />
					</Routes>
				</Router>
			</QueryClientProvider>
		</>
	);
}

export default App;
