import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
// import { getToken } from "next-auth/jwt"



export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  // pages: {
  //   signIn: '/auth/signin',
  //   signOut: '/auth/signout',
  //   error: '/auth/error', // Error code passed in query string as ?error=
  //   verifyRequest: '/auth/verify-request', // (used for check email message)
  //   newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  // },
   
  // NEXTAUTH_SECRET :"atr5-gt65-9jet"
//  secret: process.env.NEXTAUTH_SECRET,
});

 

// const secret = process.env.NEXTAUTH_SECRET

// export  async function handler(req:any, res:any) {
//   // if using `NEXTAUTH_SECRET` env variable, we detect it, and you won't actually need to `secret`
//   // const token = await getToken({ req })
//   const token = await getToken({ req, secret })
//   console.log("JSON Web Token", token)
//   res.end()
// }