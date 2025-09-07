import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { loginUser } from "@/app/actions/auth/loginUser";
import { User } from "@/models/User";
import { dbConnect } from "./dbConnect";
export const authOptions = {
  providers: [
    // 🔹 Google Login
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    // 🔹 Credentials Login
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // console.log("credential", credentials);
        const user = await loginUser(credentials);
        // console.log("user info",user);

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      await dbConnect();
      console.log("user and aaaaaaaaaac", { user, account });

      // If login with Google, create user if not exists
      // if (account.provider === "google") {
      if (account) {
        let dbUser = await User.findOne({ email: user.email });
        console.log("exxisskking user", dbUser);

        if (!dbUser) {
          dbUser = await User.create({
            name: user.name,
            email: user.email,
            provider: account?.provider,
            role: "user", // default
            profileimage: user.image,
          });
        }

        // add 2 extra feilds to set jwt and session
        // because sigin just return name,email,profileimage
        // but i need to role and provider name
        user.role = dbUser.role;
        user.provider = dbUser.provider;
      }

      return true;
    },

    async jwt({ token, user, account }) {
      console.log("JWT callback", { token, user });
      if (user) {
        token.name = user.name;
        token.email = user.email;
        token.role = user.role;
        token.provider = user.provider || account?.provider;
      }
      return token;
    },
    async session({ session, token }) {
      console.log("SESSION callback", { session, token });
      if (token) {
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.role = token.role;
        session.user.provider = token.provider;
      }
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
};
