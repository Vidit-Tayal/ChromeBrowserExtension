import "./App.css";
import Album from "./components/Album";
import { Route, Routes } from "react-router-dom";
import Edit from "./components/Edit/Edit";

function App() {
  return (
    <div className="mainContent">
      <Routes>
        <Route exact path="/" Component={Album}></Route>
        <Route exact path="/edit" Component={Edit}></Route>
      </Routes>
    </div>
  );
}

export default App;
