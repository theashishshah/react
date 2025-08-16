# react

### Why react? What was the problem that react is solving?

```js
function appendChild(value, color) {
	const container = document.querySelector(".container");
	const ele = document.createElement("div");
	ele.innerText = value;
	ele.style.color = color;
	ele.style.fontFamily = "inter";
	ele.style.fontSize = "20px";
	container.appendChild(ele);
}

for (let i = 0; i < 3; i++) {
	appendChild("Hello my name is Ashish Shah" + i, "#b20fc4ff");
}

function Greeting({ name, color }) {
	return (
		<div style={{ color, fontFamily: "inter", fontSize: "20px" }}>
			Hello my name is {name}
		</div>
	);
}

function App() {
	return (
		<div className="container">
			<Greeting name="Ashish Shah0" color="#b20fc4ff" />
			<Greeting name="Ashish Shah1" color="#b20fc4ff" />
			<Greeting name="Ashish Shah2" color="#b20fc4ff" />
		</div>
	);
}
```

### React is a framework or library and why? || What react actually is?

react is a library because it contains sevrals js functions/components/utility that can be used any in fashion for the UI layer, there is no hard and fast rule that you've to use these functions in a certain manner.
React works on the UI layer only and only and only controls how UI should look like.

### What are the difference between React and React-Dom?

React is just a library that provide us bunch of js functions/utility that is used to make UI, but react doesn't know how this UI will be loaded to the browser's DOM, so we use react-dom that is again a library that know how to talk to browser's DOM and react, so react-dom acts as bridge between browser's dom and react components.

#### a bit of professional

React is the core library for building UI components — it tells us what the UI should look like given some state. But React itself doesn’t know how to render that UI into the browser.
That’s where ReactDOM comes in: it’s a library that knows how to translate React components into actual DOM elements. In short, React builds the UI, ReactDOM mounts it into the browser.

### Let's understand something deeply

```js
import React from "https://esm.sh/react@19.1.0"
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client"

const app = () => {
    return (
        React.createElement(
            "div",
            { style: { background: "black", height: "1000px" }},
            React.createElement(
                "span",
                { style: { background: "red", color: "white", fontSize: "25px" } },
                "Hello, this is Ashish Shah, learning classic react application."
            )
        )
    )
}

const container = document.getElementById("root") // this is into actual dom
// get this actual dom wala element
//React lets you create virtual elements (React.createElement
const root = React.createElement(app)
// When you call React.createElement(app), you're not rendering it yet — you're building the Virtual DOM node for this component. and it can go nested as much as you like
// root is now in the air: it is not in the real dom or I can say it is now in virtual dom
ReactDOM.createRoot(container).render(React.createElement(app))
ReactDOM.createRoot(container).render(React.createElement("div", {}, "Hy, this is classic inside root"))
// but react dom is telling, create something(which is in this case container: this will be the starting point of the body) and inside this root render your react component so, render method is here acting as a bridge between raact functions that are in the air and real dom which is in browser
ReactDOM.createRoot(container) → Tells React:

"Hey, this container (div#root) is where you're allowed to control the DOM."
```

### What is diffing algorithm? What is reconciliation? what and how does it work?

```js
const app = () => {
	return React.createElement(
		"div",
		{ style: { background: "black", height: "1000px" } },
		React.createElement(
			"span",
			{ style: { background: "red", color: "white", fontSize: "25px" } },
			"Hello, this is Ashish Shah, learning classic react application."
		)
	);
};
/** using react you made some components, right? and these components lies in air until reactDOM says lets render them into real-dom, right?
but when you change something in your react-components, your real dom doesn't know until react-dom tells but does react-dom, re-renders all, I guess no? react-dom compares the virtual dom which you made using react.createElement to the real-dom and which parts has changed that part only react-dom render instead of rendering the whole set of componenets this is called reconciliation and algorithm behind this mechanism is called diffing algorithm

💡 What is the Diffing Algorithm in React?
🔍 In one line:
The diffing algorithm is how React compares two versions of the Virtual DOM (VDOM) and finds what exactly changed, so that it can efficiently update only those parts in the real DOM.

🧠 Why Do We Need It?
When your component updates (due to state/props changes), React:
Builds a new VDOM tree (in memory).
Compares it to the previous VDOM tree.
Figures out the minimum number of changes needed.
Applies only those changes to the real DOM.
This avoids re-rendering the entire UI, which is slow.

Final Summary (in your words, refined)

When you create components using React, they first exist in memory (virtual DOM) and are only rendered into the real DOM when ReactDOM tells it to.

When you change a component, React doesn't blindly re-render everything. Instead:

It builds a new virtual DOM.

It compares the new and old virtual DOM trees using a diffing algorithm.

Then it updates only the changed parts in the real DOM.

This entire process is called reconciliation, and the optimization mechanism behind it is the diffing algorithm.

 */
```

