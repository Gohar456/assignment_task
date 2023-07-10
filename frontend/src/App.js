import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Signup from "./pages/Signup"

import Layout from "./components/Layout"
import Login from "./pages/Login"

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
