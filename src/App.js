import logo from './logo.svg';
import './App.css';
import { Form, Formik } from "formik";
import { TextField } from "./components/TextField";
import * as Yup from 'yup';

function App() {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('FirstName is required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Last name is required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be atleast 8 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('confirm Password is required'),
  })
  return (
    <Formik initialValues={{
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }}
      validationSchema={validate}
      onSubmit={
        values => {
          console.log(values)
        }
      }>
      { formik => (
        <div>
          <h1 className="my-4 font-weight-bold-display-4">Sign Up</h1>
          {console.log(formik)}
          <Form>
            <TextField label="First name" name="firstName" type="text" />
            <TextField label="Last name" name="lastName" type="text" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="Password" name="password" type="password" />
            <TextField label="Confirm Password" name="confirmPassword" type="password" />
            <button className="btn btn-dark mt-3" type="submit">Register</button>
            <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
          </Form>
        </div>
      )}
    </Formik>
  );
}


export default App;
