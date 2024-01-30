<template>
  <ClientOnly>
    <div>
      <component :is="headerComponentName" />
      <slot />
      <Footer />
    </div>
  </ClientOnly>
</template>

<script setup>
const route = useRoute()

const headerComponentName = computed(() => {
  return route.name === 'buy'
    ? resolveComponent('CheckoutHeader')
    : resolveComponent('Header')
})
</script>
