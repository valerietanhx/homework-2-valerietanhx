[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/oDdEOZgz)
# CS+SG Education Team: Homework 2

## Assignment

This assignment is pretty simple. Just convert your portfolio that you made in your first homework assignment into Next.js instead of vanilla HTML, CSS, and JS.

You must also add some functionality to your portfolio using the useState hook, some button(s), and anything else that you'd like.

By the way, here is how you use CSS in Next.js:

**page.js or a component**

```js
import styles from "@/app/styles.module.css"; //make sure this is actually the path to the CSS file that you want to use. you can have multiple css files if they are in different directories OR named different things

export default function Page() {
  return (
    <div className={styles.hello}>
      <h1>Hello, World!</h1>
    </div>
  );
}
```

**styles.module.css**

```css
.hello {
  padding: 24px;
  // whatever else
}
```
