const express = require("express")
const app = express()
const usersRouter = require("./routers/users")

const port = 4000

app.use(express.json())
app.use('/users', usersRouter)

app.listen(port, () => console.log(`I am listening on port ${port}`))