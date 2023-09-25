const express = require ("express");
const router = express.Router();
const {showall ,showone ,createcontact,editcontact,deletecontact } =require("../contact_controler/contact_controler");
const validuser = require("../middleware/validate_tokenhandler");



router.use(validuser);//VALID USER CAN ACCESS THE FOLLOWING ROUTES

//GET //POST CONTACT
// contact/
router.route("/").get(showall).post(createcontact);
//GET SINGLE CONTACT//UPDATE CONTACT//DELETE THE CONTACT
// contact/:id
router.route("/:id").get(showone).put(editcontact).delete(deletecontact);


module.exports= router;