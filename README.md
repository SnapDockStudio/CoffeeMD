# **CoffeeMD — Unified Markdown Engine for SnapDockStudio**

**CoffeeMD** is the official Markdown engine of the **SnapDockStudio** ecosystem.  
It provides a fast, consistent, and extensible way to parse, render, and format Markdown across all SnapDock applications.

CoffeeMD unifies multiple Markdown technologies — including **markdown‑it**, **marked**, and custom SnapDock extensions — into a single, predictable engine. This ensures every app in the ecosystem displays and processes Markdown the same way.

## **Why CoffeeMD exists**
SnapDockStudio apps rely heavily on Markdown, but using multiple renderers created inconsistencies in formatting, previews, and extensions. CoffeeMD solves this by acting as the **source of truth** for:

- Markdown parsing  
- HTML rendering  
- Tokenization  
- Custom syntax rules  
- SnapDock‑specific extensions  

If SnapDock renders Markdown, CoffeeMD is doing the work.

## **What to expect**
CoffeeMD is currently in early development.  
You can expect:

- A unified API for rendering and parsing  
- Consistent output across all SnapDockStudio apps  
- Support for standard Markdown + SnapDock extensions  
- A small test GUI for validating rendering behavior  
- Regular updates as the ecosystem grows  

CoffeeMD is designed to be stable, predictable, and easy to integrate — the Markdown engine that powers the entire SnapDockStudio platform.

---

## **Proposed file structure**

```
CoffeeMD/
 ├─ src/                ← the actual engine
 │   ├─ core/
 │   ├─ parsers/
 │   ├─ renderers/
 │   ├─ extensions/
 │   └─ index.ts
 ├─ reader/             ← the tiny GUI test app
 │   ├─ index.html
 │   ├─ main.ts
 │   └─ bundle.js
 ├─ tests/
 ├─ package.json
 ├─ README.md
 └─ LICENSE
```

---