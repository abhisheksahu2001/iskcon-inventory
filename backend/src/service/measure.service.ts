import MeasureRepo from "../Repo/measure";
class measureService {
    private measureRepo: MeasureRepo;
    constructor(){
        this.measureRepo = new MeasureRepo();
    }

    async createMeasure(name:string) {
        try {
            const isMeasurePresent = await this.measureRepo.findMeasureByName(name.toLowerCase());
            console.log(isMeasurePresent);
            if (isMeasurePresent.length > 0) {
                return "Measure already exists";
            }
            const result = await this.measureRepo.addMeasure(name.toLowerCase());
            console.log(result)
            return result;
        } catch (err) {
            console.log(err);
            return err;
        }

    }
    async getMeasureByName(name:string) {
        try {
            const result = await this.measureRepo.findMeasureByName(name.toLowerCase());
            return result;
        }catch(err){

            console.log(err);
            return err;
        }
    }
    async getMeasureById(id:string) {
        try {
            const result = await this.measureRepo.findMeasureById(id);
            return result;
        }catch(err){
            console.log(err);
            return err;
        }
    }

    async getAllMeasure(){
        try{
            const result = await this.measureRepo.getAllMeasure();
            return result;
        }catch(err){
            console.log(err);
            return err;
        }
    }

    async updateMeasure(id:string, name:string) {
        try {
            const result = await this.measureRepo.updateMeasure(id,name.toLowerCase());
            return result;
        }catch(err){
            console.log(err);
            return err;
        }
    }

    async deleteMeasure(id:string) {
        try {
            const result = await this.measureRepo.deleteMeasure(id);
            return result;
        }catch(err){
            console.log(err);
            return err;
        }
    }
}
export default measureService