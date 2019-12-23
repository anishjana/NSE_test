const express= require('express');
const router = express.Router();
const nse = require('./nse.js')


router.get("/nse/get_quote_info", (req, res, next) => {
    nse.getQuoteInfo(req.query.companyName)
      .then(function (response) {
        res.json(response.data);
      });
  });

router.get("/nse/get_list", (req, res, next) => {
    nse.getListComp()
      .then(function (server_response) {
        const json_response = server_response.data.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g, '"$2": '); 
        const myObject = JSON.parse(json_response);
        res.send(myObject);
        
      });
  });


module.exports = router;