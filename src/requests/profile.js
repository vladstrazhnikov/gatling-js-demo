import { StringBody } from "@gatling.io/core";
import { http, status } from "@gatling.io/http";
import { testConfig } from "../config";

export const getProfile =
    http('Get Profile')
        .get('/api/v1/users/me')
        .headers(testConfig.AUTH_HEADER)
        .check(status().is(200))

export const editFullName =
    http('Edit Profile')
        .patch('/api/v1/users/me')
        .headers(testConfig.AUTH_HEADER)
        .body(StringBody("{\"full_name\": \"#{fullname}\",\"email\": \"test@email.com\"}"))
        .asJson()
        .check(status().is(200))