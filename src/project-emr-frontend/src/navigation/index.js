import { Routes, Route, useLocation } from "react-router-dom";
import { Layout, Dashboard } from "../pages";
import Login from "../pages/Login";
import MyProfile from "../pages/MyProfile";
import Appointments from "../pages/Appointments";
import ProgressNotes from "../pages/ProgressNotes";
import LabResults from "../pages/LabResults";
import MyMedications from "../pages/MyMedications";
import Messages from "../pages/Messages";
import Telehealth from "../pages/Telehealth";
import Payments from "../pages/Payments";

import { ProtectedRoute } from './protectedRoute';

const Router = () => {
  const location = useLocation();
  console.log('hash', location.hash);
  console.log('pathname', location.pathname);
  console.log('search', location.search);
  return (
    <Routes>

      <Route exact path='/' element={<ProtectedRoute/>}>
        <Route exact path='/' element={<Layout/>} >
          <Route exact path='/' element={<Dashboard />} />
        </Route>
      </Route>
      
      <Route path="/login" element={<Login />}></Route>

      <Route element={<ProtectedRoute/>}>
        <Route path='/my-profile' element={<Layout/>} >
          <Route path='/my-profile' element={<MyProfile />} />
        </Route>
      </Route>

      <Route element={<ProtectedRoute/>}>
        <Route path='/appointments' element={<Layout/>} >
          <Route path='/appointments' element={<Appointments />} />
        </Route>
      </Route>

      <Route element={<ProtectedRoute/>}>
        <Route path='/progress-notes' element={<Layout/>} >
          <Route path='/progress-notes' element={<ProgressNotes />} />
        </Route>
      </Route>

      <Route element={<ProtectedRoute/>}>
        <Route path='/lab-results' element={<Layout/>} >
          <Route path='/lab-results' element={<LabResults />} />
        </Route>
      </Route>

      <Route element={<ProtectedRoute/>}>
        <Route path='/my-medications' element={<Layout/>} >
          <Route path='/my-medications' element={<LabResults />} />
        </Route>
      </Route>

      <Route element={<ProtectedRoute/>}>
        <Route path='/messages' element={<Layout/>} >
          <Route path='/messages' element={<Messages />} />
        </Route>
      </Route>

      <Route element={<ProtectedRoute/>}>
        <Route path='/telehealth' element={<Layout/>} >
          <Route path='/telehealth' element={<Telehealth />} />
        </Route>
      </Route>

      <Route element={<ProtectedRoute/>}>
        <Route path='/payments' element={<Layout/>} >
          <Route path='/payments' element={<Payments />} />
        </Route>
      </Route>

      <Route element={<h1>Not Found</h1>} path="*" /> 
    </Routes>
  );
};

export default Router;
