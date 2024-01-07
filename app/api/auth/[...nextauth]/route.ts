
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

const googleClientId: string = process.env.GOOGLE_CLIENT_ID!;
const googleClientSecret: string = process.env.GOOGLE_CLIENT_SECRET!;
const facebookClientId: string = process.env.FACEBOOK_CLIENT_ID!;
const facebookClientSecret: string = process.env.FACEBOOK_CLIENT_SECRET!;

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: googleClientId,
      clientSecret: googleClientSecret,
    }),
    FacebookProvider({
      clientId: facebookClientId,
      clientSecret: facebookClientSecret,
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: "/auth/signin",
    // signOut: '/auth/signout',
  }
}
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
