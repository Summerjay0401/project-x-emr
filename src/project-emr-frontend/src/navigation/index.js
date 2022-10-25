import { Routes, Route } from "react-router-dom"
import {
  Layout,
  Dashboard,
  Sample
} from '../pages'
import Login from "../pages/Login"

const Router = () => {
  return (
    <Routes>
    <Route path='/' element={<Layout><Dashboard /></Layout>}></Route>
    <Route path='/sample' element={<Layout><Sample /></Layout>}></Route>
    <Route path='/login' element={<Login/>}></Route>
  </Routes>
  )
}

export default Router