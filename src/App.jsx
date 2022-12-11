import { NotionShareWidget } from "./container";
import "./App.css";

/**
 *@component This is the main App functional component wich creates a NotionShareWidget
 * @typedef {function} App
 * @returns {JSX} NotionShareWidget component
 */

function App() {
  return (
    <div className="App">
      <NotionShareWidget />
    </div>
  );
}

export default App;
