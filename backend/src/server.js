const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Laundry Backend API Running 🚀"
  });
});

// routes
app.use("/api/customers", customerRoutes);
app.use("/api/orders", orderRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});