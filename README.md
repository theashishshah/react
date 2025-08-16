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