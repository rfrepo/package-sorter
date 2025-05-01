# 📦 Package Sorter

A TypeScript utility function that sorts packages into the correct stack based on their **dimensions** and **mass**, following robotic automation rules used in Thoughtful’s automation factory.

## 🚀 Features

- Classifies packages as `STANDARD`, `SPECIAL`, or `REJECTED`
- Includes robust type checking and validation
- Unit tested with Jest
- Written in modern TypeScript (ES6+)

---

## 📐 Classification Rules

| Condition                      | Classification |
|-------------------------------|----------------|
| Not bulky & not heavy         | STANDARD       |
| Bulky or heavy (but not both) | SPECIAL        |
| Bulky **and** heavy           | REJECTED       |

### Definitions:

- A package is **bulky** if:
  - Its **volume** (`width × height × length`) is ≥ `1,000,000 cm³`, **or**
  - Any **dimension** is ≥ `150 cm`
- A package is **heavy** if:
  - Its **mass** is ≥ `20 kg`

---

## 📦 Installation

```bash
git clone https://github.com/your-username/package-sorter.git
cd package-sorter
npm install
```

---

## 🔧 Build & Run

### Build the TypeScript project:

```bash
npm run build
```

### Run tests:

```bash
npm test
```

---

## ✨ Usage Example

```ts
import { sort } from './dist/sort';

console.log(sort(100, 100, 100, 10)); // Outputs: "STANDARD"
console.log(sort(200, 100, 50, 10));  // Outputs: "SPECIAL"
console.log(sort(200, 100, 50, 25));  // Outputs: "REJECTED"
```

---

## 🧪 Testing

Tests are written using [Jest](https://jestjs.io/). Run all tests with:

```bash
npm test
```

Test cases include:

- All classification paths (STANDARD, SPECIAL, REJECTED)
- Invalid input handling (non-numeric, NaN)

---

## 🛠 Project Structure

```
project-root/
├── src/
│   ├── sort.ts          # Main function
│   └── sort.test.ts     # Unit tests
├── dist/                # Compiled JS output
├── tsconfig.json
├── package.json
└── README.md
```

---

## 📄 License

MIT License — feel free to use and adapt.
