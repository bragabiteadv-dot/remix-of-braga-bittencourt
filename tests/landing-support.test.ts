import { describe, expect, test } from 'vitest';
import { INTERNATIONAL_LANDING_PAGES } from '../src/lib/international-landings';
import { RESIDENT_INDEXABLE_PATHS, getResidentLanding } from '../src/lib/resident-landings';
import { getInternationalLandingSupport, getLegacyLandingSupport } from '../src/lib/landing-support';
import legacy from '../src/data/legacy-landing-support.json';

describe('contextual support coverage', () => {
  const pages = [...INTERNATIONAL_LANDING_PAGES, ...RESIDENT_INDEXABLE_PATHS.map(getResidentLanding)];
  const valid = new Set([...pages.map(p => p.path), ...Object.keys(legacy)]);
  test('all 2814 actual landing pages have support data', () => {
    expect(valid.size).toBe(2814);
    for (const p of pages) {
      const data = getInternationalLandingSupport(p);
      expect(data.documents.length).toBeGreaterThanOrEqual(4);
      expect(data.related.length).toBeGreaterThan(0);
    }
    for (const path of Object.keys(legacy)) {
      expect(getLegacyLandingSupport(path).documents.length).toBe(4);
    }
  });
  test('every related service resolves to a real content page', () => {
    const data = [...pages.map(getInternationalLandingSupport), ...Object.keys(legacy).map(getLegacyLandingSupport)];
    for (const section of data) for (const related of section.related) expect(valid.has(related.path)).toBe(true);
  });
  test('different legal services and locations have distinct document guidance', () => {
    const divorce = getLegacyLandingSupport('/advogado-divorcio-betim');
    expect(divorce.documents).not.toEqual(getLegacyLandingSupport('/advogado-inventario-betim').documents);
    expect(divorce.documents).not.toEqual(getLegacyLandingSupport('/advogado-divorcio-bh').documents);
    const a = INTERNATIONAL_LANDING_PAGES[0];
    const b = INTERNATIONAL_LANDING_PAGES.find(p=>p.service.id===a.service.id && p.location.id!==a.location.id);
    expect(b).toBeDefined();
    if (b) expect(getInternationalLandingSupport(a).documents).not.toEqual(getInternationalLandingSupport(b).documents);
  });
});
