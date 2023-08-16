import wasingMachinesdata from "./washingMchinesData";

export default function handler(req,res) {
    const {under40000} = wasingMachinesdata;
    if(under40000) {
       return res.status(200).json(under40000);
    }
    return res.status(404).json({error: "data not found"});
}