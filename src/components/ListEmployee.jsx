import React from "react";

import axios from "axios";

import { useState, useEffect } from "react";

import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Table,
} from "reactstrap";

const ListEmployee = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const GetData = async () => {
      const result = await axios("http://localhost:8080/api/v1/employees");
      console.log(result.data);
      setData(result.data);
    };

    GetData();
  }, []);
  const deleteeployee = (id) => {
    axios
      .delete("http://localhost:8080/api/v1/employees/" + id)

      .then((result) => {
        props.history.push("/");
      });
  };

  const editemployee = (id) => {
    props.history.push({
      pathname: "/edit/" + id,
    });
  };
  return (
    <div className="animated fadeIn">
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify"></i> Employee List
            </CardHeader>

            <CardBody>
              <Table hover bordered striped responsive size="sm">
                <thead>
                  <tr>
                    <th>Employee Id</th>

                    <th>FirstName</th>

                    <th>LastName</th>

                    <th>Extension</th>

                    <th>Email</th>

                    <th>Office Code</th>

                    <th>Reports To</th>

                    <th>Job Title</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {data.map((item, idx) => {
                    return (
                      <tr>
                        <td>{item.employeeId}</td>

                        <td>{item.firstName}</td>

                        <td>{item.lastName}</td>

                        <td>{item.extension}</td>

                        <td>{item.emailId}</td>

                        <td>{item.officeCode}</td>

                        <td>{item.reportsTo}</td>

                        <td>{item.jobTitle}</td>

                        <td>
                          <div class="btn-group">
                            <button
                              className="btn btn-warning"
                              onClick={() => {
                                editemployee(item.employeeId);
                              }}
                            >
                              Edit
                            </button>

                            <button
                              className="btn btn-warning"
                              onClick={() => {
                                deleteeployee(item.employeeId);
                              }}
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

ListEmployee.propTypes = {};

export default ListEmployee;
