import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
  providers: [
    // ✅ Credentials (fake login)
    CredentialsProvider({
      id: "credentials",
      name: "Fake Login",
      credentials: {
        username: { label: "Email", type: "text", placeholder: "Email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        // Simulate async delay
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Return fake user
        return {
          id: "1",
          name: "Test User",
          email: credentials.username || "test@example.com",
          vendor_id: null,
        };
      },
    }),

    // ✅ Google OAuth
    GoogleProvider({
      clientId: "1060148903640-vu5h340oi49h2pbcvotl70ip4upvvq9h.apps.googleusercontent.com"      ,
      clientSecret: "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",
    }),
  ],

  session: { strategy: "jwt" },

  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user; // store user in token
      return token;
    },
    async session({ session, token }) {
      if (token.user) session.user = token.user as any;
      return session;
    },
  },

  pages: {
    signIn: "/oauth", // custom login page
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
