import exp from "express";
import { employeeApp } from "./Api's/employeeApi.js";
import { connect } from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = exp();

// CORS
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://your-frontend.vercel.app",
    ],
    credentials: true,
  })
);

// middleware
app.use(exp.json());

// routes
app.use("/employee-api", employeeApp);

// PORT
const port = process.env.PORT || 4000;

// DB Connection
async function connectDb() {
  try {
    await connect(process.env.DB_URL);

    console.log("database connection successful");

    app.listen(port, () =>
      console.log(`server is listening on ${port}`)
    );
  } catch (err) {
    console.log("database connection failed");
    console.log(err);
  }
}

connectDb();