import { jmesPath } from "@gatling.io/core";
import { http, status } from "@gatling.io/http";

export const signIn =
    http("Login")
        .post("/api/v1/login/access-token")
        .formParam('username', '#{username}')
        .formParam('password', '#{password}')
        .check(status().is(200))
        .check(jmesPath("access_token").saveAs("jwt"))

export const signInAsSuper =
    http("LoginAsSuper")
        .post("/api/v1/login/access-token")
        .formParam('username', 'test@email.com')
        .formParam('password', '12345678')
        .check(status().is(200))
        .check(jmesPath("access_token").saveAs("jwt"))