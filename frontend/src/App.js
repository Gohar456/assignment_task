import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Layout from "./components/Layout"
import Login from "./pages/Login"
import Profile from "./pages/Profile"

import ProtectedRoute from "./components/ProtectedRoute"

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </Layout>
    </>
  )
}

export default App
