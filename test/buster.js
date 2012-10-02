var config = module.exports;

config["My tests"] = {
    rootPath: "../",
    environment: "node", // or "browser"
    sources: [
        "scripts/timer.js",
        "scripts/lib/jquery.js"
    ],
    tests: [
        "test/*-test.js"
    ],
    extensions: [require("buster-amd")]
}
