import "./App.css";
import { NumberProvider } from "./contexts/mainContext";
import Button from "./components/Button";
import Test from "./components/Test";
function App() {
  return (
    <NumberProvider>
      <div className="App">
        <h1>hello world</h1>
        <Button></Button>
        <Button></Button>
        <Button></Button>
        <Test />
      </div>
    </NumberProvider>
  );
}

export default App;
