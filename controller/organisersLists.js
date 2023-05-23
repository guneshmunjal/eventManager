const modelOrganiser = require("../models/organiserModel");


exports.listOfOrganisers = async (req,res) =>{
    try {
         // first take the input from the organisers
     const { companyName,experience,servicesProvided } = req.body;

     // now you need to show that on listoforganisers portal 
             
     // in order to do this you need to create a entry in db

     const createEntry = await modelOrganiser.create({companyName,experience,servicesProvided});
     console.log("entry",createEntry,companyName,experience,servicesProvided);

     res.status(200).json({
        success:true,
        message:"entry created successfully",
     });

    } catch (error) {
        res.status(400).json({
            success:false,
            message:`error ${error}`
        });
        
    }
}