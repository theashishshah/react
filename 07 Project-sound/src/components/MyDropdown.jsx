import { useState } from "react"

function MyDropdown() {
    const [selected, setSelected] = useState("Select an option")
    const [isopen, setIsopen] = useState(false)
    const options = ["Option 1", "Option 2", "Option 3"];

    const toggleDropdown = () => setIsopen(isopen => !isopen)
    const handleSelect = (value) => {
        setSelected(value)
        toggleDropdown()
	};

    return (
		<div className="mt-4">
			<div>
				<button
					type="button"
					onClick={toggleDropdown}
					className="inline-flex justify-between border border-gray-300 w-48 px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium"
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

			{isopen && (
				<div className="absolute z-1 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
					<div className="py-1">
						{options.map((option, index) => (
							<button
								key={index}
								className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
								onClick={() => handleSelect(option)}
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

export default MyDropdown