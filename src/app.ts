import express, {Application, Request, Response, NextFunction} from 'express';
require('dotenv').config()
const app: Application = express();
const bodyparser = require('body-parser');
const userRoute = require('./routes/users/users.routes');

const loggerMiddleware = require('./utils/middlewares/logger.middleware');
import HttpException from './utils/exceptions/httpExceptions';

const port = process.env.PORT || 4500;

// Use body-parser
app.use(bodyparser.json());

// Allow cross site access
app.use((req : Request, res : Response, next: NextFunction ) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});
 
// logger middleware to log all request
app.use(loggerMiddleware.loggerMiddleware);

// channel all requests through router
app.use('/', userRoute);

// Default landing endpoint if ever other one fails
app.use('/', (req: Request, res: Response, next: NextFunction) => res.status(404).json({message: 'Page not found.'}));

// Global error handler
app.use((error : HttpException, req : Request, res : Response, next : NextFunction) => {
  
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
  
    res.status(status).json({
      message,
      data
    })
  });


app.listen(port, ()=> {console.log('server running ...')})