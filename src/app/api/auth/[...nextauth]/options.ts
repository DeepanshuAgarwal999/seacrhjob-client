import { CustomSession, CustomUser } from "@/types";
import { Account, AuthOptions, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";
import { redirect } from "next/navigation";
import { AxiosError } from "axios";
import { axiosInstance } from "@/lib/axios.instance";
import Credentials from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  pages: {
    signIn: "/auth/login",
  },

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  },

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const requestBody = {
          email: credentials?.email,
          password: credentials?.password,
        };
        try {
          const { data, status } = await axiosInstance.post(
            "/auth/login",
            requestBody
          );
          if (data) {
            console.log(data.user);
            return data.user;
          }

          return null;
        } catch (error) {
          console.log(error);
        }
      },
    }),
  ],

  callbacks: {
    async signIn({
      user,
      account,
    }: {
      user: CustomUser;
      account: Account | null;
    }) {
      try {
        if (account?.provider === "google" && account.providerAccountId) {
          const payload = {
            email: user.email!,
            name: user.name!,
            oauth_id: account.providerAccountId,
            provider: account.provider,
            image: user?.image,
          };
          const { data } = await axiosInstance.post("/auth/login", payload);
          user.token = data.user.token;
          return true;
        }
        if (account?.provider === "credentials") {
          return true;
        } else {
          return false;
        }
      } catch (error) {
        if (error instanceof AxiosError) {
          return redirect(`/auth/error?message=${error.message}`);
        }
        return redirect(
          `/auth/error?message=Something went wrong.please try again!`
        );
      }
    },

    async jwt({ token, user, account, session }) {
      if (user) {
        token.user = user;
      }
      return token;
    },

    async session({
      session,
      token,
      user,
    }: {
      session: CustomSession;
      token: JWT;
      user: User;
    }) {
      session.user = token.user as CustomUser;
      return session;
    },
  },
};
