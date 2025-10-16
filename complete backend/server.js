// const express = require("express");
// const mongoose = require("mongoose");
// const reviewroute=require("./routes/reviewroute");
// const logoroute=require("./routes/logoroute");
// const imageRoutes = require("./routes/imgroute");
// const jobroute=require("./routes/jobroute");
// const adroute=require("./routes/adminroute");
// const dbconnection=require("./config/dbconnection");
// const app = express();
// const PORT = 5000;
// const dotenv=require("dotenv").config()
// const cors=require("cors")

// app.use(cors({origin: 'http://localhost:5173' , credentials: true
// }))

// // Middleware to parse JSON
// app.use(express.json());


// dbconnection()
// app.set("views engine","ejs")

// // Routes
// app.use("/user",adroute);
// app.use("/img", imageRoutes);
// app.use("/job",jobroute);
// app.use("/logo",logoroute);
// app.use("/review",reviewroute);


// app.listen(5000);
const express = require("express");
const mongoose = require("mongoose");
const reviewroute=require("./routes/reviewroute");
const logoroute=require("./routes/logoroute");
const imageRoutes = require("./routes/imgroute");
const jobroute=require("./routes/jobroute");
const adroute=require("./routes/adminroute");
const dbconnection=require("./config/dbconnection");
const app = express();
const PORT = process.env.PORT || 5000;
const dotenv=require("dotenv").config()
const cors=require("cors")

// 🚨 CRITICAL FIX: Allowing both frontend ports (5173 for admin, 5174 for client)
const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174'];

app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl) or if origin is in the allowed list
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
}));

// Middleware to parse JSON
app.use(express.json());


dbconnection()
app.set("views engine","ejs")

// Routes
app.use("/user",adroute);
app.use("/img", imageRoutes);
app.use("/job",jobroute);
app.use("/logo",logoroute);
app.use("/review",reviewroute);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
