<template>
  <main class="main-content">
    <!-- 主入口标签页 e -->
    <!--<transition name="slide-fade">-->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!--</transition>-->
  </main>
</template>

<script>
export default {
  computed: {
    documentClientHeight: {
      get () {
        return this.$store.state.common.documentClientHeight
      }
    },
    menuActiveName: {
      get () {
        return this.$store.state.common.menuActiveName
      },
      set (val) {
        this.$store.commit('common/updateMenuActiveName', val)
      }
    },
    siteContentViewHeight () {
      var height = this.documentClientHeight - 50 - 30 - 2
      return { minHeight: height + 'px' }
    }
  },
  methods: {}
}
</script>

<style>
  /* 动画设置 */
  .slide-fade-enter-active {
    transition: all .3s ease 0.2s;
  }

  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter,
  .slide-fade-leave-to {
    opacity: 0;
  }
</style>
