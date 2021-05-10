<template>
  <div class="logo">
    <span class="logo__easy-body">Easy Body</span>
    <span class="logo__calc">Calc</span>
  </div>
</template>

<style scoped>
.logo {
  @apply flex flex-col font-black italic uppercase leading-none;
}

.logo__easy-body {
  @apply text-5xl md:text-8xl tracking-tight;
}

.logo__calc {
  @apply text-7xl text-right md:text-left md:text-9xl text-turbo tracking-wide;
}
</style>
