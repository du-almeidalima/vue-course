# Section 2: Dynamic Styling in Vue

A concise summary of dynamic classes and inline style binding techniques explored in Section 2 with Vue 3.

---

## 📌 Dynamic Styling Techniques

### 1. Dynamic Inline Styles (`:style`)
Binds dynamic CSS styles directly using JavaScript object notation:
```html
<div :style="{ borderColor: selectedBox === 'A' ? 'red' : '#ccc' }"></div>
```
- Accepts camelCase (`borderColor`) or kebab-case in quotes (`'border-color'`).
- Best for styles driven by continuous values (e.g., width percentages, RGB values, coordinates).

---

### 2. Dynamic Classes: Object Syntax (`:class`)
Toggles CSS classes dynamically based on boolean conditions:
```html
<div :class="{ active: selectedBox === 'A' }"></div>
```
- The class (`active`) is applied when the condition is truthy and removed when falsy.

---

### 3. Static and Dynamic Class Merging
Vue automatically merges regular static `class` attributes with dynamic `:class` bindings on the same element:
```html
<div class="demo" :class="{ active: selectedBox === 'A' }"></div>
```
- `demo` is always applied; `active` is toggled conditionally.

---

### 4. Dynamic Classes via Computed Properties
Offloads complex conditional logic from the template into clean, reusable JavaScript:
```html
<div class="demo" :class="boxAClasses"></div>
```
```typescript
computed: {
  boxAClasses() {
    return { active: this.selectedBox === 'A' };
  }
}
```

---

### 5. Dynamic Classes: Array Syntax
Allows combining multiple classes, string variables, ternary expressions, and conditional objects in one array:
```html
<div :class="['demo', { active: selectedBox === 'C' }]"></div>
```

---

## ⚖️ Styling Approaches Comparison

| Approach | Syntax Example | Best Use Case |
| :--- | :--- | :--- |
| **Inline Style Object** | `:style="{ color: textColor }"` | Dynamic numeric/calculated values (e.g. coordinates, progress bar width) |
| **Inline Class Object** | `:class="{ active: isActive }"` | Simple one-off conditional class toggles |
| **Computed Class Object** | `:class="elementClasses"` | Complex multi-condition class logic keeping templates lean |
| **Class Array Syntax** | `:class="['base-class', dynamicClass]"` | Combining static classes, variable class names, and conditional objects |

---

## 🚀 Running the Project

```bash
npx nx serve section-2-dynamic-styling
```
