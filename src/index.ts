import express from "express"
import dotenv from "dotenv"

dotenv.config()
const port = process.env.PORT

const app = express()

app.get("/user/:userId", (req, res) => {
  const dateString = req.query.name;
  const userId = req.params.userId
  
  if (!dateString) {
    res.status(400).json("Invalid date query")
  }

  // TODO 

})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})