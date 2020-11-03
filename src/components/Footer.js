import React, { PureComponent } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

export const Footer = () => {
  return (
    <>
      <div className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              Address :<br /> Pimpri{" "}
            </div>
            <div className="col-md-3 col-sm-6">
              Useful Links :
              <ul className="list-unstyled">
                <li> Link1 </li>
                <li> Link2 </li>
                <li> Link3 </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              Contact Us :<br />
              <Form>
                <Form.Group
                  as={Form.Row}
                  controlId="exampleForm.ControlTextarea3"
                >
                  <Form.Label column sm={2}>
                    Name
                  </Form.Label>
                  <Form.Control as="textarea" rows={1} />
                </Form.Group>
                <Form.Group as={Form.Row} controlId="formHorizontalEmail">
                  <Form.Label column sm={2}>
                    Email
                  </Form.Label>
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group
                  as={Form.Row}
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label column sm={2}>
                    Subject:
                  </Form.Label>
                  <Form.Control as="textarea" rows={1} />
                </Form.Group>
                <Form.Group
                  as={Form.Row}
                  controlId="exampleForm.ControlTextarea2"
                >
                  <Form.Label column sm={2}>
                    Message:
                  </Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Group as={Form.Row}>
                  <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit">Send Message</Button>
                  </Col>
                </Form.Group>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="text-xs-center">&copy;{new Date().getFullYear()} HTPL</p>
      </div>
    </>
  );
};
