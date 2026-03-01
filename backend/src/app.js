const express = require("express")
const cookieParser = require("cookie-parser")
const authRoutes = require("./Routers/auth.routes")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}))

app.use("/api/auth",authRoutes)


module.exports = app
