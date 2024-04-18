import express from "express";
import cors from "cors"; 
import connectToMongo from "./config/db.js"; 
import route from "./routes/user.js";
const app = express();
const PORT = process.env.PORT || 8000;
connectToMongo();
app.get("/", (req,res) => {
    res.send("api is running");
});

//apply middleware
app.use(express.json());

//cors 
app.use(cors())

//routes
app.use("/api/v1",route)

app.get("/",(req,res) => {
    res.send("api is running")
})


app.listen(PORT,()=> {
    console.log(`Api is running on http://localhost:${PORT}`);
})
  