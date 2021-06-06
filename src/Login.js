import React, { useState } from "react";
import { Formik } from "formik";
import styled from "styled-components";
import axios from 'axios';
import { setUserSession } from './Utils/Common';
import {
  Form,
  TextInput,
  Button,
} from "carbon-components-react";

const Container = styled.div`
  max-width: 800px;
  width: 25rem;
  border-radius: 5px;
  padding: 3rem 3rem;
  margin: 0.5rem 1rem;
  background: papayawhip;
  border: 5px  white;
`;

function Login(props) {
  const [loading, setLoading] = useState(false);
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);

  function validationHandler({ email, password }) {
    let errors = {};

    if (!email) {
      errors.email = "Required";
    }
    if (!password) {
      errors.password = "Required";
    }

    return errors;
  }

//   const [hasSubmitted, setHasSubmitted] = useState(false);

//   function submissionHandler(values, { setSubmitting }) {
//     setTimeout(() => {
//       console.log(JSON.stringify(values, null, 2));
//       setSubmitting(false);
//       setHasSubmitted(true);
//     }, 800);
//   }

  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios.post('http://localhost:4000/users/signin', { username: username.value, password: password.value }).then(response => {
      setLoading(false);
      setUserSession(response.data.token, response.data.user);
      props.history.push('/dashboard');
    }).catch(error => {
      setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("Something went wrong. Please try again later.");
    });
  }

  return (
    <Container>
      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
        validate={validationHandler}
        // onSubmit={submissionHandler}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
          <Form
            onSubmit={handleSubmit}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <div style={{ marginBottom: "1em" }}>
              <TextInput style={{ marginBottom: "2em" }}
                id="email"
                type ="text"
                {...username}
                autoComplete="new-password"
                // name="email"
                labelText="Email"
                placeholder="Enter an email address"
                // value={values.email}
                // invalidText={errors.email}
                // invalid={Boolean(touched.email && errors.email)}
                // disabled={hasSubmitted}
              />
              <TextInput 
                id="password"
                type="password"
                {...password} 
                autoComplete="new-password"
              

                name="password"
                labelText="Password"
                placeholder="Enter a password"
                // value={values.password}
                // invalidText={errors.password}
                // invalid={Boolean(touched.password && errors.password)}
                // disabled={hasSubmitted}
                
              />
              {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
            </div>
            {/* {isSubmitting || hasSubmitted ? (
              <InlineLoading
                success={hasSubmitted}
                icondescription="Active loading indicator"
                description={
                  hasSubmitted ? "Submission successful" : "Submitting data..."
                }
              />
            ) : (
              <Button type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            )} */}

            <Button type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} >
                Submit
              </Button>
            
          </Form>
        )}
      </Formik>
    </Container>
  );
}

const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);
  
    const handleChange = e => {
      setValue(e.target.value);
    }
    return {
      value,
      onChange: handleChange
    }
}
export default Login
