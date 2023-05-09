import mongoose from 'mongoose';

const dbConnect = () => {
    if (mongoose.connection.readyState >= 1) {
        return
    }

    mongoose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(con => console.log('MongoDB Database connected with HOST: ' + con.connection.host))
        .catch(err => console.log('Error Message: ' + err.message))
}

export default dbConnect;