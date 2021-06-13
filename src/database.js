const MongoClient = require('mongoose');

MongoClient.connect('mongodb+srv://Taiki:TaikiPassword@cluster0.ge4ht.mongodb.net/nuwemwc?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

