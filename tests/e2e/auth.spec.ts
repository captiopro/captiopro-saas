import { test, expect } from '@playwright/test';

test('signup and login via API', async ({ request }) => {
  const timestamp = Date.now();
  const email = `e2e+${timestamp}@captiopro.test`;
  const password = 'Password123!';

  // Signup
  const signup = await request.post('/api/auth/signup', {
    data: { email, password },
  });
  expect(signup.ok()).toBeTruthy();
  const signupBody = await signup.json();
  expect(signupBody).toHaveProperty('success', true);

  // Login
  const login = await request.post('/api/auth/login', {
    data: { email, password },
  });
  expect(login.ok()).toBeTruthy();
  const loginBody = await login.json();
  expect(loginBody).toHaveProperty('success', true);

  // Basic sanity: returned user email
  expect(loginBody.user).toHaveProperty('email', email);
});
