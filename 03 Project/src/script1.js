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