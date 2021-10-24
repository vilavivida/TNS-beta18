// to use JSX, import:
import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
// import "./Map.css";

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
    <>
      <h1>Map Container</h1>
    </>
  )
}

{/* export default simpleMap; */}

function MapNavBar() {
  return (
    <Container>
    <h1>MapNavBar Here</h1>
    <Row>
    <Col><SearchBar /></Col>
    <Col><Filter /></Col>
    </Row>
    </Container>
    )
}

function SideList () {
  return <h1>SideList Here</h1>
}

function SearchBar() {
  return <h1>SearchBar</h1>
}

function Filter() {
  return (<>
  <h1>Filter</h1>
  <FilterComponent />
  <FilterComponent />
  <FilterComponent />
  <FilterComponent />
  </>
  )
}

function FilterComponent () {
  return <></>
}