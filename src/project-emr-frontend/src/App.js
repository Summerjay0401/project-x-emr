import { Routes, Route } from "react-router-dom"
import './App.css';
// import Dashboard from '../src/components/Dashboard.jsx'
import BasicCard from "./components/BasicCard.jsx";

function App() {
  return (
    <div className="app">
      <div className="main">
        {/* this defines all the routes */}
        <Routes>
          <Route path='/' element={<BasicCard />}></Route>
        </Routes>
      </div>
    </div>
  );
}


export default App;
