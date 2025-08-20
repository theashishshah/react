// components/FormWithHook.jsx
import React, { useState } from "react";
import useFormData from "../hooks/useFormData";

const FormWithHook = () => {
    const { values, handleChange, getFormData, resetForm } = useFormData({
        username: "",
        file: null,
    });

    const [status, setStatus] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = getFormData();

        try {
            const response = await fetch("https://example.com/api/upload", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                setStatus("Upload successful!");
                resetForm();
            } else {
                setStatus("Upload failed.");
            }
        } catch (err) {
            setStatus("An error occurred.");
        }
    };

    return (
        <div>
            <h2>Form Using useFormData Hook</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Username:
                        <input
                            className="text-black"
                            type="text"
                            name="username"
                            value={values.username}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Upload File:
                        <input type="file" name="file" onChange={handleChange} required />
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
            <p>{status}</p>
        </div>
    );
};

export default FormWithHook;
