// @ts-nocheck
// Next Auth Import
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

// Firebase Import
import { database } from "@/config/firebase";
import { getDocs, collection, limit, query, where } from "firebase/firestore";

// Auth Import
import bcrypt from "bcrypt";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          // Check if all fields are filled
          if (!email || !password) {
            return null;
          }

          // Check if the user already exists
          const existUser = await getDocs(
            query(
              collection(database, "userCredentials"),
              where("email", "==", email),
              limit(1),
            ),
          );

          // If user doesn't exist
          if (existUser.empty) {
            return null;
          }

          // If user exist
          const user = existUser.docs[0].data();

          // Check if password is correct
          const isMatch = await bcrypt.compare(password, user.password);

          // If password matches
          if (isMatch) {
            return user;
          } else {
            // If password doesn't match
            return null;
          }
        } catch (err: any) {
          console.log("Error: ", err);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      /* Step 1: update the token based on the user object */
      if (user) {
        token.type = user.type;
      }
      return token;
    },

    session({ session, token }) {
      /* Step 2: update the session.user based on the token object */
      if (token && session.user) {
        session.user.type = token.type;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
