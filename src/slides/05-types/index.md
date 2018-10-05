# Types

---

### You can do whatever you want in JS

Good....also not good

Some devs prefer more rules, and larger baselines can be hard to maintain

---

## Flow

```javascript
// square.js

// @flow
function square(n: number): number {
  return n * n;
}

square("2"); // Error!
```

---

## Typescript

```typescript
// square.ts

const square = (n: number): number => {
  return n * n;
};

square("2"); // Error!
```

---

### Use what works for your team

Types, no types, or a mix
