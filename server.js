const express = require('express')
const server = express();
 
server.all('/', (req, res) => {
    res.send('Joya padre');
});
 
function keepAlive() {
   server.listen(3000, () => { console.log("Mañana e sabado" + Date.now()) });
}

module.exports = keepAlive;