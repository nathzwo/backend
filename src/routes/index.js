const express = require ('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.send('Puerto de datos❤️');
});

module.exports = router;

