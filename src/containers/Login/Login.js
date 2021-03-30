import React from "react";
import { Form, withFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  Card,
  CardBody,
  FormFeedback,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,
} from "reactstrap";
import { signIn } from "api/RepoService";
import { setUserInStorage } from "utils/authUtils";

class Login extends React.Component {
  render() {
    const { values, handleChange, errors, error } = this.props;
    const { email, password } = values;
    return (
      <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <Form role="form">
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      invalid={!!errors.email}
                      placeholder="Email"
                      type="text"
                      name="email"
                      value={email}
                      onChange={handleChange}
                      autoComplete="new-email"
                    />
                    {errors.email && (
                      <FormFeedback>{errors.email}</FormFeedback>
                    )}
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password"
                      invalid={!!errors.password}
                      type="password"
                      name="password"
                      value={password}
                      onChange={handleChange}
                      autoComplete="new-password"
                    />
                    {errors.password && (
                      <FormFeedback>{errors.password}</FormFeedback>
                    )}
                  </InputGroup>
                </FormGroup>
                <div className="text-center">
                  <Button className="my-4" color="primary" type="submit">
                    Sign in
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </>
    );
  }
}

const LoginWithFormik = withFormik({
  validateOnBlur: false,
  validateOnChange: false,
  mapPropsToValues: (props) => ({
    email: "",
    password: "",
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .max(255)
      .email("Invalid email")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  }),
  handleSubmit: (values, { props, setStatus, setFieldValue }) => {
    const { context } = props;
    signIn(values).then((res) => {
      context.setAuthenticationStatus(true, res.data.token);
    });
  },
})(Login);

export default LoginWithFormik;
