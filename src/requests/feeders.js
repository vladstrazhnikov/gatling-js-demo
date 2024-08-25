import { csv } from "@gatling.io/core";

export const userFeeder = csv("fullname_email.csv").random();
export const authFeeder = csv("username_password.csv").random();
export const itemFeeder = csv("title_description.csv").random();