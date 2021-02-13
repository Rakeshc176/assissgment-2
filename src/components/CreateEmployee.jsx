import React, { useState, useEffect } from "react";

import axios from "axios";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";

const CreateEmployee = (props) => {
  const [employee, setEmployee] = useState({
    employeeId: "",
    firstName: "",
    lastName: "",
    extension: "",
    emailId: "",
    officeCode: "",
    reportsTo: "",
    jobTitle: "",
  });

  const [showLoading, setShowLoading] = useState(false);
  const {
    employeeId,
    firstName,
    lastName,
    extension,
    emailId,
    officeCode,
    reportsTo,
    jobTitle,
  } = employee;
  const apiUrl = "http://localhost:8080/api/v1/employees";

  const onChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(employee));
    axios
      .post(apiUrl, employee)
      .then((res) => props.history.push("/EmployeeList"));
  };
  return (
    <div className="app flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="12" lg="10" xl="8">
            <Card className="mx-4">
              <CardBody className="p-4">
                <Form onSubmit={onSubmit}>
                  <h1>Register</h1>
                  <InputGroup className="mb-3">
                    <Input
                      type="text"
                      name="employeeId"
                      id="employeeId"
                      placeholder="employeeId"
                      value={employeeId}
                      onChange={onChange}
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <Input
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="firstname"
                      value={firstName}
                      onChange={onChange}
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <Input
                      type="text"
                      placeholder="lastName"
                      name="lastName"
                      id="lastName"
                      value={lastName}
                      onChange={onChange}
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <Input
                      type="text"
                      placeholder="extension"
                      name="extension"
                      id="extension"
                      value={extension}
                      onChange={onChange}
                    />
                  </InputGroup>

                  <InputGroup className="mb-4">
                    <Input
                      type="text"
                      placeholder="emailId"
                      name="emailId"
                      id="emailId"
                      value={emailId}
                      onChange={onChange}
                    />
                  </InputGroup>

                  <InputGroup className="mb-4">
                    <Input
                      type="text"
                      placeholder="officecode"
                      name="officeCode"
                      id="officeCode"
                      value={officeCode}
                      onChange={onChange}
                    />
                  </InputGroup>

                  <InputGroup className="mb-4">
                    <Input
                      type="text"
                      placeholder="reportsto"
                      name="reportsTo"
                      id="reportsTo"
                      value={reportsTo}
                      onChange={onChange}
                    />
                  </InputGroup>
                  <InputGroup className="mb-4">
                    <Input
                      type="text"
                      placeholder="jobTitle"
                      name="jobTitle"
                      id="jobTitle"
                      value={jobTitle}
                      onChange={onChange}
                    />
                  </InputGroup>

                  <CardFooter className="p-4">
                    <Row>
                      <Col xs="12" sm="6">
                        <Button
                          type="submit"
                          className="btn btn-info mb-1"
                          block
                        >
                          <span>Save</span>
                        </Button>
                      </Col>

                      <Col xs="12" sm="6">
                        <Button className="btn btn-info mb-1" block>
                          <span>Cancel</span>
                        </Button>
                      </Col>
                    </Row>
                  </CardFooter>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

CreateEmployee.propTypes = {};

export default CreateEmployee;
