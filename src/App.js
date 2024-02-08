import GradeSummary from "./components/GradeSummary";

function App() {
  return (
    <div>
      <header>
        <h1>Grading: Pong Part 2</h1>
      </header>
      <h2>
        Student Name: <input type="text" />
      </h2>
      <GradeSummary />
    </div>
  );
}

export default App;
