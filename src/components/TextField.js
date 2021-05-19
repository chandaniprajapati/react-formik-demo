import React from "react";
import { ErrorMessage, useField, Form, FormikProps, Formik } from 'formik';
import '../App.css';

export const TextField = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className="mb-2">
            <label htmlFor={field.name}>{label}</label>
            <input
                {...field} {...props}
                className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
                autoComplete="off"
            />
            <ErrorMessage name={field.name} ></ErrorMessage>
        </div>
    )
}