import wasingMachinesdata from "./washingMchinesData";
export default function handler(req,res) {
    const {under20000} = wasingMachinesdata;
    if(under20000) {
       return res.status(200).json(under20000);
    }
    return res.status(404).json({error: "data not found"});
}