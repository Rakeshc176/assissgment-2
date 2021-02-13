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

const EditEmployee = (props) => {
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
  const Url = "http://localhost:8080/api/v1/employees/" + props.match.params.id;

  useEffect(() => {
    const GetData = async () => {
      const result = await axios.get(Url);

      setEmployee(result.data);
    };

    GetData();
  }, []);

  const UpdateEmployee = async (e) => {
    e.preventDefault();

    const data = {
      employeeId: employee.employeeId,
      firstName: employee.firstName,
      lastName: employee.lastName,
      extension: employee.extension,
      emailId: employee.emailId,
      officeCode: employee.officeCode,
      reportsTo: employee.reportsTo,
      jobTitle: employee.jobTitle,
    };
    console.log(JSON.stringify(data));
    console.log("check 1");
    await axios
      .put("http://localhost:8080/api/v1/employees/" + employee.employeeId, data)

      .then((result) => {
        props.history.push("/EmployeeList");
      });
  };

  const onChange = (e) => {
    e.persist();

    setEmployee({ ...employee, [e.target.name]: e.target.value });
    console.log(JSON.stringify(employee));
  };

  return (
    <div className="app flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="12" lg="10" xl="8">
            <Card className="mx-4">
              <CardBody className="p-4">
                <Form onSubmit={UpdateEmployee}>
                  <h1>Update Employee</h1>

                  <InputGroup className="mb-3">
                    <Input
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="firstname"
                      value={employee.firstName}
                      onChange={onChange}
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <Input
                      type="text"
                      placeholder="lastName"
                      name="lastName"
                      id="lastName"
                      value={employee.lastName}
                      onChange={onChange}
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <Input
                      type="text"
                      placeholder="extension"
                      name="extension"
                      id="extension"
                      value={employee.extension}
                      onChange={onChange}
                    />
                  </InputGroup>

                  <InputGroup className="mb-4">
                    <Input
                      type="text"
                      placeholder="emailId"
                      name="emailId"
                      id="emailId"
                      value={employee.emailId}
                      onChange={onChange}
                    />
                  </InputGroup>

                  <InputGroup className="mb-4">
                    <Input
                      type="text"
                      placeholder="officecode"
                      name="officeCode"
                      id="officeCode"
                      value={employee.officeCode}
                      onChange={onChange}
                    />
                  </InputGroup>

                  <InputGroup className="mb-4">
                    <Input
                      type="text"
                      placeholder="reportsto"
                      name="reportsTo"
                      id="reportsTo"
                      value={employee.reportsTo}
                      onChange={onChange}
                    />
                  </InputGroup>
                  <InputGroup className="mb-4">
                    <Input
                      type="text"
                      placeholder="jobTitle"
                      name="jobTitle"
                      id="jobTitle"
                      value={employee.jobTitle}
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

EditEmployee.propTypes = {};

export default EditEmployee;
