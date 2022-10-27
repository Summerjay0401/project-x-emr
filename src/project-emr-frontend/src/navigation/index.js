import { Routes, Route } from "react-router-dom";
import { Layout, Dashboard } from "../pages";
import Login from "../pages/Login";
import MyProfile from "../pages/MyProfile";
import Scheduler from "../pages/Scheduler";
import ProgressNotes from "../pages/ProgressNotes";
import LabResults from "../pages/LabResults";
import MyMedications from "../pages/MyMedications";
import Messages from "../pages/Messages";
import Telehealth from "../pages/Telehealth";
import Payments from "../pages/Payments";

import { ProtectedRoute } from "./protectedRoute";
import Signup from "../pages/Signup/Signup";

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<ProtectedRoute />}>
        <Route exact path="/" element={<Layout />}>
          <Route exact path="/" element={<Dashboard />} />
        </Route>
      </Route>

      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>

      <Route element={<ProtectedRoute />}>
        <Route path="/my-profile" element={<Layout />}>
          <Route path="/my-profile" element={<MyProfile />} />
        </Route>
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route path="/scheduler" element={<Layout />}>
          <Route path="/scheduler" element={<Scheduler />} />
        </Route>
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route path="/progress-notes" element={<Layout />}>
          <Route path="/progress-notes" element={<ProgressNotes />} />
        </Route>
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route path="/lab-results" element={<Layout />}>
          <Route path="/lab-results" element={<LabResults />} />
        </Route>
      </Route>

      <Route element={<ProtectedRoute/>}>
        <Route path='/my-medications' element={<Layout/>} >
          <Route path='/my-medications' element={<MyMedications />} />

        </Route>
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route path="/messages" element={<Layout />}>
          <Route path="/messages" element={<Messages />} />
        </Route>
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route path="/telehealth" element={<Layout />}>
          <Route path="/telehealth" element={<Telehealth />} />
        </Route>
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route path="/payments" element={<Layout />}>
          <Route path="/payments" element={<Payments />} />
        </Route>
      </Route>

      <Route element={<h1>Not Found</h1>} path="*" />
    </Routes>
  );
};

export default Router;
