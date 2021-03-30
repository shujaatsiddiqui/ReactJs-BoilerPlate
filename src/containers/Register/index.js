import React from "react";

import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  FormFeedback,
  InputGroup,
  Col,
} from "reactstrap";
import { Form, withFormik } from "formik";
import * as Yup from "yup";
import { signUp } from "api/RepoService";

const initialValues = {
  email: "",
  password: "",
  fullname: "",
  mobile: "",
  address: "",
  city: "",
  state: "",
  country: "",
};
class Register extends React.Component {
  render() {
    const { values, handleChange, errors } = this.props;
    const {
      email,
      fullname,
      password,
      mobile,
      address,
      city,
      state,
      country,
    } = values;
    return (
      <>
        <Col lg="6" md="8">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <Form role="form">
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      invalid={!!errors.fullname}
                      placeholder="Name"
                      name="fullname"
                      value={fullname}
                      onChange={handleChange}
                      type="text"
                    />
                    {errors.fullname && (
                      <FormFeedback>{errors.fullname}</FormFeedback>
                    )}
                  </InputGroup>
                </FormGroup>
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
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-mobile-button " />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      invalid={!!errors.mobile}
                      type="text"
                      placeholder="Mobile"
                      name="mobile"
                      value={mobile}
                      onChange={handleChange}
                      autoComplete="new-mobile"
                    />
                    {errors.mobile && (
                      <FormFeedback>{errors.mobile}</FormFeedback>
                    )}
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-pin-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      invalid={!!errors.address}
                      type="text"
                      placeholder="Address"
                      name="address"
                      value={address}
                      onChange={handleChange}
                      autoComplete="new-address"
                    />
                    {errors.address && (
                      <FormFeedback>{errors.address}</FormFeedback>
                    )}
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-pin-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      invalid={!!errors.city}
                      type="text"
                      placeholder="City"
                      name="city"
                      value={city}
                      onChange={handleChange}
                      autoComplete="new-city"
                    />

                    {errors.city && <FormFeedback>{errors.city}</FormFeedback>}
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-pin-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      invalid={!!errors.state}
                      type="text"
                      placeholder="State"
                      name="state"
                      value={state}
                      onChange={handleChange}
                      autoComplete="new-state"
                    />

                    {errors.state && (
                      <FormFeedback>{errors.state}</FormFeedback>
                    )}
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-pin-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      invalid={!!errors.country}
                      type="text"
                      placeholder="Country"
                      name="country"
                      value={country}
                      onChange={handleChange}
                      autoComplete="new-country"
                    />

                    {errors.country && (
                      <FormFeedback>{errors.country}</FormFeedback>
                    )}
                  </InputGroup>
                </FormGroup>
                <div className="text-center">
                  <Button className="mt-4" color="primary" type="submit">
                    Create account
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

const RegisterWithFormik = withFormik({
  validateOnChange: false,
  validateOnBlur: false,
  mapPropsToValues: (props) => initialValues,
  validationSchema: Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be minimum 8 characters.")
      .max(255, "Password cannot be more than 255 characters.")
      .required("Password is required"),
    fullname: Yup.string()
      .max(255, "Name cannot be more than 255 characters.")
      .required("Name is required"),
    address: Yup.string()
      .max(255, "Address cannot be more than 255 characters.")
      .required("Address is required"),
    mobile: Yup.string()
      .max(255, "Mobile cannot be more than 255 characters.")
      .required("Mobile is required"),
    city: Yup.string()
      .max(255, "City cannot be more than 255 characters.")
      .required("City is required"),

    state: Yup.string()
      .max(255, "State cannot be more than 255 characters.")
      .required("State is required"),

    country: Yup.string()
      .max(255, "Country cannot be more than 255 characters.")
      .required("Country is required"),
  }),
  handleSubmit: (values, { setStatus, resetForm, props, setErrors }) => {
    signUp(values).then((res) => {
      resetForm(initialValues);
      props.history.push("/auth/login");
    });
  },
})(Register);

export default RegisterWithFormik;
