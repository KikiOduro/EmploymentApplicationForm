import React, { useState, useRef } from "react";
import {Container,Row,Col,Card,CardBody,Form,FormGroup,Label,Input,Button,} from "reactstrap";
import SignatureCanvas from "react-signature-canvas";
import logo from "./assets/logo.png";

function EmploymentApplicationForm() {
  const signatureReference = useRef({});

  const [formData, setFormData] = useState({
    fullName: "",
    currentAddress: "",
    contactNumber: "",
    emailAddress: "",
    highestEducationalAttainment: "",
    gender: "",
    dateAvailable: "",
    desiredPosition: "",
    desiredSalary: "",
    legallyAuthorized: "",
    hasRelativesInCompany: "",
    relativesExplanation: "",
  });

  //   function handleInputChange(event) {
  //     const fieldName = event.target.name;
  //     const fieldValue = event.target.value;
  //     setFormData(function (previousData) {
  //       return {
  //         ...previousData,
  //         [fieldName]: fieldValue,
  //       };
  //     });
  //   }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //   function clearSignature() {
  //     signatureReference.current.clear();
  //   }

  const clearSignature = () => {
    if (signatureReference.current) {
      signatureReference.current.clear();
    }
  };

  //   function handleSubmit(event) {
  //     event.preventDefault();

  //     if (signatureReference.current.isEmpty()) {
  //       alert("Please provide a signature before submitting.");
  //       return;
  //     }

  //     const signatureImage = signatureReference.current.toDataURL();

  //     const completeApplication = {
  //       ...formData,
  //       signatureImage: signatureImage,
  //     };

  //     console.log("Completed Application:", completeApplication);
  //     alert("Application submitted! Check the console to see the data.");
  //   }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (signatureReference.current.isEmpty()) {
      alert("Please provide a signature before submitting.");
      return;
    }

    const signatureImage = signatureReference.current.toDataURL();

    const completeApplication = {
      ...formData,
      signatureImage: signatureImage,
    };
    console.log("Completed Application:", completeApplication);
    alert(" Application submitted!");
  };

  return (
    <Container className="mt-5 mb-5">
      <Row className="justify-content-center">
        <Col md="8">
          <Card>
            <CardBody>
              {/* Logo centered, with the title underneath */}
              <div className="text-center mb-4">
                <img
                  src={logo}
                  alt="Company Logo"
                  style={{ maxWidth: "250px", marginBottom: "16px" }}
                />
                <h2>Employment Application</h2>
              </div>

              <Form onSubmit={handleSubmit}>
                {/* Personal Information */}
                <h5 className="bg-primary text-white p-2">Personal Information</h5>

                <FormGroup>
                  <Label for="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleInputChange}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="currentAddress">Current Address</Label>
                  <Input
                    id="currentAddress"
                    name="currentAddress"
                    type="text"
                    value={formData.currentAddress}
                    onChange={handleInputChange}
                  />
                </FormGroup>

                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Label for="contactNumber">Contact Number</Label>
                      <Input
                        id="contactNumber"
                        name="contactNumber"
                        type="tel"
                        value={formData.contactNumber}
                        onChange={handleInputChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label for="emailAddress">Email Address</Label>
                      <Input
                        id="emailAddress"
                        name="emailAddress"
                        type="email"
                        value={formData.emailAddress}
                        onChange={handleInputChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Label for="highestEducationalAttainment">
                        Highest Educational Attainment
                      </Label>
                      <Input
                        id="highestEducationalAttainment"
                        name="highestEducationalAttainment"
                        type="text"
                        value={formData.highestEducationalAttainment}
                        onChange={handleInputChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup tag="fieldset">
                      <Label>Gender</Label>
                      <FormGroup check inline>
                        <Input
                          name="gender"
                          type="radio"
                          value="Male"
                          checked={formData.gender === "Male"}
                          onChange={handleInputChange}
                        />{" "}
                        <Label check>Male</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input
                          name="gender"
                          type="radio"
                          value="Female"
                          checked={formData.gender === "Female"}
                          onChange={handleInputChange}
                        />{" "}
                        <Label check> Female</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input
                          name="gender"
                          type="radio"
                          value="Other"
                          checked={formData.gender === "Other"}
                          onChange={handleInputChange}
                        />{" "}
                        <Label check>Other</Label>
                      </FormGroup>
                    </FormGroup>
                  </Col>
                </Row>

                {/* Employment Eligibility */}
                <h5 className="bg-dark text-white p-2 mt-4">
                  Employment Eligibility
                </h5>

                <Row>
                  <Col md="6">
                    <FormGroup>
                      <Label for="dateAvailable">Date Available</Label>
                      <Input
                        id="dateAvailable"
                        name="dateAvailable"
                        type="date"
                        value={formData.dateAvailable}
                        onChange={handleInputChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6">
                    <FormGroup>
                      <Label for="desiredPosition">Desired Position</Label>
                      <Input
                        id="desiredPosition"
                        name="desiredPosition"
                        type="text"
                        value={formData.desiredPosition}
                        onChange={handleInputChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <FormGroup>
                  <Label for="desiredSalary">Desired Salary</Label>
                  <Input
                    id="desiredSalary"
                    name="desiredSalary"
                    type="text"
                    value={formData.desiredSalary}
                    onChange={handleInputChange}
                  />
                </FormGroup>

                <FormGroup tag="fieldset">
                  <Label>
                    Are you legally authorized to work in the country?
                  </Label>
                  <FormGroup check inline>
                    <Input
                      name="legallyAuthorized"
                      type="radio"
                      value="Yes"
                      checked={formData.legallyAuthorized === "Yes"}
                      onChange={handleInputChange}
                    />{" "}
                    <Label check>Yes</Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Input
                      name="legallyAuthorized"
                      type="radio"
                      value="No"
                      checked={formData.legallyAuthorized === "No"}
                      onChange={handleInputChange}
                    />{" "}
                    <Label check>No</Label>
                  </FormGroup>
                </FormGroup>

                <FormGroup tag="fieldset">
                  <Label>Do you have relatives working for our company?</Label>
                  <FormGroup check inline>
                    <Input
                      name="hasRelativesInCompany"
                      type="radio"
                      value="Yes"
                      checked={formData.hasRelativesInCompany === "Yes"}
                      onChange={handleInputChange}
                    />{" "}
                    <Label check>Yes</Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Input
                      name="hasRelativesInCompany"
                      type="radio"
                      value="No"
                      checked={formData.hasRelativesInCompany === "No"}
                      onChange={handleInputChange}
                    />{" "}
                    <Label check>No</Label>
                  </FormGroup>
                </FormGroup>

                <FormGroup>
                  <Label for="relativesExplanation">
                    If yes, please explain further
                  </Label>
                  <Input
                    id="relativesExplanation"
                    name="relativesExplanation"
                    type="text"
                    value={formData.relativesExplanation}
                    onChange={handleInputChange}
                  />
                </FormGroup>

                {/* Agreement and Signature */}
                <hr className="mt-4" />
                <Row className="align-items-center">
                  <Col md="7">
                    <p className="mb-0">
                      By submitting this application, you agree to adhere to
                      company policies and provide accurate information
                      throughout the employment process.
                    </p>
                  </Col>
                  <Col md="5">
                    <Label>Applicant's Signature</Label>
                    <div
                      style={{
                        border: "1px solid #ced4da",
                        borderRadius: "4px",
                      }}
                    >
                      <SignatureCanvas
                        ref={signatureReference}
                        penColor="black"
                        canvasProps={{
                          width: 300,
                          height: 120,
                          className: "signature-canvas",
                        }}
                      />
                    </div>
                    <Button
                      color="secondary"
                      size="sm"
                      className="mt-2"
                      onClick={clearSignature}
                      type="button"
                    >
                      Clear Signature
                    </Button>
                  </Col>
                </Row>

                <div className="text-center mt-4">
                  <Button color="dark" type="submit">
                    Submit Application
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default EmploymentApplicationForm;
