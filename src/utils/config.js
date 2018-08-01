import ENV from "../config";
const { NODE_ENV = "production" } = process.env.REACT_APP_SECRET_API;
const option = {
    development: {
        host: process.env.REACT_APP_RECORDS_API_URL || ENV.devEnv.API_ROOT
    },
    prop: {
        host: ENV.propEnv.API_ROOT || ""
    },
    test: {
        host: ENV.testEnv.API_ROOT || ""
    },
    production: {
        host: ENV.propEnv.API_ROOT || ""
    }
};


const config = Object.assign({}, option[NODE_ENV], {
    NODE_ENV: NODE_ENV
})

export default config.host