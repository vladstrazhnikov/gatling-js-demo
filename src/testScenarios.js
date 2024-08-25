import { exec, pause, feed } from "@gatling.io/core"
import { testConfig } from "./config"

import { userFeeder, authFeeder, itemFeeder } from "./resources/feeders"
import * as Auth from "./resources/auth"
import * as Profiles from "./resources/profile"
import * as Items from "./resources/itemManagement"

const editFullname = exec(
    Auth.signInAsSuper,
    pause(testConfig.MIN_PAUSE, testConfig.MAX_PAUSE),
    Profiles.getProfile,
    feed(userFeeder),
    Profiles.editFullName
)
// example for console output
// .exec((session) => {
//     console.log(session.get("jwt"));
//     return session;
// });

const addItem = exec(
    feed(authFeeder),
    Auth.signIn,
    pause(testConfig.MIN_PAUSE, testConfig.MAX_PAUSE),
    feed(itemFeeder),
    Items.addItem
)

export { editFullname, addItem }