// NurseDashboard.js
import React, { useState } from 'react';

function NurseDashboard() {
    const [examinationFormData, setExaminationFormData] = useState({
        patientName: '',
        examinationDetails: '',
        diagnosis: '',
        treatment: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setExaminationFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Assuming you have an API endpoint for submitting examination reports
            const response = await fetch('/api/reports/examination', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(examinationFormData)
            });

            if (!response.ok) {
                throw new Error('Failed to submit examination report');
            }

            // Reset form data after successful submission
            setExaminationFormData({
                patientName: '',
                examinationDetails: '',
                diagnosis: '',
                treatment: ''
            });
        } catch (error) {
            console.error('Error submitting examination report:', error);
        }
    };

    return (
        <div>
            <h2>Nurse Dashboard</h2>
            <form onSubmit={handleSubmit}>
                {/* Form fields for examination report */}
                {/* Example: */}
                <div>
                    <label>Patient Name:</label>
                    <input type="text" name="patientName" value={examinationFormData.patientName} onChange={handleChange} />
                </div>
                <div>
                    <label>Examination Details:</label>
                    <textarea name="examinationDetails" value={examinationFormData.examinationDetails} onChange={handleChange}></textarea>
                </div>
                <div>
                    <label>Diagnosis:</label>
                    <input type="text" name="diagnosis" value={examinationFormData.diagnosis} onChange={handleChange} />
                </div>
                <div>
                    <label>Treatment:</label>
                    <input type="text" name="treatment" value={examinationFormData.treatment} onChange={handleChange} />
                </div>
                <button type="submit">Submit Examination Report</button>
            </form>
        </div>
    );
}

export default NurseDashboard;
