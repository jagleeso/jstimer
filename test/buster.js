var config = module.exports;

config["My tests"] = {
    rootPath: "../",
    environment: "node", // or "browser"
    sources: [
        "javascript/timer.js",
        "javascript/jquery.js"
    ],
    tests: [
        "test/*-test.js"
    ]
}
