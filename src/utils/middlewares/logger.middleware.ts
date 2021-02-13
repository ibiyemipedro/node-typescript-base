import express, {Application, Request, Response, NextFunction} from 'express';

exports.loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
    console.log(`${req.method} ${req.path}`);
    next();
}