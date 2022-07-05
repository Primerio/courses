import 'dotenv/config'
import express from 'express'
import path from 'path'
import dbConnect from "./db.js"
import pagesRouter from "./router/pagesRouter.js"
import adminRouter from "./router/adminRouter.js"

const app = new express()

app.set('views', path.resolve('client'))
app.set('view engine', 'ejs')

app.use(express.static('client/'))
app.use(pagesRouter)
app.use('/admin', adminRouter)


app.listen(process.env.PORT, err => {
    if(err) console.log(err)
    console.log(`Server start on ${process.env.PORT} port`)
    dbConnect()
})