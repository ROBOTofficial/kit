import { devices } from '@playwright/test';

/** @type {import('@playwright/test').PlaywrightTestConfig} */
export const config = {
	webServer: {
		command: 'pnpm build && pnpm preview',
		port: 8787
	},
	projects: [
		{
			name: 'chromium'
		}
	],
	use: {
		...devices['Desktop Chrome'],
		screenshot: 'only-on-failure',
		trace: 'retain-on-failure'
	},
	reporter: 'list',
	testDir: 'test',
	testMatch: /(.+\.)?(test|spec)\.[jt]s/
};
