const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const authRoutes = require("./routes/auth.js")
const listingRoutes = require("./routes/listing.js")
const bookingRoutes = require("./routes/booking.js")
const userRoutes = require("./routes/user.js")
const path = require("path");

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

/* ROUTES */
app.use("/auth", authRoutes)
app.use("/properties", listingRoutes)
app.use("/bookings", bookingRoutes)
app.use("/users", userRoutes)

app.use(express.static(path.join(__dirname, "./build")));
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, "./build/index.html"));
})


/* MONGOOSE SETUP */
const PORT = 3001;
mongoose
  .connect("mongodb+srv://mazahirali545:mazahir@cluster0.skrjy5x.mongodb.net/test", {
    dbName: "Dream_Nest",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(4000, () => console.log(`Server Port: ${4000}`));
  })
  .catch((err) => console.log(`${err} did not connect`));
