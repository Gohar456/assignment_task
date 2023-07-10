import { useState } from "react"

import axios from "axios"

import { Button } from "react-bootstrap"
import Alert from "react-bootstrap/Alert"

import { SigninForm } from "../../styles/Auth"

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    user_password: "",
  })
  const [message, setMessage] = useState("")
  const [error, setError] = useState()

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <>
      {message ? (
        <Alert variant="success">{message}</Alert>
      ) : error ? (
        <Alert variant="danger">{}</Alert>
      ) : null}
      <SigninForm onSubmit={handleSubmit}>
        <h1 className="text-center mb-3 h1 fw-bold">Login</h1>
        <div className="row g-3 mb-3">
          <div className="col-">
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="email"
                onChange={handleOnChange}
                placeholder="name@example.com"
              />
              <label for="email">Email</label>
            </div>
            <div class="form-floating">
              <input
                type="password"
                class="form-control"
                id="password"
                onChange={handleOnChange}
                placeholder="Password"
              />
              <label for="password">Password</label>
            </div>
          </div>
        </div>
        <Button type="submit" variant="outline-info">
          LOGIN
        </Button>
      </SigninForm>
    </>
  )
}
export default LoginForm
