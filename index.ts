import express, {
  Express,
  Request,
  Response,
} from 'express';

// Our User data is an Object
// The data is available to us in the form of a user object
// which is an instance of a User Class
// The User table of our Database has columns defined
// for each of the values that need to be stored for each user
// We use typeorm for making a connection between User data and mysql DB
// It acts as a layer of abstraction that understands the code as Object,
// translates User Object into SQL code that our DB understands and vice-versa
import { DataSource } from 'typeorm';

// Read environment variables
import dotenv from 'dotenv';

// Cross Original Ressource Sharing
// By default, if the incoming request as a different origin, and different to the server
// it will not respond.
// Since we build REST API, origin won't be same as server so we wanna trick that
import cors from 'cors';

// Parse incoming request bodies in a middleware before your handlers, available under req.body property
import bodyParser from 'body-parser';
import { Task } from './src/tasks/tasks.entity';

// Instantiate express app
const app: Express = express();

// Give access to environment variables
dotenv.config();

// Parse request body
// It will be attached as a body property and convert the incoming JSON into a JS Object
app.use(bodyParser.json());

// Use CORS install types as well
// Streamline the incoming request, no cross origin errors
app.use(cors());

// Create Database Connection with typeorm
export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  // Entities is our table schema or model
  // It is an Array of Entities
  entities: [Task],
  // Go ahead in our DB and create/delete tables that we write in our code as well
  synchronize: true,
});

// Define sever port
const port = process.env.PORT;

// Create a default route.
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

// Before we start listening on the port, we initialize the DB
AppDataSource.initialize()
  // It returns a promise
  .then(() => {
    // Start listenting to the requests on the defined port
    app.listen(port);
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error(
      'Error during Data Source initialization',
      err,
    );
  });
