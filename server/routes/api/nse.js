const axios = require('axios');
const url = 'https://nseindia.com/live_market/dynaContent/live_watch/get_quote/ajaxGetQuoteJSON.jsp?series=EQ&symbol=';
const list_url = 'https://www1.nseindia.com/corporates/listDir/getListDirectEQ.jsp?Symbol=INFY&Industry=&Period=More%20than%205%20Years&symbol=INFY&listingPeriod=More%20than%205%20Years&segment=EQUITIES';


function getQuoteInfo(symbol) {
    return axios.get(url + encodeURIComponent(symbol), {
      headers: {
        Referer: url + encodeURIComponent(symbol),
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
  }
function getListComp() {
    return axios.get(list_url, {
      headers: {
        Referer: 'https://www1.nseindia.com/corporates/listDir/listDirectory.html',
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).catch(error => {
        console.log(error);
    });
  }


var nse = {
      getQuoteInfo: getQuoteInfo,
      getListComp: getListComp
  }

  module.exports = nse;