import { expect, test } from "@playwright/test";
import { createUser, signUp } from "./auth-utils";

test.describe("catalog page", () => {
  test("signed-up user sees the products catalog after signup", async ({
    page,
  }) => {
    const user = createUser("catalog");
    await signUp(page, user);

    await expect(page).toHaveURL(/\/products/);
    await expect(page.locator("h2").first()).toBeVisible();
  });

  test("redirects unauthenticated users to sign in when they try to browse the catalog", async ({
    page,
  }) => {
    await page.goto("/products");

    await expect(page).toHaveURL(/\/signin/);
    await expect(
      page.getByRole("heading", { name: /welcome back/i }),
    ).toBeVisible();
    await expect(page.getByRole("button", { name: /sign in/i })).toBeVisible();
  });
});
