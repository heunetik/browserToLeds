let maxMatrix = require("max7219-matrix");
 
let m = new maxMatrix.MAX7219Matrix("/dev/spidev0.0", 4);

module.exports = (req, res) => {
    if (req.body.hasOwnProperty('text')) {
        m.processText(req.body.text);
    }
    res.end();
};