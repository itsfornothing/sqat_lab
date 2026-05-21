import { expect, test } from "@playwright/test";
import { createUser, signUp } from "./auth-utils";

test.describe("cart page", () => {
  test("signed-up user sees empty cart state and browse products CTA", async ({
    page,
  }) => {
    const user = createUser("cart");
    await signUp(page, user);

    await page.goto("/cart");

    await expect(page).toHaveURL(/\/cart/);
    await expect(
      page.getByRole("heading", { name: /your cart/i }),
    ).toBeVisible();
    await expect(page.getByText(/your cart is empty/i)).toBeVisible();
    await expect(
      page.getByRole("link", { name: /browse products/i }),
    ).toBeVisible();
  });

  test("redirects unauthenticated users to sign in when opening cart", async ({
    page,
  }) => {
    await page.goto("/cart");

    await expect(page).toHaveURL(/\/signin/);
    await expect(
      page.getByRole("heading", { name: /welcome back/i }),
    ).toBeVisible();
    await expect(page.getByRole("button", { name: /sign in/i })).toBeVisible();
  });
});
