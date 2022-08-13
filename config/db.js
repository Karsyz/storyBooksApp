const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            // these options are no longer supported since mongoose 6. Mongoose 6+ always behaves as if these are set as shown natively. Removed from code so that the database will accept connection.
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useFindAndModify: false,
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`)

    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}

module.exports = connectDB