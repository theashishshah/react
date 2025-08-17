import { useState } from "react"

export default function Order() {
    const [count, setCount] = useState(0)
    const handleOrder = (e) => {
		e.preventDefault();
		// setCount((prev) => prev + 1); // 0 + 1 = 1 again: 4 + 1 = 5
		// setCount((prev) => prev + 1); // 1 + 1 = 2 again: 5 + 1 = 6
		// setCount((prev) => prev + 1); // 2 + 1 = 3 again: 6 + 1 = 7
		// setCount((prev) => prev + 1); // 3 + 1 = 4 again: 7 + 1 = 8
		setCount(4); // 0 -> 4
		setCount(4); // 4 -> 4
		setCount(4); // 4 -> 4
		setCount(4); // 4 -> 4
		setCount(4); // 4 -> 4
	}
    return (
        <>
            <h1>Coffee Counter</h1>
            <p>Total served coffee: { count }</p>
            <button onClick={handleOrder}>Order</button>
        </>
    )
}