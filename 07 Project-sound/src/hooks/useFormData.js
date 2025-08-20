import { useState } from "react";

export default function useFormData(initial = {}) {
    const [values, setValues] = useState(initial)
    
    const handleChange = async (e) => {
        const { name, type, files, value } = e.target
        setValues((pre) => ({
            ...pre,
            [name]: type === "file" ? files[0] : value
        }))
    }

    const getFormData = () => {
        const formData = new FormData()
        for (const key in values) {
            formData.append(key, values[key])
        }
        return formData
    }

    const resetFormData = () => setValues(initial)

    return {
        values, handleChange, getFormData, resetFormData
    }
}