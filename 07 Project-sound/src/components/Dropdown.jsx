import { useState } from "react";

function Dropdown() {
	const [isOpen, setIsOpen] = useState(false);
	const [selected, setSelected] = useState("Select an option");

	const options = ["Option 1", "Option 2", "Option 3"];

	const toggleDropdown = () => setIsOpen(!isOpen);

	const handleSelect = (option) => {
		setSelected(option);
		setIsOpen(false);
	};

	return (
		<div className="relative inline-block text-left">
			<div>
				<button
					type="button"
					onClick={toggleDropdown}
					className="inline-flex justify-between w-48 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
				>
					{selected}
					<svg
						className="-mr-1 ml-2 h-5 w-5"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fillRule="evenodd"
							d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 011.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
							clipRule="evenodd"
						/>
					</svg>
				</button>
			</div>

			{isOpen && (
				<div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
					<div className="py-1">
						{options.map((option) => (
							<button
								key={option}
								onClick={() => handleSelect(option)}
								className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
							>
								{option}
							</button>
						))}
					</div>
				</div>
			)}
		</div>
	);
}

export default Dropdown;
