import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import CreateFormPage from './pages/CreateFormPage';
import DashboardPage from "./pages/DashboardPage";
import SubmitFeedbackPage from './pages/SubmitFeedbackPage';
import { Routes,Route } from "react-router-dom";
function App() {
  return (
    <div className="page-wrapper">
      <div className="container shadow-xl">
        <Routes>
         <Route path="/" element={ <HomePage />}/>
          <Route path="/create" element={<CreateFormPage/>} />
          <Route path="/dashboard/:formId" element={<DashboardPage />} />
          <Route path="/f/:shareToken" element={<SubmitFeedbackPage />} />

          {/* <Route path="*" element={<NotFoundPage />} /> */}
          {/* <Route path="/share/:formId" element={<ShareLinkPage />} /> */}
        </Routes>

      </div>
    </div>
  );
}

export default App;
