import app from "./app.js";
import dotenv from "dotenv";
dotenv.config();

app.listen(process.env.PORT);
console.log(`http://${process.env.HOST}:${process.env.PORT}`);
