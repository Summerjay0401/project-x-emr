import { Routes, Route } from "react-router-dom";
import { Layout, Dashboard, Sample } from "../pages";
import Login from "../pages/Login";
import MyProfile from "../pages/MyProfile";
import Scheduler from "../pages/Scheduler";
import ProgressNotes from "../pages/ProgressNotes";
import LabResults from "../pages/LabResults";
import MyMedications from "../pages/MyMedications";
import Messages from "../pages/Messages";
import Telehealth from "../pages/Telehealth";
import Payments from "../pages/Payments";

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Dashboard />
          </Layout>
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
        path="/scheduler"
        element={
          <Layout>
            <Scheduler />
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
