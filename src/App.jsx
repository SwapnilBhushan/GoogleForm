import { useState } from "react";
import Form from "./components/Form/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import TabSection from "./components/Tab/TabSection";
import NewForm from "./components/Form/NewForm";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/newForm" element={<NewForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
