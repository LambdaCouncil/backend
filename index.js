require('dotenv').config()

const firebase = require('firebase-admin')
const councilKey = require('./councilKey.json')

const server = require('./server')
const port = process.env.PORT || 5000
const display = `Server running on port ${port}`

firebase.initializeApp({
    credential: firebase.credential.cert(councilKey),
    databaseURL: 'https://council-c200f.firebaseio.com'
})

const db = firebase.database()

server.listen(port, _ => console.log(`
${'='.repeat(display.length + 2)}
 ${display}
${'='.repeat(display.length + 2)}
`))
