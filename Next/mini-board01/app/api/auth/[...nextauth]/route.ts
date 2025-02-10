import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

const clientId = process.env.NEXT_PUBLIC_GITHUB_ID as string;
const clientSecret = process.env.NEXT_PUBLIC_GITHUB_SECRET as string;
const secret = process.env.NEXT_PUBLIC_NEXTAUTH_SECRET as string;


export const authOptions = {
  providers: [
    GithubProvider({
      clientId,
      clientSecret
    }),
  ],
  secret
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };