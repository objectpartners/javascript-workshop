# Testing

---

## Jest

Made by Facebook

Current best-practice testing tool

---

### Building Blocks

Each accepts an anonymous function containing additional blocks or test logic

| Block                                        | Use                                                     |
| -------------------------------------------- | ------------------------------------------------------- |
| `describe`                                   | Group a set of related tests, can be nested             |
| `it`                                         | A single test                                           |
| `before`, `beforeEach`, `afterEach`, `after` | Lifecycle hooks, can be put within any `describe` block |

---

### Example

```javascript
describe("my awesome application", () => {
  describe("on startup", () => {
    it("should do x", () => {
      expect(5).toEqual(5);
    });

    it("should do y", () => {
      expect("abcdef").toContain("abc");
    });
  });
});
```

---

### Mocking

```javascript
it("test of a mock", () => {
  const func = jest.fn(); // Build a mock function
  func(1, 2, 3);
  expect(func).toHaveBeenCalledTimes(1);
  expect(func).toHaveBeenCalledWith(1, 2, 3);
});
```

---

### Data-driven testing

```javascript
describe("numbers", () => {
  [1, 2, 3].forEach(value => {
    it("should be equal to themselves", () => {
      expect(value).toEqual(value);
    });
  });
});
```
