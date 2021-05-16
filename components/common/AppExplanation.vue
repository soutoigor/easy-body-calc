<template>
  <article>
    <h1 class="explanation-title">
      <slot name="title" />
    </h1>
    <div class="explanation-content">
      <slot name="content" />
    </div>
  </article>
</template>

<style scoped>
.explanation-title {
  @apply text-5xl lg:text-7xl italic font-black;
}

.explanation-content {
  @apply text-xl flex flex-col gap-3 mt-4;
}
</style>
