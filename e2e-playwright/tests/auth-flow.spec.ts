import { expect, test } from "@playwright/test";
import { createUser, signIn, signUp } from "./auth-utils";

const authUser = createUser("auth");

test.describe.configure({ mode: "serial" });

test("signup redirects to products", async ({ page }) => {
  await signUp(page, authUser);
  await expect(page).toHaveURL(/\/products/);
});

test("login redirects to products", async ({ page }) => {
  await signIn(page, authUser);
  await expect(page).toHaveURL(/\/products/);
});

test("auth navbar brand keeps the user on the products page", async ({ page }) => {
  await signIn(page, authUser);

  await page.getByRole("link", { name: "Sample E-commerce" }).click();

  await expect(page).toHaveURL(/\/products/);
  await expect(page.getByRole("heading", { name: /comet tee/i }).first()).toBeVisible();
});
