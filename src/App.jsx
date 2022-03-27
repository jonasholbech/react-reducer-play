import "./App.css";
import { NumberProvider } from "./contexts/mainContext";
import Button from "./components/Button";
function App() {
  return (
    <NumberProvider>
      <div className="App">
        <h1>hello world</h1>
        <Button></Button>
        <Button></Button>
        <Button></Button>
      </div>
    </NumberProvider>
  );
}

export default App;
