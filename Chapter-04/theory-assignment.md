# Theory Assignment
### 1. Is JSX mandatory for React?
JSX is not a requirement for using React. Using React without JSX is especially convenient when you don’t want to set up compilation in your build environment.

Each JSX element is just syntactic sugar for calling React.createElement(component, props, ...children). So, anything you can do with JSX can also be done with just plain JavaScript.

### 2. Is ES6 mandatory for React?
It is not mandatory but is highly recommendable. The latest projects created on React rely a lot on ES6.

### 3. `{TitleComponent}` vs `{<TitleComponent />}` vs `{<TitleComponent></TitleComponent>}` in JSX.


### 4. How can I write comments in JSX?

### 5. What is <React.Fragment></React.Fragment> and <></> ?
Wrap elements in <Fragment> to group them together in situations where you need a single element. Grouping elements in Fragment has no effect on the resulting DOM; it is the same as if the elements were not grouped. The empty JSX tag <></> is shorthand for <Fragment></Fragment> in most cases.

### 6. What is Virtual DOM?


### 7. What is Reconciliation in React?

### 8. What is React Fiber?

### 9. Why we need keys in React? When do we need keys in React?
The "key" in React is used to uniquely identify elements in a list of components or elements rendered by a loop. It helps React efficiently update and re-render only the necessary components when the list changes.

### 10 Can we use index as keys in React?

### 11 What is props in React? Ways to

### 12 What is a Config Driven UI?
