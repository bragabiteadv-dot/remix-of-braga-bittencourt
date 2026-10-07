import json
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
ROWS = json.loads((ROOT / "src/data/resident-catalogue.json").read_text())


class ResidentCatalogueTest(unittest.TestCase):
    def test_all_approved_service_and_place_combinations_exist(self):
        self.assertEqual(len(ROWS), 23 * 98)
        self.assertEqual(len({row["path"] for row in ROWS}), 2254)
        for service in {row["serviceId"] for row in ROWS}:
            group = [row for row in ROWS if row["serviceId"] == service]
            self.assertEqual(len(group), 98)
            self.assertEqual(len({row["locationId"] for row in group if row["locationId"] is not None}), 97)

    def test_brazil_residents_use_general_page(self):
        for row in ROWS:
            if row["locationId"] == 5:
                self.assertNotEqual(row["path"], row["target"])
                self.assertTrue(row["target"].endswith("-no-brasil"))

    def test_subtraction_uses_restitution_without_redirect_chains(self):
        by_path = {row["path"]: row for row in ROWS}
        for row in ROWS:
            if row["serviceId"] == "sequestro-internacional-criancas":
                self.assertIn("restituicao-internacional-criancas", row["target"])
            self.assertEqual(by_path[row["target"]]["target"], row["target"])

    def test_approved_indexable_and_alias_counts(self):
        self.assertEqual(sum(row["path"] == row["target"] for row in ROWS), 2134)
        self.assertEqual(sum(row["path"] != row["target"] for row in ROWS), 120)

    def test_every_address_has_an_individual_route(self):
        for row in ROWS:
            path = ROOT / "src/routes" / (row["path"][1:] + ".tsx")
            self.assertTrue(path.is_file(), row["path"])


if __name__ == "__main__":
    unittest.main()