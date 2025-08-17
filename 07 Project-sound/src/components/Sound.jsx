import "./App.css";
import useSound from "use-sound";
import videoplayback from "./sounds/videoplayback.mp3"; // Make sure this file exists
import { useEffect } from "react";

function App() {
	const [play] = useSound(videoplayback);

	useEffect(() => {
		const interval = setInterval(() => {
			play();
		}, 60 * 60 * 1000);

		return () => clearInterval(interval);
	}, [play]);

	return (
		<div className="App">
			<button onClick={play}>Play Sound</button>
		</div>
	);
}

export default App;
