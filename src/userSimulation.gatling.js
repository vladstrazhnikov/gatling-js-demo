import {
    simulation,
    scenario,
    rampUsers,
    nothingFor,
    atOnceUsers,
    constantUsersPerSec,
    rampUsersPerSec,
    randomSwitch,
    percent
} from "@gatling.io/core";
import { testConfig } from "./config";
import * as TestScenarios from "./testScenarios";

export default simulation((setUp) => {
    const editProfile = scenario("Profile: Edit user full name").exec(TestScenarios.editFullname);
    const addItem = scenario("Item management: Add new item").exec(TestScenarios.addItem);

    const realScenario = scenario("Real scenario").during(testConfig.DEFAULT_DURATION).on(
        randomSwitch().on(
            percent(60.0).then(TestScenarios.editFullname),
            percent(40.0).then(TestScenarios.addItem)
        )
    )

    setUp(
        // editProfile.injectOpen(
        //     nothingFor(4),
        //     atOnceUsers(testConfig.VUSERS),
        //     constantUsersPerSec(1).during(testConfig.DEFAULT_DURATION),
        //     rampUsers(testConfig.VUSERS).during(testConfig.RAMP_DURATION),
        //     rampUsersPerSec(testConfig.MIN_VUSERS).to(testConfig.MAX_VUSERS).during(testConfig.DEFAULT_DURATION).randomized()
        // ),
        // addItem.injectOpen(
        //     nothingFor(4),
        //     atOnceUsers(testConfig.VUSERS),
        //     constantUsersPerSec(1).during(testConfig.DEFAULT_DURATION),
        //     rampUsers(testConfig.VUSERS).during(testConfig.RAMP_DURATION),
        //     rampUsersPerSec(testConfig.MIN_VUSERS).to(testConfig.MAX_VUSERS).during(testConfig.DEFAULT_DURATION).randomized()
        // ),
        realScenario.injectOpen(
            nothingFor(4),
            atOnceUsers(testConfig.VUSERS),
            constantUsersPerSec(1).during(testConfig.DEFAULT_DURATION),
            rampUsers(testConfig.VUSERS).during(testConfig.RAMP_DURATION),
            rampUsersPerSec(testConfig.MIN_VUSERS).to(testConfig.MAX_VUSERS).during(testConfig.DEFAULT_DURATION).randomized()
        )
    ).protocols(testConfig.HTTP_CLIENT);
});
