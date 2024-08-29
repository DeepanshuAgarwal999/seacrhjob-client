import { ISODateString } from "next-auth";

declare type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
declare interface CustomSession {
  user?: CustomUser;
  expires: ISODateString;
}

declare interface CustomUser {
  id?: string | null;
  name?: string | null;
  image?: string | null;
  email?: string | null;
  provider?: string | null;
  token?: string | null;
}
