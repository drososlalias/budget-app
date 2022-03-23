const express = require("express");
const app = express();
const { logger } = require("./logger/logger");
const cors = require("cors");
const PORT = process.env.PORT || 3003;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", require("./routes/api.js"));

app.listen(PORT, () => logger.info(`Server running on port: ${PORT}`));
