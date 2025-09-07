import { dbConnect } from "@/services/dbConnect"
import bcrypt from "bcryptjs";
const { User } = require("@/models/User")

export const loginUser = async(payload)=>{
    await dbConnect()
    
      const { email, password } = payload
    
      // validation
      if (!email || !password) {
        throw new Error("All fields are required")
      }
    
      // check if user already exists
      const user = await User.findOne({ email })
        if (!user) throw new Error("No user found");
        
        const isValid = await bcrypt.compare(
          password,
          user.password
        );
        if (!isValid) throw new Error("Invalid credentials");
        
        
        return user;
        

}