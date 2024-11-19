// required variables
const required = ["DATABASE_URL", "REDIS_TOKEN", "REDIS_API"];
const missing = required.filter((key) => !process.env[key]);
if (missing.length > 0) {
  throw new Error(
    `Missing required environment variables: ${missing.join(", ")}`,
  );
}

// export env variables and default values
export const { DATABASE_URL = "", REDIS_TOKEN, REDIS_API } = process.env;
