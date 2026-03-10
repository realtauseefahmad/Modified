const express = require("express")
const cookieParser = require("cookie-parser")
const authRoutes = require("./Routers/auth.routes")
const songRoutes = require("./Routers/song.routes")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: [
        "http://localhost:5173",
        "https://ai-mood-player-delta.vercel.app/"
    ]
}))

app.use("/api/auth", authRoutes)
app.use("/api/songs", songRoutes)


module.exports = app
