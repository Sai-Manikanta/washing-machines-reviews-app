import wasingMachinesdata from "./washingMchinesData";

export default function handler(req,res) {
    const {under35000} = wasingMachinesdata;
    if(under35000) {
        res.status(200).json(under35000);
    }
    return res.status(404).json({error: "data not found"});
}