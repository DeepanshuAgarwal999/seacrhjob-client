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

declare interface Company {
  _id: string;
  title: string;
  name: string;
  location: string;
  pay: string;
  type: "Remote" | "Full time" | "Part time";
  benefits: string[];
  description: string;
  responsibilities: string[];
  requirements: {
    education: string[];
    experience: string[];
  };
  postedOn: string;
}
