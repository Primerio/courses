import mongoose from "mongoose"

export default function dbConnect() {
    mongoose.connect(process.env.DB, err => {
        if (err) console.log(err)
        console.log('DB connected ...')
    })
}