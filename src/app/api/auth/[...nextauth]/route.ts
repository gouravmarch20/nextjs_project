import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials", // Must match signIn()
      name: "Fake Login",
      credentials: {
        username: { label: "Email", type: "text", placeholder: "Email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        // Simulate async network call
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Return a fake user
        return {
          id: "1",
          name: "Test User",
          email: credentials.username || "test@example.com",
          vendor_id: null,
        };
      },
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
    signIn: "/oauth", // Your custom page
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

