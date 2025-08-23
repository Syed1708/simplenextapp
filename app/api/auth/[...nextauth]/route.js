import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { User } from "@/models/User";
import { dbConnect } from "@/services/dbConnect";

export const authOptions = {
  providers: [
    // 🔹 Google Login
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),

    // 🔹 Credentials Login
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await dbConnect();

        if (!credentials.email || !credentials.password) {
          throw new Error("Email and password are required");
        }
        const user = await User.findOne({ email: credentials.email });

        if (!user) throw new Error("No user found");
        if (!user.password) throw new Error("User registered with Google");

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!isValid) throw new Error("Invalid credentials");

        return { id: user._id, name: user.name, email: user.email };
      },
    }),
  ],
  callbacks: {
    // async signIn({ user, account }) {
    //   await dbConnect();

    //   // If login with Google, create user if not exists
    //   if (account.provider === "google") {
    //     const existingUser = await User.findOne({ email: user.email });
    //     if (!existingUser) {
    //       await User.create({
    //         name: user.name,
    //         email: user.email,
    //         provider: "google",
    //       });
    //     }
    //   }

    //   return true;
    // },
    async session({ session }) {
      await dbConnect();
      const dbUser = await User.findOne({ email: session.user.email });
      session.user.id = dbUser._id;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
