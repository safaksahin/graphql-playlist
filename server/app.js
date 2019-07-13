const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();


//allow cross-origin request
app.use(cors());
//connect to mlab database
mongoose.connect('mongodb+srv://safak:123@cluster0-amac2.mongodb.net/test?retryWrites=true&w=majority')
mongoose.connection.once('open', () => { console.log('connected to database'); });

//bu endpoint'e gelen istekleri express-graphql server'ına yönlendirir
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));


app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
})