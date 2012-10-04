var config = module.exports;

config["My tests"] = {
    rootPath: "../",
    // can't seem to test amd modules in node environment as it causes this error:
    // Failed requiring ./js/buster/load-all.js
    environment: "browser",
    sources: [
        "scripts/*.js",
    ],
    tests: [
        "test/*-test.js"
    ],
    libs: [
        // load the config.js file before requirejs so we define the global require variable
        "scripts/conf/require.js",
        "scripts/lib/require.js",
        "scripts/lib/jquery-1.8.2.js"
    ],
    extensions: [require("buster-amd")]
}
