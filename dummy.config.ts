import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv'

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });
dotenv.config({ path: `.env.${process.env.NODE_ENV || 'dev'}` });


/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
    testDir: './tests',
/* Retry on CI only */
retries: process.env.CI ? 2 : 0,
/* Opt out of parallel tests on CI. */
workers: 4,

    projects: [
       {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
     },
    ]
});