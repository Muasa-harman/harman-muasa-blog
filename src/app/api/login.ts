// import { NextApiRequest, NextApiResponse } from "next";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import clientPromise from "@/lib/mongodb";


// // JWT Secret and expiry
// const JWT_SECRET = process.env.JWT_SECRET ;
// const JWT_EXPIRY = "1h";

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ message: "Method Not Allowed" });
//   }

//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).json({ message: "Email and password are required." });
//   }

//   try {
//     const client = await clientPromise;
//     const db = client.db("mongodb+srv://harmanmuasa:donfiles.online@cluster0.ov5akco.mongodb.net/");
//     const usersCollection = db.collection("users");

//     // Find the user in the database
//     const user = await usersCollection.findOne({ email });

//     // if (!user) {
//       return res.status(401).json({ message: "Invalid email or password." });
//     }

//     // Validate the password
//     const isPasswordValid = await bcrypt.compare(password, user.password);

//     if (!isPasswordValid) {
//       return res.status(401).json({ message: "Invalid email or password." });
//     }

//     // Generate a JWT token
//     const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
//       expiresIn: JWT_EXPIRY,
//     });

//     return res.status(200).json({
//       message: "Login successful.",
//       user: { id: user._id, email: user.email },
//       token,
//     });
//   } catch (error) {
//     console.error("Login error:", error);
//     return res.status(500).json({ message: "Internal Server Error" });
//   }
// }
