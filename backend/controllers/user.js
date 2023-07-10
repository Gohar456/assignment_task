import user from "../models/Users.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { createError } from "../utils/error.js"
import dotenv from "dotenv"

dotenv.config()

export const register = async (req, res, next) => {
  try {
    const { name, email, mobile, password, role, address } = req.body
    if (!name || !email || !mobile || !password || !role || !address) {
      return next({
        status: 404,
        message: "Please fill all the required fields",
      })
    }

    const existingUser = await user.findOne({ email })
    if (existingUser) {
      return next({
        status: 409,
        message: "Email already exists",
      })
    }

    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)

    const userData = new user({
      name,
      email,
      mobile,
      password: hash,
      role,
      address,
    })

    await userData.save()

    res.status(200).json({ message: "User registered successfully" })
  } catch (err) {
    next(err)
  }
}

export const login = async (req, res, next) => {
  try {
    const foundUser = await user.findOne({ email: req.body.email })
    if (!foundUser) {
      return next(createError(404, "User not found"))
    }

    const isPasswordMatched = await bcrypt.compare(
      req.body.password,
      foundUser.password
    )
    if (!isPasswordMatched) {
      return next(createError(404, "Password is not matched!"))
    }

    const token = jwt.sign(
      { id: foundUser._id, role: foundUser.role, email: foundUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    )

    const { password, ...others } = foundUser._doc
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ details: { ...others } })
  } catch (err) {
    next(err)
  }
}
export const viewUser = async (req, res, next) => {
  //   try {
  //     const user = await Users.find()
  //     const { password, ...others } = user
  //     res.status(200).json(user)
  //   } catch (err) {
  //     next(err)
  //   }
}
