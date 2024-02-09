import PongPart2 from "./routes/PongPart2";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import PongPart1 from "./routes/PongPart1";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home/>
	},
	{
		path: "pong1",
		element: <PongPart1/>
	},
	{
		path: "pong2",
		element: <PongPart2/>
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
