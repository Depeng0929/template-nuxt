<template>
  <div>
    <div class="i-mdi-pencil" />
    <h3 class="text-base font-500">
      Hi,
    </h3>
    <div text-xl>
      {{ a }}!
    </div>
    <a-button type="primary">
      Primary13
    </a-button>
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
