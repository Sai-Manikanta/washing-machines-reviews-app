import wasingMachinesdata from "./washingMchinesData";
export default function handler(req,res) {
    const {under30000} = wasingMachinesdata;
    if(under30000) {
       return res.status(200).json(under30000);
    }
    return res.status(404).json({error: "data not found"});
}