import { Request , Response } from "express";
import measureService from "../service/measure.service";


class MeasureController {
    private measureService: measureService
    constructor() {
    this.measureService = new measureService();
  }
  
  async createMeasure(req:Request,res:Response){
    console.log('createMeasure')
    try{
      const { unit } = await req.body;
      console.log(unit);
      const Measure = await this.measureService.createMeasure(unit);
      return res.send({status:200 , data:Measure });
    }catch(error){
      console.log(error);
    }
  }
  async getMeasure(req:Request<{},{},{},{unit:string,id:string}>,res:Response){
    try{
      const { unit , id } = await req.query;
      console.log(unit , id)
      let Measure;
      if(unit){
        Measure = await this.measureService.getMeasureByName(unit);
      }else if (id){
        Measure = await this.measureService.getMeasureById(id);
      }
      return res.send({status:200 , data:Measure });
    }catch(error){
      console.log(error);
    }
  }

  async getAllMeasure(req:Request,res:Response){
    try{
      const measures = await this.measureService.getAllMeasure();
      return res.send({status:200 , data:measures });
    }catch(error){
      console.log(error);
    }
  }

  async updateMeasure(req:Request,res:Response){
    try{
      const { id } = await req.params;
      const { unit } = await req.body;
      const measure = await this.measureService.updateMeasure(id, unit);
      return res.send({status:200 , data:measure });
    }catch(error){
      console.log(error);
    }
  }

  async deleteMeasure(req:Request,res:Response){
    try{
      const { id } = await req.params;
      const Measure = await this.measureService.deleteMeasure(id);
      return res.send({status:200 , data:Measure });
    }catch(error){
      console.log(error);
    }
  }

}

export default MeasureController;