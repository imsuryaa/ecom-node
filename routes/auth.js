import express from "express";
import { users } from "../data/users.js";
import jwt from "jsonwebtoken";

const router = express.Router();
const JWT_SECRET = "mocksecret123";

// router.post("/login", (req, res) => {
//   const { email, password } = req.body;

//   const user = users.find(u => u.email === email && u.password === password);

//   if (!user) {
//     return res.status(401).json({ message: "Invalid email or password" });
//   }

//   // Generate JWT token (optional for frontend)
//   const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
//     expiresIn: "1h"
//   });

//   // Return full mock response
//   res.json({
//     token,
//     userProfile: user.userProfile,
//     hashedNewEmail: user.hashedNewEmail,
//     orderHistoryDetails: user.orderHistoryDetails,
//     loginAttempts: user.loginAttempts,
//     lastLoginTime: user.lastLoginTime,
//     addressComplete: user.addressComplete
//   });
// });

// Simple mock endpoint — no login or token required
router.get("/getUserDetails", (req, res) => {
    // Return the first user from mock data
    const user = users[0];
    
    res.json({
      userProfile: user.userProfile,
      hashedNewEmail: user.hashedNewEmail,
      orderHistoryDetails: user.orderHistoryDetails,
      loginAttempts: user.loginAttempts,
      lastLoginTime: user.lastLoginTime,
      addressComplete: user.addressComplete
    });
  });
export default router;