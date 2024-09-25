const express = require("express");
const path = require("path");

const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "11.html"));
});

app.listen(3000, function () {
    console.log("Server is running on port 3000");
});
