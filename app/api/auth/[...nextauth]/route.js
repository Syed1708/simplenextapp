import { authOptions } from "@/services/authOptions";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);
console.log("✅ NextAuth route mounted")


export { handler as GET, handler as POST };
