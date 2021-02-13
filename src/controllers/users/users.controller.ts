import express, {Application, Request, Response, NextFunction} from 'express';

exports.landing = (req : Request, res : Response, next : NextFunction)=>{
    res.json({
        status: true,
        message: "Application Running, try again",
        data: null
    });
}