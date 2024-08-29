import { CustomSession, CustomUser } from "@/types";
import { Account, AuthOptions, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

import { redirect } from "next/navigation";

export const authOptions: AuthOptions = {
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    async signIn({
      user,
      account,
    }: {
      user: CustomUser;
      account: Account | null;
    }) {
      return true;
      //   try {
      //     const payload = {
      //       email: user.email!,
      //       name: user.name!,
      //       oauth_id: account?.providerAccountId!,
      //       provider: account?.provider!,
      //       image: user?.image,
      //     };
      //     // const { data } = await axios.post(LOGIN_URL, payload);

      //     user.id = data?.user?.id?.toString();
      // user.token = "Deepanshu agarwal";
      //     return true;
      //   } catch (error) {
      //     if (error instanceof AxiosError) {
      //       return redirect(`/auth/error?message=${error.message}`);
      //     }
      //     return redirect(
      //       `/auth/error?message=Something went wrong.please try again!`
      //     );
      //   }
    },

    async jwt({ token, user }) {
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
  session: {
    strategy: "jwt",
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
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const requestBody = {
          email: credentials?.email,
          password: credentials?.password,
        };
        //     // const { data,status } = await axios.post(LOGIN_URL, requestBody);

        //     user.id = data?.user?.id?.toString();
        //     user.token = data?.user?.token;
        // console.log("Login...", data);
        // if (
        //   status === 400 ||
        //   status === 401 ||
        //   status === 403 ||
        //   status === 500
        // ) {
        //   return null;
        // }
        // if (status === 200 ||status === 201) {
        //   return data;
        // }

        return null;
      },
    }),
  ],
};
