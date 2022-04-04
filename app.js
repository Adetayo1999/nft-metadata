const express = require("express");
const cors = require("cors");
const data = require("./data");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("welcome");
});
app.get("/api/v1/meta/:id", (req, res) => {
  const tokenId = req.params.id;
  const metaData = data.find((nftMetadata, index) => index + 1 == tokenId);

  if (!metaData) {
    res.send({
      message: "Invalid token id sent",
    });
    return;
  }

  res.json(metaData);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
