const express = require("express");
const router = express.Router();


const {listOfOrganisers} = require("../controller/organisersLists");
const {eventRequirement} = require("../controller/placeRequest");
const {signup} = require("../controller/signUp");
const {Login} = require("../controller/signUp");



router.post("/variousorganisers",listOfOrganisers);
router.put("/placeorder/:id",eventRequirement);
router.post("/signup",signup);
router.post("/login",Login);




module.exports=router;