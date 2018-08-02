import ENV from "../config";
const { REACT_APP_SECRET_API = process.env.NODE_ENV } = process.env;

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

const config = Object.assign({}, option[REACT_APP_SECRET_API], {
  REACT_APP_SECRET_API: REACT_APP_SECRET_API
});

export default config.host