### A cool example how react js works with components and without components

```js
import React from "https://esm.sh/react@19.1.0";
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client";

const coffee = (drinks) => {
	const children = drinks.drinks.map((drink) =>
		React.createElement("li", {}, drink)
	);

	return React.createElement("ul", {}, children);
};

const app = () => {
	return React.createElement("div", {}, [
		React.createElement("h1", {}, "Types of coffee drink: "),
		React.createElement(
			coffee,
			{ drinks: ["espresso", "latte", "cappuccino"] },
			"Extra children"
		), // doesn't matter, if you pass like this into div then it will act as attribute to that div only.
		React.createElement(
			"div",
			{ drink: ["chai", "coffee", "pepsi"], style: { color: "blue" } },
			"Drink as much you can"
		),
	]);
};

const container = document.getElementById("root");
ReactDOM.createRoot(container).render(React.createElement(app));
```

```sh
npm install --save-dev eslint-config-prettier eslint-plugin-prettier
npm install --save-dev prettier eslint
```

### what is babel? look this code and you'll understand what actually babel is and why is it used?

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
		<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
		<title>How to take babel into picture</title>
	</head>
	<body>
		<div id="root">Hello, this is classic react with babel</div>
		<script src="https://unpkg.com/@babel/standalone@7.28.3/babel.min.js"></script>
		<script type="text/babel">
			// <script type="text/babel"> tells the browser:
			// "Don't run this JavaScript directly — pass it to Babel first."

			const chai = () => {
				return (
					<div>
						<h1>This is inside React jsx type component</h1>
						<p>
							Hello, This is not classic jsx but this is using
							babel compiler to convert it into react code and
							react is getting converted into js code
						</p>
					</div>
				);
			};

            // Babel (via @babel/standalone) converts this JSX into something like:
			// const chai = () => {
			// 	return React.createElement(
			// 		"div",
			// 		{},
			// 		React.createElement(
			// 			"h1",
			// 			{},
			// 			"This is inside React JSX component"
			// 		),
			// 		React.createElement(
			// 			"p",
			// 			{},
			// 			"Hello, This is not classic JSX but..."
			// 		)
			// 	);
			// };
            // Browsers do not natively understand JSX — it's not valid JavaScript.
            // So Babel does two things:
            // Transpiles JSX → React.createElement calls
            // Optionally, also transpiles modern JS (e.g., ES6+ syntax) into ES5 for old browsers

			const container = document.getElementById("root");
			console.log("what am i getting inside container: ", container);
			const root = ReactDOM.createRoot(container);
			root.render(React.createElement(chai));
		</script>
	</body>
</html>
```
### what is transpiler?
✅ A transpiler is a tool that:
Takes code written in one version or flavor of a programming language
and translates it into another version or flavor of the same or similar language.

A compiler usually converts high-level code → machine code (e.g., C → binary)
A transpiler converts code → more code (e.g., ES6 → ES5 JavaScript)
example: let take JSX code
```jsx
const app = () =>{
    return (
        <div> hello </div>
    )
}
// traspiler convert this code into
const app = () =>{
    React.createElement("div", {}, "Hello")
}
```



## React, ReactDOM, and Transpiler(Babel) Combination
```html

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<title>React Babel Coffee</title>
		<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
		<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
		<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
	</head>
	<body>
		<div id="root">Loading...</div>

		<script type="text/babel">
			const { useState, useEffect } = React;
			const Coffee = ({ drinks }) => {
				return (
					<div>
						<ul>
							{drinks.map((drink, index) => (
								<li key={index}>{drink}</li>
							))}
						</ul>
					</div>
				);
			};

			const Main = () => {
				const [drinks, setDrinks] = useState([
					"espresso",
					"cappuccino",
					"latte",
				]);

				const addDrink = () => {
					const newDrink = prompt("Enter a new drink: ");
					if (newDrink) setDrinks([...drinks, newDrink]);
				};

                useEffect(() =>(
                    localStorage.setItem("drinks", [...drinks])
                ), [drinks])

				return (
					<div>
						<h1>Variations of coffee</h1>
						<Coffee drinks={drinks} />
						<button onClick={addDrink}>Add drink</button>
					</div>
				);
			};

			const container = document.getElementById("root");
			const root = ReactDOM.createRoot(container);
			root.render(<Main />);
		</script>
	</body>
</html>


```