var express = require('express');
var router = express.Router();

/* GET users listing. */
const {
  addClient, clientList, delClient
} = require("../conroller/client-controller");

router.post("/add", addClient);
router.post("/", clientList)
router.delete("/delClients/:id", delClient )

module.exports = router;
