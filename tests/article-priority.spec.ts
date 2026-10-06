import { test, expect } from "@playwright/test";

const passportPath = "/artigos/suprimento-de-consentimento-dos-pais-para-emissao-de-passaporte-o-que-fazer-quan";

test("passport consent article is first in all and matching category lists", async ({ page }) => {
  await page.goto("/artigos");
  const articleLinks = page.getByRole("link", { name: /^Ler artigo:/ });
  await expect(articleLinks.first()).toHaveAttribute("href", passportPath);
  await page.getByRole("button", { name: "Internacional", exact: true }).click();
  await expect(articleLinks.first()).toHaveAttribute("href", passportPath);
});