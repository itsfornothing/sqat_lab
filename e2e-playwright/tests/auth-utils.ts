import type { Page } from "@playwright/test";

export type AuthUser = {
  name: string;
  email: string;
  password: string;
};

export const createUser = (prefix = "user"): AuthUser => ({
  name: `${prefix} ${Date.now()}`,
  email: `${prefix}_${Date.now()}@example.com`,
  password: "Testpass123",
});

export async function signUp(page: Page, user: AuthUser) {
  await page.goto("/signup");
  await page.getByLabel("Name").fill(user.name);
  await page.getByLabel("Email").fill(user.email);
  await page.getByLabel("Password").fill(user.password);
  await Promise.all([
    page.waitForURL("**/products"),
    page.getByRole("button", { name: "Sign up" }).click(),
  ]);
}

export async function signIn(
  page: Page,
  user: Pick<AuthUser, "email" | "password">,
) {
  await page.goto("/signin");
  await page.getByLabel("Email").fill(user.email);
  await page.getByLabel("Password").fill(user.password);
  await Promise.all([
    page.waitForURL("**/products"),
    page.getByRole("button", { name: "Sign in" }).click(),
  ]);
}
