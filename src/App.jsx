import Counter from "./components/Counter";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="container">
      <h1>Redux Toolkit Application</h1>
      <Counter />
      <Posts />
    </div>
  );
}

export default App;