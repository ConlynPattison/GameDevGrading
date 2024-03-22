import PongPart2 from "./routes/PongPart2";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import PongPart1 from "./routes/PongPart1";
import PlatformerPart1 from "./routes/PlatformerPart1";
import PlatformerPart2 from "./routes/PlatformerPart2";
import SpaceInvadersPart1 from "./routes/SpaceInvadersPart1";
import SpaceInvadersPart2 from "./routes/SpaceInvadersPart2";
import TowerDefensePart1 from "./routes/TowerDefensePart1";


const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />
	},
	{
		path: "pong1",
		element: <PongPart1 />
	},
	{
		path: "pong2",
		element: <PongPart2 />
	},
	{
		path: "platformer1",
		element: <PlatformerPart1 />
	},
	{
		path: "platformer2",
		element: <PlatformerPart2 />
	},
	{
		path: "space-invaders1",
		element: <SpaceInvadersPart1 />
	},
	{
		path: "space-invaders2",
		element: <SpaceInvadersPart2 />
	},
	{
		path: "tower-defense1",
		element: <TowerDefensePart1 />
	}
])

const App = () => {
	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
