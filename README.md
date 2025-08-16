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

        for(let i = 0; i < 3; i++){
            appendChild("Hello my name is Ashish Shah"+i, "#b20fc4ff")
        }

function Greeting({ name, color }) {
  return <div style={{ color, fontFamily: "inter", fontSize: "20px" }}>
    Hello my name is {name}
  </div>;
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
import React from "https://esm.sh/react@19.1.0"
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client"

const coffee = ( drinks ) => {
    const children = drinks.drinks.map((drink) => (
        React.createElement("li", {}, drink)
    ))

    return (
        React.createElement("ul", {}, 
            children
        )
    )
}

const app = () => {
    return (
        React.createElement(
            "div",
            {},
            [
                React.createElement("h1", {}, "Types of coffee drink: "),
                React.createElement(coffee, { drinks: ["espresso", "latte", "cappuccino"] }, "Extra children"), // doesn't matter, if you pass like this into div then it will act as attribute to that div only.
                React.createElement("div", {drink: ["chai", "coffee", "pepsi"], style: { color: "blue"}}, "Drink as much you can")
            ]
        )
    )
}

const container = document.getElementById("root")
ReactDOM.createRoot(container).render(React.createElement(app))
```

### what is babel?

### what is transpiler?