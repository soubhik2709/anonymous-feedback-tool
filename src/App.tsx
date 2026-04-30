import React from "react";
import "./App.css";

import HomePage from "./pages/HomePage";
// import CreateFormPage from './pages/CreateFormPage';
// import DashboardPage from "./pages/DashboardPage";
// import SubmitFeedbackPage from './pages/SubmitFeedbackPage';
function App() {
  return (
    <div className="page-wrapper">
      <div className="container shadow-xl">
        <HomePage />
        {/* <CreateFormPage/>  */}
        {/* <DashboardPage /> */}
        {/* //  <SubmitFeedbackPage/> */}
      </div>
    </div>
  );
}

export default App;
