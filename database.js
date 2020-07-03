const mongoose = require('mongoose');

async function connect(){
         await mongoose.connect('mongodb://localhost/flutter-app-example',{
         useNewUrlParser: true,
         useUnifiedTopology: true
        });
console.log("conectou no banco");
};

module.exports = {connect};