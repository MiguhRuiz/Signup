import express from 'express'

const app = express()
const port = process.env.PORT || 3000

app.use(express.static('./public'))
app.set('views', './views')
app.set('view engine', 'pug')

app.get("/", (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`App listen on ${port} port.`)
})
