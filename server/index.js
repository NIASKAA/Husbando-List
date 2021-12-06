const express = require('express');
const {ApolloServer} = require('apollo-server-express');
const path = require('path');
const database = require('./connection/connection');
const {typeDefs, resolvers} = require('');

const app = express();
const PORT = process.env.PORT || 4000;

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
    }
    
app.get('*', (res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

database.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Port opened at ${PORT}`)
    });
});