const fetch = require('node-fetch');
const { v4: uuidv4 } = require('uuid');

let uuid = uuidv4();
const auth = ""; //Bearer authentication 
let mensagem = "Testing API";
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer " + auth);
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Cookie", "");


var raw = JSON.stringify({
  "koos": {
    "contentClientId": uuid,
    "charchaId": null,
    "commentPreference": 0,
    "isExclusive": false,
    "mediaType": "GENERIC",
    "language": "en",
    "location": "",
    "mediaText": "",
    "parentKuId": "",
    "media": {
      "audioOpus": "",
      "audioMp3": "",
      "audioHls": "",
      "videoMp4": "",
      "videoHls": "",
      "imageUrl": [],
      "audiogramMp4": "",
      "meta": {
        "duration": 0,
        "height": 0,
        "width": 0,
        "thumbnail": "",
        "file_size": 0,
        "frame_rate": 0,
        "hls_version": 0,
        "segment_duration": 0
      },
      "duration": 0,
      "gifUrl": "",
      "imageUrlSmall": []
    },
    "pollDuration": 0,
    "pollOptions": null,
    "reKooFromId": null,
    "title": mensagem
  }
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://www.kooapp.com/api/create/post", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));