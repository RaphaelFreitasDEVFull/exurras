import { Role } from "@/genereted";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      role: Role;
      username: string;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    role: string;
    username: string;
  }
}
