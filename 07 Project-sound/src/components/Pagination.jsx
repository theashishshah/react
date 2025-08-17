import React from "react";

function Pagination({ currentPage, totalPages, onPageChange }) {
	const pageNumbers = [];

	for (let i = 1; i <= totalPages; i++) {
		pageNumbers.push(i);
	}

	return (
		<div className="flex items-center space-x-2 justify-center mt-4">
			<button
				onClick={() => onPageChange(currentPage - 1)}
				disabled={currentPage === 1}
				className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
			>
				Prev
			</button>

			{pageNumbers.map((number) => (
				<button
					key={number}
					onClick={() => onPageChange(number)}
					className={`px-3 py-1 rounded ${
						currentPage === number
							? "bg-blue-600 text-white"
							: "bg-gray-100 text-gray-700"
					}`}
				>
					{number}
				</button>
			))}

			<button
				onClick={() => onPageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
				className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
			>
				Next
			</button>
		</div>
	);
}

export default Pagination;
