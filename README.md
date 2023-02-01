# mobile-user

This project is our main APP that will be used by our users.

## Getting Started

These instructions will give you a copy of the project up and running on
your local machine for development and testing purposes. See deployment
for notes on deploying the project on a live system.

### Prerequisites

Requirements for the software and other tools to build, test and push
- [Node.js](https://nodejs.org/en/)
- [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [Expo Cli](https://docs.expo.dev/get-started/installation)

### Installing

A step by step series of examples that tell you how to get a development
environment running

Install the dependencies

    yarn

Start the APP

    yarn start


## Contributing

Understand how our Git flow works.

### Developing new features
```mermaid
gitGraph
   commit
   branch develop
   commit
   branch issue-1
   checkout issue-1
   commit
   commit
   checkout develop
   merge issue-1 tag:"v1.0.0"
   checkout main
   merge develop
   checkout develop
   branch issue-2
   commit
   commit
   checkout develop
   merge issue-2 tag:"v1.1.0"
   checkout main
   merge develop
```

### Fixing bugs
```mermaid
gitGraph
   commit
   branch develop
   checkout develop
   commit
   commit
   checkout main
   merge develop tag:"v1.1.1"
   branch  issue-3
   checkout  issue-3
   commit id:"fix-commit"
   checkout main
   merge issue-3 tag:"v1.1.2"
   checkout develop
   cherry-pick id:"fix-commit"
```

