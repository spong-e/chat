# GraphQL Live Chat App
A simple live GraphQL chat app built using React, Node, Apollo Server/Client and TypeGraphQL. Built for dev.to article series!

## To Run
### Server
- Run `cd /server`
- Run `npm install` to install deps
- Run `npm run watch` to compile TS files
- In another terminal, run `npm run dev`
- Visit `localhost:9000/graphql` to view GraphQL Playground

### Client
- Run `cd /chat-client`
- Run `npm instal` to install deps
- Run `npm run start`
- Visit `localhost:3000`

## GraphQL API Endpoints
- `/graphql`: has `createChat` mutation and `allChats` query resolvers
- `/subscriptions`: has `messageSent` subscription

[![forthebadge](https://forthebadge.com/images/badges/made-with-typescript.svg)](https://forthebadge.com)