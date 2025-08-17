import express, { urlencoded } from "express"
import cors from "cors"
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get("/", (req, res) => {
    res.send("hello, got the message.")
})

app.get("/home", (req, res) => {
    res.send("This is home route")
})

app.post("/api/user", (req, res) => {
    console.log("what am i getting into req: ", req)
    const { name, age } = req.body
    console.log("name:", name, "\nage: ", age)
    res.status(201).json({
        message: "Success",
        naam: "Ashish shah"
    })
    
})

const PORT = 3000

app.listen(PORT, () => console.log("server is running at port: 3000."))