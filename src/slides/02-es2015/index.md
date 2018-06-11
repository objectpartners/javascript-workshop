# ES2015 / ES6

---

Since 2015, ECMAScript gets a new iteration each year of new features

---

These features have been _fantastic_ for JavaScript development

---

## Features

---

### `import` and `export`

#### `import`

```js
import { foo } from "./foo";

const result = foo();
```

```js
import React from "react";
```

#### `export`

```js
export const foo = () => "bar";
```

---

### `let` and `const`

Block-scoped keywords for declaring variables

---

#### `let`

```js
for (let i = 0; i < 5; i++) {
  // do something
}
```

#### `const`

```js
const result = doSomething();

result = "100"; // error
```

---

Prefer `const` unless explicitly going to re-assign or mutate

---

### `class`

Sugar over existing prototype-based inheritance, but still nice!

---

```js
var Animal = function(species) {
  this.species = species;
};

Animal.prototype.greet = function() {
  return "I am a " + this.species;
};
```

#### `vs`

```js
class Animal {
  constructor(species) {
    this.species = species;
  }

  greet() {
    return `I am a ${this.species}`;
  }
}
```

---

### Arrow functions

A way to create an inline function declaration that does not inherit a lexical scope, i.e. does not create a new `this` scope

#### `() => {}`

---

#### Anonymous function

```js
var btn = document.getElementById("reset");

btn.addEventListener("click", function() {
  console.log("I have been clicked");
});
```

#### Arrow function

```js
btn.addEventListener("click", () => {
  console.log("I have been clicked");
});
```

---

#### `var self = this;` === ☠️

```js
function Timer() {
  this.seconds = 0;
  var self = this;

  setInterval(function() {
    self.seconds += 1;
  }, 1000);
}
```

```js
function Timer() {
  this.seconds = 0;

  setInterval(() => {
    this.seconds += 1;
  }, 1000);
}
```

---

### Template strings

Multi-line strings and variable replacement, solved!

#### Backticks (```)

---

#### Old way

```js
var multiLineStr = "I am a multi-line\n" + "string\n" + "and another line";

var varReplacement = multiLineStr + "\nAnother line";
```

#### New hotness

```js
const multiLineStr = `I am a multi-line
string
and another line`;

const varReplacement = `${multiLineStr}
Another line`;
```

---

### Destructuring

Easy way to retrieve nested values with a clean, intuitive syntax

---

```js
var obj = { hello: "world", other: "prop", anotherOne: true };

var hello = obj.hello;
var other = obj.other;
var anotherOne = obj.anotherOne;
```

#### vs

```js
const obj = { hello: "world", other: "prop", anotherOne: true };
const { hello, other, anotherOne } = obj;
```

---

### Rest

A way to retrieve remaining items in an array

### Spread

A way to "apply" an iterable result set

---

#### Rest

```js
const arr = ["red", "green", "blue"];

const [red, ...rest] = arr; // first = 'red', rest = ['green', 'blue']
```

#### Spread

```js
function sum(x, y, x) {
  return x + y + z;
}

const nums = [10, 20, 30];

sum(...nums); // 60
```

---

### Default arguments

Simple way to default `undefined` arguments passed to a function

```js
function greet(name, greeting = "Hello") {
  return `${greeting} ${name}!`;
}

greet("World"); // Hello World!
```
