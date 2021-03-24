const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api', (req, res) => {
    res.send('OK');
});

app.listen(process.env.PORT || 3000, function () {
    console.log(
        "Express server listening on port %d in %s mode\n",
        this.address().port,
        app.settings.env
    );
});