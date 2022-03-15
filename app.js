const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.port || 4000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("welcome");
});

app.get("/api/v1/meta", (_req, res) => {
  res.status(200).json({
    image:
      "https://lh3.googleusercontent.com/ZX4oz5zvQC1LNgUrk2-_gITyH36_YliAVdyoPhjgIuMOCXM_F5jqrPuW2Rdcb3X13ydVvD5tihcCOSXHUtEmFlHjESl8FMJeptd2=w304",
    name: "satoshi nakamoto",
    description: "created by omotomiwa Adetayo",
  });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
