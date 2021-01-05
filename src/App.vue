<!--
<template>
  <transition name="fade">
    <router-view></router-view>
  </transition>
</template>
-->
<template>
  <div class="website-container">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
  .website-container {
    position: relative;
    min-width: 1468px;
    height: 100vh;
    background: $base-bg;
  }
</style>
