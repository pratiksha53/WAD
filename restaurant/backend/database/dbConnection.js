import mongoose from "mongoose";

const uri = "mongodb+srv://mydb:21154@cluster1.zwltuky.mongodb.net/?retryWrites=true" ;


export const dbConnection = () => {

  mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error('Error connecting to MongoDB:', error));

};