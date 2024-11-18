declare module "bun" {
  interface Env {
    DATABASE_URL: string;
    REDIS_TOKEN: string;
    REDIS_API: string;
  }
}
