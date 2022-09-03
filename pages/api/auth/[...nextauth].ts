import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  adapter: MongoDBAdapter(clientPromise),
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return clientPromise.then(async (client) => {
        let return_value = true;
        try {
          const db = await client.db("ACPUB");
          const ud = await db
            .collection("profiles")
            .find({ email: user.email })
            .toArray();
          return_value = ud.length > 0;
        } catch (err) {
          return_value = false;
        }
        return return_value;
      });
    },
    async session({ session, user }) {
      return clientPromise.then(async (client) => {
        try {
          const db = await client.db("ACPUB");
          const ud = await db
            .collection("profiles")
            .find({ email: user.email })
            .toArray();
          session.user = { ...session.user, ...ud[0] };
        } catch (err) {
          return Promise.reject(session);
        }

        return Promise.resolve(session);
      });
    },
  },
});
