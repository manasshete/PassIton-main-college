import mongoose from 'mongoose';

let cached = global.mongoose;
if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB(){

    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
        cached.promise = mongoose.connect(`${process.env.MONGODB_URI}/e coomerce`, opts).then((mongoose) => {
            return mongoose;
        });
    }
    cached.conn = await cached.promise;
}

export default connectDB;