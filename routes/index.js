const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('/ route hit!');
});

router.post('/post', (req, res) => {
    res.send(`body received: ${JSON.stringify(req.body)}`);
});

module.exports = router;