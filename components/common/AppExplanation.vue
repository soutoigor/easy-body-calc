<template>
  <article>
    <h1 class="text-5xl lg:text-7xl italic font-black">
      <slot name="title" />
    </h1>
    <div class="text-xl flex flex-col gap-3 mt-4">
      <slot name="content" />
    </div>
  </article>
</template>
