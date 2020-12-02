// Import
import React from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { userLogin } from "../../services/userLoginService";
import * as constants from "../../constants.js";
import classes from "./loginForm.module.scss";
//  Component :
const LoginForm = ({ redirectLink }) => {
  const { forms } = constants;
  const history = useHistory();
  //  initial values
  const initialValues = {
    email: "",
    password: "",
  };
  //  onSubmit
  const onSubmit = async (values) => {
    // CALL THE SERVER
    try {
      const response = await userLogin(values);
      // const cookies = response.headers["set-cookie"][0];
      console.log(response.headers);
      // Save Token :
      console.log(response);
      const { tokens } = response.data;
      localStorage.setItem("token", tokens.access);
      // Redirect
      history.push("/panel");
    } catch (ex) {}
  };

  //  validation schema
  const validationSchema = Yup.object({
    email: Yup.string().required(forms.email.enter),
    password: Yup.string().required(forms.password.enter),
  });

  return (
    <div className={classes.signupBg}>
      <p className={classes.signupText}>{forms.loginHeader}</p>
      <p className={classes.hint}>{forms.loginHint}</p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnMount
      >
        {(formik) => (
          <Form>
            <div className={classes.inputGroup}>
              <div className={classes.formControl}>
                <label htmlFor="email">{forms.labels.email}</label>
                <Field
                  id="email"
                  name="email"
                  type="text"
                  placeholder="example@gmail.com"
                  className={classes.input}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={classes.validationError}
                />
              </div>
              <div className={classes.formControl}>
                <label htmlFor="password">{forms.labels.password}</label>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  placeholder="*****"
                  className={classes.input}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className={classes.validationError}
                />
              </div>
              <button
                className={classes.submit}
                disabled={!formik.isValid}
                type="submit"
              >
                {forms.buttonns.login}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
