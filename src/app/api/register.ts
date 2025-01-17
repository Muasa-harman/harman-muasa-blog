import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import { MongoClient } from "mongodb";

const mongoUri = process.env.MONGODB_URI || "mongodb://localhost:27017"; // Use an environment variable for the URI
const dbName = "mongodb+srv://harmanmuasa:donfiles.online@cluster0.ov5akco.mongodb.net/";

const UserSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\(\d{3}\)\s\d{3}-\d{3}-\d{4}$/, "Invalid phone number"),
});

type User = z.infer<typeof UserSchema>;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const client = new MongoClient(mongoUri);
    const validatedData: User = UserSchema.parse(req.body);

    await client.connect();
    const db = client.db(dbName);
    const usersCollection = db.collection("users");

    // Check if the email is already registered
    const existingUser = await usersCollection.findOne({ email: validatedData.email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Insert new user
    const result = await usersCollection.insertOne(validatedData);

    res.status(201).json({ $id: result.insertedId, message: "User registered successfully" });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ errors: error.errors });
    }
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default handler;
