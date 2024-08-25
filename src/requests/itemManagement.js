import { StringBody, ElFileBody } from "@gatling.io/core";
import { http, status } from "@gatling.io/http";
import { testConfig } from "../config";

export const addItem =
    http('Add new item')
        .post('/api/v1/items/')
        .headers(testConfig.AUTH_HEADER)
        // .body(StringBody("{\"title\": \"#{title}\",\"description\": \"#{description}\"}"))
        .body(ElFileBody("src/resources/payloads/addItem.json"))
        // .asJson()
        .check(status().is(200))