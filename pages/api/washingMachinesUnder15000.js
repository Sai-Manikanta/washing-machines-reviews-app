import wasingMachinesdata from "./washingMchinesData";
export default function handler(req,res) {
    const {under15000} = wasingMachinesdata;
    if(under15000) {
       return res.status(200).json(under15000);
    }
    return res.status(404).json({error: "data not found"});
}