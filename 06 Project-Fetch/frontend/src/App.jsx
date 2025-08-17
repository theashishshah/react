/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import { useState } from "react";

export default function App() {
	const [name, setName] = useState("");
	const [age, setAge] = useState("");
	const [responseData, setResponseData] = useState(null);
	let value = "Ashish"

	const handsubmit = async (e) => {
		e.preventDefault();
		const response = await fetch("/api/user", {
			method: "POST",
			headers: {
				"Content-Type": "Application/json",
			},
			body: JSON.stringify({ name, age }),
		});
		setName("");
		setAge("");
		const { message, naam } = await response.json();
		value = naam
		console.log("name data: ", value)
		setResponseData(naam);
	};
	const handleName = (e) => {
		setName(e.target.value);
	};

	const handleAge = (e) => {
		setAge(e.target.value);
	};
	return (
		<div>
			<h1>Hello this is simple application</h1>
			<form action="post" onSubmit={handsubmit}>
				<label htmlFor="name">name: </label>
				<input
					type="text"
					name="name"
					id="name"
					placeholder="Enter your name here..."
					value={name}
					autoComplete="on"
					onChange={handleName}
				/>
				<br />
				<label htmlFor="age">age: </label>
				<input
					type="text"
					name="age"
					id="age"
					placeholder="Enter your age here..."
					value={age}
					autoComplete="on"
					onChange={handleAge}
				/>
				<br />
				<button type="submit">submit</button>
			</form>
			{responseData && (
				<div>
					<h2>Response from backend:</h2>
					<pre>{value}</pre>
				</div>
			)}
		</div>
	);
}
