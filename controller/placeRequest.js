const  eventDetails = require("../models/eventModel");
const company  = require("../models/organiserModel");
const mongoose = require("mongoose");


exports.eventRequirement = async (req,res)=>{
    try {
        const id = req.params.id;
        const {time,place,venue,servicesWanted,atDate} = req.body;
        console.log("hello");



        // you need to first take the requirements from the user 
       // that is user needs to place a entry requirement
      // let's find the company
     //extract todo items by the id

       var  timeNew  = new Date("2023-09-10");
        timeNew.toLocaleTimeString(); 
          
        console.log("time tak theek hai")

        const isValidObjectId = mongoose.Types.ObjectId.isValid(id);
        if (!isValidObjectId) {
          throw new Error('Invalid ID');
        }
            
        const showOrganiserToUsers = await company.findByIdAndUpdate(
            id,
            { place, venue,servicesWanted,atDate}, 
            { new: true } // Set {new: true} to return the updated document
          );

          console.log("update ho raha hai",showOrganiserToUsers);
      

/*
          const eventDetails = new company({
            companyId: id,
            time: timeNew, 
            place:place,
            venue:venue,
            //services:services,
           // companyName:companyName,
          });
      
          // Save the requirements in the database
          const savedRequirements = await eventDetails.save();
          console.log("Saved requirements:", savedRequirements);
          


       console.log("hellpservices",showOrganiserToUsers);
       // now saving in db

       
       console.log("saving",save);
*/
       res.status(200).json({
        message:"saved",
        success:true,
       });


    } catch (error) {
        res.status(400).json({
            success:false,
            error:`this is the error ${error}`,
        })
    }
}