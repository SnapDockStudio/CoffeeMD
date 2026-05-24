// CoffeeMD — Unified Markdown Engine
// SnapDockStudio Ecosystem

import pkg from '../package.json' with { type: 'json' };

// Re-export core types
export type { RenderOptions, Extension, Token } from './types.js';

/** Active rendering backend (markdown-it is the initial default) */
let activeRenderer: string = 'markdown-it';

/** Loaded extension plugins */
const loadedExtensions: string[] = [];

/**
 * Returns metadata about the CoffeeMD engine.
 * Used by SnapDock apps for debugging and version checks.
 */
export function getEngineInfo(): EngineInfo {
  return {
    version: pkg.version,
    renderer: activeRenderer,
    extensions: [...loadedExtensions],
  };
}

/** Metadata returned by getEngineInfo() */
export interface EngineInfo {
  version: string;
  renderer: string;
  extensions: string[];
}

// Internal: allow future modules to register extensions
export function _registerExtension(name: string): void {
  if (!loadedExtensions.includes(name)) {
    loadedExtensions.push(name);
  }
}

// Internal: allow future modules to switch renderer
export function _setRenderer(name: string): void {
  activeRenderer = name;
}
