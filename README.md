# Stencil-SFS
Stencil project - Start from scratch

## Installation
- Install Node.js

Go to [Node website](https://nodejs.org/en/)

- Install [json-server](https://github.com/typicode/json-server)

Full fake REST API
```
$ npm install -g json-server
```
## Usage

- Clone or Download the project

- Install dependencies
```
$ cd my-project
$ npm install
```

- Open first command prompt

a) for dev build
```
$ cd my-project
$ npm start
```

b) for prod build

```
$ cd my-project
$ npm run build
```

Install [http-server](https://github.com/indexzero/http-server)

A command-line http server
```
$ npm install -g http-server
```
then 

```
$ cd my-project\build
http-server
```

- Open second command prompt
```
$ cd my-project\fake_db
$ json-server --watch db.json --port 4000
```

- Go to [localhost:8080](http://localhost:8080/)

## Conclusion

This is just a simple example, I hope this will help you to understand better Stencil.
