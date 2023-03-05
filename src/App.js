import logo from "./logo.svg";
import "./App.css";
import ChildrenWithTitile from "./ChildrenWithTitle";
import { FirstReactComponent } from "./FirstReactComponent";
import { ConditionalRenderingComponent } from "./ConditionalRenderingComponent";
import { listOfAllEmenets, filteredList } from "./RenderingLists";

function App() {
 
  return (
    <div>
      <h1>Hello world</h1>
      <p>You look beautiful</p>
      <FirstReactComponent />
      <ChildrenWithTitile title="I am title" children="I am children" />
      <ConditionalRenderingComponent isBlue={true} />
      <ConditionalRenderingComponent isBlue={false} />
      <section>
        <h2>Full list</h2>
        <ul>{listOfAllEmenets}</ul>
      </section>
      <section>
      <h2>Filtered list</h2>
      <ul>{filteredList}</ul>
      </section>
    </div>
  );
}

export default App;
