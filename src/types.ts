// CoffeeMD Core Type Definitions

/** Options passed to the markdown renderer. */
export interface RenderOptions {
  /** Enable HTML tags in Markdown source (default: false) */
  html?: boolean;
  /** Add target="_blank" to external links (default: true) */
  linkify?: boolean;
  /** Enable typographic replacements (default: true) */
  typographer?: boolean;
  /** Enable GFM-style line breaks (default: false) */
  breaks?: boolean;
  /** Custom CSS class for the rendered output wrapper */
  wrapperClass?: string;
}

/**
 * A CoffeeMD extension plugin.
 * Extensions can hook into the rendering pipeline to add custom syntax,
 * modify tokens, or transform output.
 */
export interface Extension {
  /** Unique extension name */
  name: string;
  /** Semantic version of the extension */
  version: string;
  /** Optional setup function called once when the extension is registered */
  setup?: () => void | Promise<void>;
}

/**
 * A parsed Markdown token.
 * Mirrors the markdown-it Token interface for compatibility
 * while allowing CoffeeMD-specific extensions.
 */
export interface Token {
  /** Token type (e.g. 'paragraph_open', 'inline', 'text') */
  type: string;
  /** HTML tag name (for open/close tokens) */
  tag: string;
  /** Token nesting level: 1 = opening, 0 = self-closing, -1 = closing */
  nesting: number;
  /** Token attributes as [[name, value], ...] */
  attrs: [string, string][] | null;
  /** Line number to source map */
  map: [number, number] | null;
  /** Nesting level in the token tree */
  level: number;
  /** Child tokens (for inline content) */
  children: Token[] | null;
  /** Text content */
  content: string;
  /** Block/inline marker */
  block: boolean;
  /** Hidden token (for internal use) */
  hidden: boolean;
  /** Arbitrary metadata for extensions */
  meta?: Record<string, unknown>;
}
