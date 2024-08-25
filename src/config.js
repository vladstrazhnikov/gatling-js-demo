import { http } from "@gatling.io/http"

export const testConfig = {
    MIN_PAUSE: { amount: 500, unit: "milliseconds" },
    MAX_PAUSE: { amount: 5, unit: "seconds" },

    VUSERS: 5,
    MIN_VUSERS: 2,
    MAX_VUSERS: 10,
    RAMP_DURATION: { amount: 30, unit: "seconds" },
    DEFAULT_DURATION: { amount: 10, unit: "seconds" },
    TEST_DURATION: { amount: 60, unit: "seconds" },

    AUTH_HEADER: { "Authorization": "Bearer #{jwt}" },

    HTTP_CLIENT: http
        .baseUrl("http://localhost:80")
        .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
        .acceptLanguageHeader("en-US,en;q=0.5")
        .acceptEncodingHeader("gzip, deflate")
        .userAgentHeader(
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/119.0"
        ),
}