# Advanced JS

---

## Promises

A way to manage asynchronous interactions

```javascript
return doAsyncThing() // Returns a promise
  .then(result => {
    // do stuff
    return result2;
  })
  .then(result => {
    // do more stuff
    return result3;
  })
  .catch(error => {
    // error handling
  });
```

---

## async / await

Syntactic sugar atop Promises

```javascript
const fetcher = async function() {
  const result = await doAsyncThing();
  // do stuff
  return result;
};
```

---

## Getter / Setter

```javascript
class Dto {
  keyValue = "a";

  get key() {
    return this.keyValue;
  }
  set key(val) {
    this.keyValue = val;
  }
}
```
