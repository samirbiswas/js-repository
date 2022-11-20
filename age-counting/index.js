const https = require('https');

const ageArray = () => {
  https.get('https://coderbyte.com/api/challenges/json/age-counting', (response) => {
    let data;
    // parse json data
    response.on('data', (d) => {
      data += d;
      const dataSplit = data.split(',');
      const result = dataSplit.map((x, i) => { if (x.trim() == 'age=30') { return [i - 1]; } })
        .filter(x => x != undefined).map(x => { return dataSplit[x].split('=')[1]; });

      console.log(result);

    });
    response.on("err", (e) => {
      console.log("err", e);
    });
  });
}

ageArray()
