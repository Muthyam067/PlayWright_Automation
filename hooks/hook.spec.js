import { test, expect, Page } from '@playwright/test';

// Before all tests
test.beforeAll(async () => {
  console.log('Before all tests');
  // Setup that runs once before all tests, e.g., browser instance, database, etc.
});

// Before each test
test.beforeEach(async ({ page }) => {
  console.log('Before each test');
  // Reset page, login, or any setup specific to each test
  await page.goto('https://example.com');
});

// After all tests
test.afterAll(async () => {
  console.log('After all tests');
  // Clean up actions like closing browser instance, clearing data, etc.
});
