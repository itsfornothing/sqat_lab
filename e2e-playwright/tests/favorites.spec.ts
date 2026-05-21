import { expect, test } from "@playwright/test";
import { createUser, signUp } from "./auth-utils";

test.describe("favorites feature", () => {
  test("signed-up user can favorite a product and see it in favorites", async ({
    page,
  }) => {
    const user = createUser("favorites");
    await signUp(page, user);

    await page.goto("/products");

    const favoriteButton = page
      .getByRole("button", { name: /toggle favorite for/i })
      .first();
    await expect(favoriteButton).toBeVisible();

    await Promise.all([
      page.waitForResponse(
        response =>
          response.status() === 200 &&
          response.url().includes("/api/favorites"),
      ),
      favoriteButton.click(),
    ]);

    await page.goto("/favorites");

    await expect(page).toHaveURL(/\/favorites/);
    await expect(page.getByRole("heading", { name: /favorites/i })).toBeVisible();
    await expect(page.locator("h2", { hasText: "Comet Tee" })).toBeVisible({
      timeout: 10000,
    });
  });

  test("redirects unauthenticated users to sign in when opening favorites", async ({
    page,
  }) => {
    await page.goto("/favorites");

    await expect(page).toHaveURL(/\/signin/);
    await expect(
      page.getByRole("heading", { name: /welcome back/i }),
    ).toBeVisible();
    await expect(page.getByRole("button", { name: /sign in/i })).toBeVisible();
  });
});
