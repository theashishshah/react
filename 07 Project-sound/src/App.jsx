import { useState } from "react";
import Pagination from "./components/Pagination";

function App() {
	const [currentPage, setCurrentPage] = useState(1);
	const totalPages = 10;

	// Example: fetch data on page change
	const handlePageChange = (page) => {
		if (page >= 1 && page <= totalPages) {
			setCurrentPage(page);
		}
	};

	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
			<h1 className="text-2xl font-semibold mb-4">
				Current Page: {currentPage}
			</h1>

			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				onPageChange={handlePageChange}
			/>
		</div>
	);
}

export default App;
