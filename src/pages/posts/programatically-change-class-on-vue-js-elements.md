---
setup: ''
title: Programatically change class on Vue.js elements
publishdate: 24 Mar 2020
description: Do you want to change a class of some element programatically using Vue.js?
layout: ../../layouts/BlogPost.astro
---

Do you want to change a class of some element programatically using Vue.js?

That is actually a simple task to complete. Let’s imagine that you want to toggle between `dark-mode` and `light-mode` classes. Just use something like `class=“[ lightMode ? ‘light-mode’ : ‘dark-mode’ ]”`.

A full example of this can be seen here:

```vue
<template>
  <div :class="[lightMode ? 'light-mode' : 'dark-mode']">
    <h1>{{ title }}</h1>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    lightMode: Boolean
  }
}
</script>

<style scoped>
.light-mode {
  background-color: #ffffff;
}
.dark-mode {
  background-color: #000000;
}
</style>
```
