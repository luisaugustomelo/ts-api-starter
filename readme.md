# Skeleton for Node.js applications written in TypeScript

[![Jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![GNU Make](https://img.shields.io/badge/Built%20with-GNU%20Make-brightgreen.svg)](https://img.shields.io/badge/Built%20with-GNU%20Make-brightgreen.svg)

> Starter project for building a bare-bones TypeScript Node.js server.

## Deploy

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/luisaugustomelo/QueroSerBtime/tree/master)

## Requirements

- Node.js 8+
- Docker
- Make

## Dependencies

Main dependencies:

- Typescript
- Express
- Yarn
- Prettier & TSLint
- Jest

## Get started with Docker 

Steps to run the repository for the first time:

1. Clone the repo:

```bash
git clone https://github.com/luisaugustomelo/QueroSerBtime.git <NEW_NAME>

cd <NEW_NAME>
```

2. Giving permission to the bash file: 

```bash
sudo chmod +x ./start.sh # Not work yet
```

3. Run out of root mode:

```bash
./start.sh # Not work yet
```

4. You need put password of root

The application will start the install mode, execute the docker functions and the browser will open firefox (hopefully it has installed :smile: ).


## Get started without Docker

Steps to run the repository for the first time:

1. Clone the repo:

```bash
git clone https://github.com/luisaugustomelo/QueroSerBtime.git <NEW_NAME>

cd <NEW_NAME>
```

2. Check Node.js version:

```bash
node -v # Should be v10.0.0+
```

3. Linting

```bash
make prebuild #first step
```

4. Building app

```bash
make build #second step
```

5. Run

```bash
make bootstrap #thrid step
```

6. Open Web Application:

```bash
index.html
```

_Optional: change the name on the `package.json` file._

## Folder structure

_Some files were omitted for simplicity._

```bash
.
├── src
|  ├── middleware   # Handler errors
|  ├── routes       # Routes definition
|  └── utils        # Configuration files and others.
├── test
└── docs            # Documentation
└── Dockerfile      # Custom environment handler
└── Make            # Command handler

```

## Develop

1. Make changes

Write routes, install dependencies, etc.

2. Write tests

Remember to use `<>.spec.ts` for test files.

3. Run tests

```bash
make test
```

## Scripts

All useful scripts are present on the Makefile.

## License

MIT © Luis Augusto Melo Rohten
 
