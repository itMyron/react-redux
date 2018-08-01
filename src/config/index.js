//const merge = require("webpack-merge");
const prodEnv = require("./prod.env");
const propEnv = require("./prop.env");
const devEnv = require("./dev.env");
const testEnv = require("./test.env");
module.exports = { prodEnv, propEnv, devEnv,testEnv};



