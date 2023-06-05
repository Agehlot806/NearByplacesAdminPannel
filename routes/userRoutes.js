import express from "express";
import {registerUser,login,logout,getMyProfile, updateProfile,updatePassword,forgetPassword,resetPassword, testapi, updateUserRole, getallusers, SendNotification} from "../controllers/adminController.js";
import {authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";
const router = express.Router();
router.route("/registeradmin").post(registerUser);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/myprofile").get(isAuthenticated,getMyProfile);
router.route("/updateadminpassword").put(isAuthenticated,updatePassword);
router.route("/updateadminprofile/:id").put(isAuthenticated,updateProfile);
router.route("/forgetpassword").post(forgetPassword);
router.route("/testapi").post(testapi);
// ResetPassword
router.route("/resetpassword/:token").put(resetPassword);
router.route("/updateuserrole/:id").put(isAuthenticated,authorizeAdmin,updateUserRole);
router.route("/getallusers").get(getallusers);
router.route("/sendnotification").post(SendNotification);




export default router; 