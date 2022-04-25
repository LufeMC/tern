import mongoose from 'mongoose'

const connect = () => {
    mongoose.connect('mongodb+srv://root:root@tern.sghks.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function () {
        console.log("Connected successfully");
    });
}

export const database = {
    connect
}