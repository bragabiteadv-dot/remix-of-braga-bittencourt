import unittest
from playwright.sync_api import sync_playwright


class ArticlePriorityTest(unittest.TestCase):
    def test_passport_article_is_first_in_all_and_matching_category(self):
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            page = browser.new_page(viewport={"width": 1280, "height": 1800})
            page.goto("http://localhost:8080/artigos")
            links = page.get_by_role("link", name="Ler artigo:", exact=False)
            expected = "/artigos/suprimento-de-consentimento-dos-pais-para-emissao-de-passaporte-o-que-fazer-quan"
            self.assertEqual(links.first.get_attribute("href"), expected)
            page.get_by_role("button", name="Internacional", exact=True).click()
            self.assertEqual(links.first.get_attribute("href"), expected)
            browser.close()


if __name__ == "__main__":
    unittest.main()
