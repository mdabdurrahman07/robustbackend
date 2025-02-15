import express from "express"
import {PORT} from "./config/env.js";
const app = express()
const port = 5000 | PORT

app.get('/', (req, res) => {
  res.send("Welcome to Robust Backend Server")
})

app.listen(port, () => {
  console.log(`Robust Backend Server is listening on port http://localhost:${port}`)
})
export default app;