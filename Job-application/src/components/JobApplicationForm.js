import React from "react";

const JobApplicationForm = ({
  formData,
  setFormData,
  errors,
  handlePreview,
  handleReset,
}) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handlePreview();
  };

  return (
    <form
      data-testid="job-application-form"
      className="layout-column ml-auto"
      onSubmit={onSubmit}
    >
      <h2 className="ma-auto pa-20">Provide your details</h2>

      <div>
        <label className="font-weight-bold">
          Name:
          <input
            data-testid="input-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="pa-10 ml-120"
          />
        </label>
        {errors.name && (
          <p data-testid="error-name" className="error">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label className="font-weight-bold">
          Email:
          <input
            data-testid="input-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="pa-10 ml-120"
          />
        </label>
        {errors.email && (
          <p data-testid="error-email" className="error">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label className="font-weight-bold">
          Experience (years):
          <input
            data-testid="input-experience"
            type="text"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="pa-10 ml-20"
          />
        </label>
        {errors.experience && (
          <p data-testid="error-experience" className="error">
            {errors.experience}
          </p>
        )}
      </div>

      <div className="ml-100">
        <button data-testid="preview-button" type="submit" className="mx-50">
          Preview
        </button>
        <button
          data-testid="reset-button"
          type="button"
          className="mx-50"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default JobApplicationForm;
