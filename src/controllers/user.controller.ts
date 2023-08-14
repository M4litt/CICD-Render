import { Request, Response } from "express";
import path from 'path'

export default {
    frontPage: (req: Request, res: Response) => {
        res.sendFile(path.join(__dirname, '../../public/login.html'))
    },
    authUser: (req: Request, res: Response) => {
        console.log(req.body.username === 'leto' && req.body.password === 'lamamadejoakod')
        if(req.body.username === 'leto' && req.body.password === 'lamamadejoakod'){
            res.status(200).send()
        } else {
            res.status(401).send()
        }
    }
}