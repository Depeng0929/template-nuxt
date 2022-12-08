<template>
  <div>
    <div i-twemoji:waving-hand text-4xl inline-block animate-bounce />
    <h3 class="text-base font-500">
      Hi,
    </h3>
    <div text-xl>
      {{ a }}!
    </div>

    <div>
      <NuxtLink
        class="btn m-3 text-sm"
        to="/"
      >
        Back
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
const a = ref('k')
</script>
