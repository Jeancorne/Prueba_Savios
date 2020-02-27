import { Request, Response } from 'express';



export async function Obtener(req: Request, res: Response) {
    var respon = {};
    try {
        return "ok";
    }catch (err) {
        respon = {
            message: err,
            status: 404
        };
        res.json(respon);
    }

}