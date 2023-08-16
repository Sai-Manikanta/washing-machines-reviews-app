import wasingMachinesdata from "./washingMchinesData";
export default function handler(req,res) {
    const {under10000} = wasingMachinesdata;
    if(under10000) {
       return res.status(200).json(under10000);
    }
    return res.status(404).json({error: "data not found"});
}