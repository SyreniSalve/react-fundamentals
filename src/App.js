import logo from "./logo.svg";
import "./App.css";

const ChildrenWithTitile = ({ title, children }) => 
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  
const FirstReactComponent = () => <p>I am new here!</p>;

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
