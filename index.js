'use strict'

const{ makeExecutableSchema} = require('@graphql-tools/schema')
const express = require('express')
const { graphqlHTTP } = require('express-graphql')// Middleware de graphql
const { readFileSync } = require('fs')
const { join } = require('path')
const resolvers = require('./lib/resolvers')
const app = express()
const port = process.env.port || 3000

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}
const mongoose= require('mongoose')
mongoose.connect('mongodb://localhost/graphql-test').then(()=>console.log("conectado a mongo")).catch(err=>console.log(err))
// definiendo el esquema
const typeDefs = readFileSync(
  join(__dirname, 'lib', 'schema.graphql'),
  'utf-8'
)
//* Incorpora el schema desde donde se encuentra
//* Configura los resolvers para que la query sí regrese información
const schema = makeExecutableSchema({ typeDefs, resolvers })
app.use('/api', cors(corsOptions),graphqlHTTP({
  schema,
  rootValue: resolvers,
  graphiql: true,
  
}));

app.listen(port, () => {
  console.log(`Server running on port ${port}/api`);
});