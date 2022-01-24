# Cart REST API example

Example implementation of a REST API. Built with node.js, Express, SQLite, and Sequelize.

## Installation
```bash
# Clone the repo and install dependencies
$ git clone https://github.com/LightIn-death/API-HublotSocial
$ cd API-HublotSocial
$ npm install
```

## API Endpoints
This is a RESTful API which exposes basic CRUD methods. All communication
with the server (requests and responses) must be in JSON.
```
Media

GET     /media                        Get a list of all medias
POST    /media                        Create a new media
GET     /media/:id                    Get a specific media
PUT     /media/:id                    Update a media
DELETE  /media/:id                    Delete a media
```

## Usage
Starting the server:
```bash
# To start the server make sure you're at the root directory
# root directory and run:
$ npm start

# You can also use the test unit with :
$ npm test
```