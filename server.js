const express = require('express')
const app = express()
const port = 3000
app.use(express.static('./'))
app.get('/', (req, res) => res.sendFile('/home/idea/Development/sandbox/shakaEMETest/index.html'));

app.listen(port, () => console.log(`Example app listening on port ${port}! http:localhost:${port}`))