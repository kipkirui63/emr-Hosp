// PatientRegistrationForm.js
import React, { useState } from "react";

function PatientRegistrationForm() {
  const [patientData, setPatientData] = useState({
    name: "",
    age: "",
    contactInformation: "",
    medicalHistory: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/patients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(patientData),
      });
      if (!response.ok) {
        throw new Error("Patient registration failed");
      }
      // Handle success (e.g., show success message)
      console.log("Patient registered successfully");
    } catch (error) {
      // Handle error (e.g., show error message)
      console.error("Error registering patient:", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={patientData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={patientData.age}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Contact Information:</label>
        <input
          type="text"
          name="contactInformation"
          value={patientData.contactInformation}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Medical History:</label>
        <textarea
          name="medicalHistory"
          value={patientData.medicalHistory}
          onChange={handleChange}
        ></textarea>
      </div>
      <button type="submit">Register Patient</button>
    </form>
  );
}

export default PatientRegistrationForm;
