import wasingMachinesdata from "./washingMchinesData";
export default function handler(req,res) {
    const {under25000} = wasingMachinesdata;
    if(under25000) {
       return res.status(200).json(under25000);
    }
    return res.status(404).json({error: "data not found"});
}