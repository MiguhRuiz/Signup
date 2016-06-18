import express from 'express'
import bodyParser from 'body-parser'
import mc from 'mailchimp-api/mailchimp'
import config from './config'

const app = express()
const port = process.env.PORT || 3000

app.use(express.static('./public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.set('views', './views')
app.set('view engine', 'pug')

const mail = new mc.Mailchimp(config.mailchimp.api_key)

app.get("/", (req, res) => {
  res.render('index')
})

app.post("/new-email", (req, res) => {
  mail.lists.subscribe({id: config.mailchimp.listid, email: {email: req.body.email}}, function (data) {
    res.sendStatus(200)
  }), function (error) { if(error != []){ res.sendStatus(404) } }
})

app.listen(port, () => {
  console.log(`App listen on ${port} port.`)
})
