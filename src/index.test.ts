import { describe, it, expect } from 'vitest';
import { getEngineInfo } from './index.js';

describe('getEngineInfo()', () => {
  it('returns version from package.json', () => {
    const info = getEngineInfo();
    expect(info.version).toBe('0.1.0');
  });

  it('returns markdown-it as the active renderer', () => {
    const info = getEngineInfo();
    expect(info.renderer).toBe('markdown-it');
  });

  it('returns an empty extensions list', () => {
    const info = getEngineInfo();
    expect(Array.isArray(info.extensions)).toBe(true);
    expect(info.extensions.length).toBe(0);
  });
});
