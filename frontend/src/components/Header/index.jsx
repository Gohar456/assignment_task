/** @jsxImportSource @emotion/react */
import { Link, useNavigate } from "react-router-dom"

import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

import { css } from "@emotion/react"

const Header = () => {
  const navigate = useNavigate()

  return (
    <Navbar
      css={css`
        z-index: 10;
      `}
      expand="lg"
      className="bg-body-light shadow-sm mb-2 p-3 text-white bg-info"
    >
      <Container fluid>
        <Link to="/" className="text-decoration-none">
          <Navbar.Brand
            href="#home"
            className="d-flex align-items-center justify-content-center"
          >
            <span className="ml-2 fw-bold text-white">Test Application</span>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Button
              className=" h-5 ms-2 px-4 py-1"
              onClick={() => navigate("/login")}
              variant="outline-light"
              css={css`
                &:hover {
                  color: black !important ;
                }
              `}
            >
              LOGIN
            </Button>
            <Button
              onClick={() => navigate("/signup")}
              className="h-5 ms-2 px-4 py-1"
              variant="light"
              css={css`
                &:hover {
                  color: black !important ;
                  background-color: white !important;
                }
              `}
            >
              SIGNUP
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
