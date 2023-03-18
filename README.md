# Anime-browsing App

A react, graphQl, tailwind, typscript and recoil project that can authorize user with OAuth and retrieve list of media from Anime Graphql services. It's using @apollo/client to manage data from these services and store required data into recoil store.

## Contains

- "react": "^18.2.0"
- "react-router-dom": "^6.7.0",
- "recoil": "^0.7.6"
- "pusher-js": "^8.0.1"
- "graphql": "^16.6.0"
- "@apollo/client": "^3.7.4"
- "apollo-link-rest": "^0.9.0"
- "tailwindcss": "^3.2.4"
- "vite": "^4.0.4"
- "typescript": "^4.9.3"

### AniList GraphQl

The AniList GraphQL Api provides quick and powerful access to over 500k anime and manga entries, including character, staff, and live airing data. The AniList & AniChart websites themselves run on the Api, so everything you can do on the sites, you can do via the Api.
[AniList Docs](https://github.com/AniList/ApiV2-GraphQL-Docs)

### GraphQL

GraphQL queries access not just the properties of one resource but also smoothly follow references between them. While typical REST APIs require loading from multiple URLs, GraphQL APIs get all the data your app needs in a single request. Apps using GraphQL can be quick even on slow mobile network connections.

### @apollo/client and apollo-link-rest

Apollo Client is a comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL. Use it to fetch, cache, and modify application data, all while automatically updating your UI.
With apollo-link-rest, you can call your endpoints inside your GraphQL queries and have all your data managed by Apollo Client. [apollo-link-rest](https://www.apollographql.com/docs/react/api/link/apollo-link-rest/)

### PWA

This is a website that looks and behaves as if it is a mobile app. PWAs are built to take advantage of native mobile device features, without requiring the end user to visit an app store, make a purchase and download software locally.

### Pusher js

This App is using Pusher Channels client library, that supports web browsers, web workers and Node.js. [Pusher-js](https://github.com/pusher/pusher-js)

## Features

- Structured project with absolute import
- Using svgr
- Using postcss and tailwind to create a usable and responsive components
- Applying Eslint and Prettier to set rules to meet certain expectation of Javascript coding and using husky to find and fix problems before per commit.

## Requirements

- Node 12 or greater

## Getting start

> yarn dev
