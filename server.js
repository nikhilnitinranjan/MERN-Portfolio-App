const express = require ('express')
const cors = require ('cors')
const dotenv = require ('dotenv')

//dotenv config
dotenv.config()

//rest object

const app = express()

//middleware
app.use(cors())
app.use(express.json())


//routes
// app.get('/', (req, res) => {
//     res.send('<h1>hello world</h1>')
// })
app.use('/api/v1/portfolios', require('./routes/portfiloRoute'))

//port
const PORT = process.env.PORT || 8080
//listen

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
}
)

