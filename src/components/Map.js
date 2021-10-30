// to use JSX, import:
import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { DropdownButton } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

import "./test.css";

export default function simpleMap() {
  return (
    <Container>
      <Row>
        <Col><MapNavBar /></Col>
      </Row>
      <Row>
        <Col><MapContainer /></Col>
        <Col><SideList /></Col>
      </Row>
    </Container>
  );
}

function MapContainer() {
  return (
    <div className="mapcontainer">
      <h1>Map Container</h1>
    </div>
  )
}

let dropdownli = ['School Quality', 'Percent Married', 'Crime Rate', 'More'];

function MapNavBar() {
  return (
    <Container className="mapnavbar">
    <Row>
    <Col xs={2}><SearchBar /></Col>
    <Col><Filter type={dropdownli[0]}/></Col>
    <Col><Filter type={dropdownli[1]}/></Col>
    <Col><Filter type={dropdownli[2]}/></Col>
    <Col><Filter type={dropdownli[3]}/></Col>
    <Col><Save /></Col>
    </Row>
    </Container>
    )
}

function SideList () {
  return (<div bsPrefix="sidelist"><h1>SideList Here</h1>
  <SideListCard />
  <SideListCard />
  <SideListCard />
  <SideListCard />
  </div>)
}

function SideListCard () {
  return (<>
    <Card bsPrefix="listcard">
      <Card.Img src="CardPlaceHolder.png" bsPrefix="listcardimage"/>
      <Card.Title>Card Title</Card.Title>
      <Card.Body>This is some text within a card body.</Card.Body>
    </Card>

  </>)
}

function SearchBar() {
  return (
    <InputGroup>
    <FormControl 
      className="mapsearch"
      placeholder="Where to?"
    />
    </InputGroup>)
}


function Filter({type}) {
  return (<>
        <DropdownButton
          title={type}
          bsPrefix="mapfilter"
        >
          <Dropdown.Item eventKey="1">Low</Dropdown.Item>
          <Dropdown.Item eventKey="2">Medium</Dropdown.Item>
          <Dropdown.Item eventKey="3">High</Dropdown.Item>
        </DropdownButton>
  </>)
}

function Save() {
  return (<>
      <Button variant="outline-danger">Save Search</Button>{' '}
  </>)
  
}