const mongoose = require("mongoose");
const connect = () => {
  mongoose
    .connect(
      "mongodb+srv://maatkieya57:<eya123eya123>@cluster0.lf9iy9v.mongodb.net/"
    )
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));
};
module.exports = connect;
