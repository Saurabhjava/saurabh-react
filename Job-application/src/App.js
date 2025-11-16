import React, { useState } from "react";
import "./App.css";
import "h8k-components";
import JobApplicationForm from "./components/JobApplicationForm";
import Preview from "./components/Preview";
import SuccessMessage from "./components/SuccessMessage";

const title = "Job Application Portal";

const App = () => {
  const [step, setStep] = useState("form"); // form | preview | success
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    experience: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (
      !formData.experience ||
      isNaN(formData.experience) ||
      parseInt(formData.experience) <= 0
    ) {
      newErrors.experience = "Experience must be a positive number.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePreview = () => {
    if (validate()) {
      setStep("preview");
    }
  };

  const handleClear = () => {
    setStep("form");
    setFormData({ name: "", email: "", experience: "" });
    setErrors({});
  };

  const handleSubmit = () => {
    setStep("success");
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", experience: "" });
    setErrors({});
    setStep("form");
  };

  return (
    <div className="App pt-30 ma-auto" data-testid="app">
      <h8k-navbar header={title}></h8k-navbar>
      {step === "form" && (
        <JobApplicationForm
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          handlePreview={handlePreview}
          handleReset={handleReset}
        />
      )}
      {step === "preview" && (
        <Preview
          formData={formData}
          handleClear={handleClear}
          handleSubmit={handleSubmit}
        />
      )}
      {step === "success" && <SuccessMessage handleReset={handleReset} />}
    </div>
  );
};

export default App;
