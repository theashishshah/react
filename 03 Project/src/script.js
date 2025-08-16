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

const container = document.getElementById("root")
ReactDOM.createRoot(container).render(React.createElement("div", {}, "Hy, this is classic inside root"))