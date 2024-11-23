import "./App.css";
import { BreadProvider } from "./context/BreadContext";
import GameBoard from "./components/GameBoard";

function App() {
	return (
		<div className="App">
			<div className="container">
				<BreadProvider>
					<GameBoard />
				</BreadProvider>
			</div>
		</div>
	);
}

export default App;
