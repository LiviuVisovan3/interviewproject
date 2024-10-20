# calorie

Touch-Free Menu™ e alternativa digitală la meniurile clasice

## Installation

### Prerequisites

- node
- npm
- mongodb

1. Ideally, clone both calorie-server and calorie-client repositories and place them in the same folder

2. Install server dependencies
   ```bash
   $ cd calorie-server
   $ npm install
   ```
3. Install client dependencies
   ```bash
   $ cd calorie-client
   $ npm install
   ```

## Run the app

Install and run `mongod`: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/

Make sure to have a `/data/db` folder in `/Users/{yourusername}/data/db`.

1. Start mongodb locally
   ```bash
   $ mongod --dbpath=/Users/{yourusername}/data/db
   ```
2. Using MongoDB Compass, create a `calorie-local` database on your local `mongod` instance
3. Populate your local database
   ```bash
   $ npm run poopulate-local-database
   ```
4. Start the server
   ```bash
   $ npm run s
   ```
5. Start the client
   ```bash
   $ npm run c
   ```
6. Browse to `http://localhost:3001/`
