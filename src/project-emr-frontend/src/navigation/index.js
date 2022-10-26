import { Routes, Route } from "react-router-dom";
import { Layout, Dashboard, Sample } from "../pages";
import Login from "../pages/Login";
import MyProfile from "../pages/MyProfile";
import Appointments from "../pages/Appointments";
import ProgressNotes from "../pages/ProgressNotes";
import LabResults from "../pages/LabResults";
import MyMedications from "../pages/MyMedications";
import Messages from "../pages/Messages";
import Telehealth from "../pages/Telehealth";
import Payments from "../pages/Payments";

import { useAuth } from "../context/auth.context";
import { ProtectedRoute } from './protectedRoute';

const Router = () => {

  let { user } = useAuth();

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute user={user}>
            <Layout>
              <Dashboard />
            </Layout>
          </ProtectedRoute>
        }
      ></Route>

      <Route
        path="/sample"
        element={
          <Layout>
            <Sample />
          </Layout>
        }
      ></Route>

      <Route path="/login" element={<Login />}></Route>
      <Route
        path="/my-profile"
        element={
          <Layout>
            <MyProfile />
          </Layout>
        }
      ></Route>

      <Route
        path="/appointments"
        element={
          <Layout>
            <Appointments />
          </Layout>
        }
      ></Route>

      <Route
        path="/progress-notes"
        element={
          <Layout>
            <ProgressNotes />
          </Layout>
        }
      ></Route>

      <Route
        path="/lab-results"
        element={
          <Layout>
            <LabResults />
          </Layout>
        }
      ></Route>

      <Route
        path="/my-medications"
        element={
          <Layout>
            <MyMedications />
          </Layout>
        }
      ></Route>

      <Route
        path="/messages"
        element={
          <Layout>
            <Messages />
          </Layout>
        }
      ></Route>

      <Route
        path="/telehealth"
        element={
          <Layout>
            <Telehealth />
          </Layout>
        }
      ></Route>

      <Route
        path="/payments"
        element={
          <Layout>
            <Payments />
          </Layout>
        }
      ></Route>
    </Routes>
  );
};

export default Router;
