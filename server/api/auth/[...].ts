import { NuxtAuthHandler } from "#auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { useUserStore } from "@/stores/user";

export default NuxtAuthHandler({
  pages: {
    // Change the default behavior to use `/login` as the path for the sign-in page
    signIn: "/login",
  },
  // A secret string you define, to ensure correct encryption
  secret: useRuntimeConfig().authSecret,
  // pages: {
  //   // Change the default behavior to use `/login` as the path for the sign-in page
  //   signIn: '/login'
  // },
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    CredentialsProvider.default({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "用户名",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "密码",
        },
      },
      async authorize(credentials: any) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // NOTE: THE BELOW LOGIC IS NOT SAFE OR PROPER FOR AUTHENTICATION!
        const user = {
          id: "1",
          name: "J Smith",
          username: "jsmith",
          password: "hunter2",
          loginName: "jack",
          age: 18,
          sex: "male",
          status: false,
        };

        const response: any = await new Promise((resolve) => {
          setTimeout(() => {
            resolve(user);
          }, 1000);
        });

        // const userStore = useUserStore();
        // const { setUserInfo } = userStore;
        // setUserInfo(response);

        if (
          credentials?.username === response.username &&
          credentials?.password === response.password
        ) {
          // Any object returned will be saved in `user` property of the JWT
          return response;
        } else {
          // eslint-disable-next-line no-console
          console.error(
            "Warning: Malicious login attempt registered, bad credentials provided"
          );
          // If you return null then an error will be displayed advising the user to check their details.
          return null;
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
});
