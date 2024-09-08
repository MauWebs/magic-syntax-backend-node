process.loadEnvFile();
export const URL_BASE = process.env.ENDPOINT_BASE;
export const URL_DEVICES = URL_BASE + process.env.ENDPOINT_DEVICES;
export const URL_COMPONENTS = URL_BASE + process.env.ENDPOINT_COMPONENTS;