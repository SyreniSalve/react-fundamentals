import logo from "./logo.svg";
import "./App.css";
import ChildrenWithTitile from "./ChildrenWithTitle";
import { FirstReactComponent } from "./FirstReactComponent";

function App() {
  return (
    <div>
      <h1>Hello world</h1>
      <p>You look beautiful</p>
      <FirstReactComponent />
      <ChildrenWithTitile title="I am title" children="I am children" />
    </div>
  );
}

export default App;
