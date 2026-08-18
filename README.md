# Vue - The Complete Guide | Learning Monorepo

Tracking progress, exercises, and projects for the Udemy course **[Vue - The Complete Guide (incl. Router & Composition API)](https://www.udemy.com/course/vuejs-2-the-complete-guide/)** by Maximilian Schwarzmüller.

---

## 📖 Overview & Structure

This repository is organized as a framework-agnostic **Nx monorepo** to accommodate the progression of the course:

- **Early Sections (1–5):** Vanilla HTML/JS apps using Vue via CDN.
- **Later Sections (6+):** Full Vue 3 Single Page Applications (SPAs) built with Vite and Single File Components (`.vue`).

All projects reside under `apps/` and share a centralized root configuration, dependency management, and tooling pipeline.

---

## 🛠️ Working with the Monorepo

### 1. Generating New Projects

Scaffold projects based on the section type:

- **Plain HTML/JS / CDN App (Sections 1–5):**
  ```bash
  npx nx g @nx/web:app apps/<app-name> --name=<app-name> --bundler=vite --style=css --linter=none --unitTestRunner=none --e2eTestRunner=none
  ```
  > **💡 TypeScript Typings with CDN:**  
  > For Sections 1–5, Vue is loaded via CDN `<script>` tag in `index.html`. To enable full TypeScript autocomplete and type checking in `main.ts` without runtime bundle overhead, declare the global `Vue` object using root type definitions:
  > ```ts
  > declare const Vue: typeof import('vue');
  > 
  > const { createApp } = Vue;
  > ```

- **Vue 3 SPA App (Section 6+):**
  ```bash
  npx nx g @nx/vue:app sec06-components-intro
  ```

- **Vue 3 Project with Router:**
  ```bash
  npx nx g @nx/vue:app prj-monster-slayer --routing
  ```

- **Shared Library (for shared types, mock data, or utilities):**
  ```bash
  npx nx g @nx/vue:lib shared-ui
  ```

---

### 2. Running, Serving & Building

All applications share identical CLI commands regardless of whether they are vanilla web apps or Vue SPAs:

- **Start Dev Server (Vite):**
  ```bash
  npx nx serve <app-name>
  ```

- **Run Unit Tests (Vitest):**
  ```bash
  npx nx test <app-name>
  ```

- **Build for Production:**
  ```bash
  npx nx build <app-name>
  ```

- **Interactive Workspace Graph:**
  ```bash
  npx nx graph
  ```

---

### 3. Managing Dependencies in Nx

Dependencies are managed centrally at the workspace root, eliminating redundant installs across individual apps:

- **Install runtime packages (e.g., Axios, Pinia):**
  ```bash
  npm install pinia axios
  ```
- **Install dev tools / styling loaders:**
  ```bash
  npm install -D sass
  ```

---

### 4. Updating Nx and Workspace Dependencies

Use the automated migration runner to keep Nx core and plugins up to date:

1. **Generate the migration plan:**
   ```bash
   npx nx migrate latest
   ```
2. **Install updated dependencies:**
   ```bash
   npm install
   ```
3. **Execute automated code/config migrations:**
   ```bash
   npx nx migrate --run-migrations
   ```
4. **Remove migration artifacts:**
   ```bash
   rm migrations.json
   ```
