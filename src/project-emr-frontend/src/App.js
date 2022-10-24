import { Routes, Route } from "react-router-dom"
import {
  Layout,
  Dashboard,
  Sample
} from './pages'

import './App.css';

function App() {
  return (
    <div className="app">
      {/* this defines all the routes */}
      <Routes>
        <Route path='/' element={<Layout><Dashboard /></Layout>}></Route>
        <Route path='/sample' element={<Layout><Sample /></Layout>}></Route>
      </Routes>
    </div>
  );
}


export default App;
