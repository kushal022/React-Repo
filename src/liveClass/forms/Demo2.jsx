// same as Demo1

import React, { useState } from "react";
import "./demo1.css";

const Demo2 = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
    });

    const [valid, setValid] = useState({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        phone: true,
    });

    const [submit, setSubmit] = useState(null);

    const [showPswd, setShowPswd] = useState({
        password: "password",
        confirmPassword: "password",
    });

    const [bgClr, setBgClr] = useState({
        password: "#f2f2f2",
        confirmPassword: "#f2f2f2",
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Toggle password visibility
    const togglePasswordVisibility = (field) => {
        setShowPswd((prev) => ({
            ...prev,
            [field]: prev[field] === "password" ? "text" : "password",
        }));
        setBgClr((prev) => ({
            ...prev,
            [field]: prev[field] === "#f2f2f2" ? "#f96d00" : "#f2f2f2",
        }));
    };

    // Validate fields
    const checkField = (fieldName, fieldValue) => {
        switch (fieldName) {
            case "name":
                return fieldValue.length >= 3;
            case "email":
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(fieldValue);
            case "password":
                return fieldValue.length > 6;
            case "confirmPassword":
                return fieldValue === formData.password;
            case "phone":
                return /^\+?\d{1,4}?\s?\d{10}$/.test(fieldValue);
            default:
                return true;
        }
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = Object.keys(formData).every((field) => {
            const isFieldValid = checkField(field, formData[field]);
            setValid((prev) => ({ ...prev, [field]: isFieldValid }));
            return isFieldValid;
        });

        if (isValid) {
            setSubmit("yes");
            console.log("Form submitted successfully");
        } else {
            setSubmit("no");
            console.log("Form submission failed");
        }
    };

    return (
        <div className="form-container">
            <h1 className="heading">React Forms</h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Registration Form</legend>
                    {["name", "email", "password", "confirmPassword", "phone"].map(
                        (field, index) => (
                            <div key={index}>
                                <label htmlFor={field}>
                                    {field.charAt(0).toUpperCase() + field.slice(1)}:
                                </label>
                                <input
                                    type={
                                        field.includes("password") ? showPswd[field] :
                                            field === "email" ? "email" : "text"
                                    }
                                    id={field}
                                    name={field}
                                    value={formData[field]}
                                    onChange={handleChange}
                                    placeholder={`Enter your ${field}`}
                                    style={{
                                        borderColor: valid[field] ? "#ccc" : "red",
                                    }}
                                />
                                {field.includes("password") && (
                                    <button
                                        type="button"
                                        style={{
                                            backgroundColor: bgClr[field],
                                        }}
                                        onClick={() => togglePasswordVisibility(field)}
                                    >
                                        {showPswd[field] === "password" ? "Show" : "Hide"}
                                    </button>
                                )}
                                <p>
                                    {!valid[field] && (
                                        <span style={{ color: "red" }}>
                                            {field === "confirmPassword"
                                                ? "Passwords do not match"
                                                : `Invalid ${field}`}
                                        </span>
                                    )}
                                </p>
                            </div>
                        )
                    )}
                    <div>
                        <button type="submit">Submit</button>
                        <p className="subMsg">
                            {submit === "yes" ? (
                                <span style={{ color: "green" }}>Form Submitted</span>
                            ) : submit === "no" ? (
                                <span>Form not Submitted</span>
                            ) : null}
                        </p>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default Demo2;
