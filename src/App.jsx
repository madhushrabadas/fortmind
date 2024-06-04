import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Layout from "./common/Layout";
import Listing from "./pages/Listing";
import AppliedListing from "./pages/AppliedListing";
import SavedListing from "./pages/SavedListing";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/listing"
          element={
            <Layout>
              <Listing />
            </Layout>
          }
        />
        <Route
          path="/listing/applied"
          element={
            <Layout>
              <AppliedListing />
            </Layout>
          }
        />
        <Route
          path="/listing/saved"
          element={
            <Layout>
              <SavedListing />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
