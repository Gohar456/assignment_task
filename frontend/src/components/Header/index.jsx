/** @jsxImportSource @emotion/react */
import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"

import Button from "react-bootstrap/Button"
import { BiMessageSquareDetail } from "react-icons/bi"
import { BsPersonCircle } from "react-icons/bs"

import { AuthContext } from "../../context/AuthReducer"

import { css } from "@emotion/react"

const Header = () => {
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()

  return (
    <>
      <header className="w-100 ">
        <nav className="navbar navbar-expand-lg bg-info p-3 ">
          <div className="container-fluid">
            <Link className="navbar-brand text-white fw-bold" to="/">
              Test Applictaion
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon  "></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                {!user ? null : (
                  <li className="nav-item me-3">
                    <a
                      className="nav-link active position-relative"
                      aria-current="page"
                      href="#"
                    >
                      <BiMessageSquareDetail size={35} color="#ffff" />
                      <span className="position-absolute top-3 start-90 translate-middle badge rounded-pill bg-danger">
                        99+
                        <span className="visually-hidden">unread messages</span>
                      </span>
                    </a>
                  </li>
                )}
              </ul>
              {!user ? (
                <>
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
                </>
              ) : (
                <Button
                  className="h-5 ms-2 px-4 py-1"
                  variant="light"
                  css={css`
                    &:hover {
                      color: black !important ;
                      background-color: white !important;
                    }
                  `}
                >
                  Logout
                </Button>
              )}
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
