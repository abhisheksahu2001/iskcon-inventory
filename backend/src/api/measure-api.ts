import express, { Router, Request } from 'express'
import MeasureController from '../controllers/measure-controller';

const measureRoutes = () => {
    const route = express.Router();
    const MeasureControllerFunctions = new MeasureController();
    route.post('/create', (req, res) => MeasureControllerFunctions.createMeasure(req, res))
    route.get('/get', (req:Request<{},{},{},{unit:string,id:string}>, res) => MeasureControllerFunctions.getMeasure(req, res))
    route.get('/getall', (req, res) => MeasureControllerFunctions.getAllMeasure(req, res))
    route.patch('/update/:id', (req, res) => MeasureControllerFunctions.updateMeasure(req, res))
    route.delete('/delete/:id', (req, res) => MeasureControllerFunctions.deleteMeasure(req, res))
    return route
}
export default measureRoutes;