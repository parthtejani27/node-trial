const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admin:admin@cluster0.8ogki.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser : true,
    useCreateIndex : true,
    useUnifiedTopology: true,
})
    .then(()=>{ console.log('connecting to Databse....')})
    .catch(()=>{ console.log("can't connect to database...")})