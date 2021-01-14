<template>
<!--  附属设备模块-->
  <div class="acc-box">
    <div v-for="(item, i) in accData" :key="i" class="item-box">
      <div><span class="iconfont" :class="item.icon"></span>{{item.name}}</div>
      <div class="inner-two">
        <span><span class="abnormal">{{item.abnormal}}</span>/{{item.total}}</span>
      </div>
      <div>异常/监控总数</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'accAbnormalV2',
  data () {
    return {
      accData: [{
        name: 'UPS',
        abnormal: 12,
        icon: 'iconups',
        total: 120
      }, {
        name: '空调',
        abnormal: 12,
        icon: 'iconkongtiao',
        total: 120
      }, {
        name: '发电机',
        abnormal: 12,
        icon: 'iconfadianji',
        total: 120
      }
      ]
    }
  },
  props: {},
  watch: {},
  methods: {},
  computed: {},
  created () {
  },
  mounted () {
  }
}
</script>

<style scoped lang="scss">
.acc-box{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #484848;
  .item-box{
    width: calc(100% / 3);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .iconfont{
      color: #6AB0B8;
      margin-right: 10px;
    }
    .inner-two{
      font-size: 20px;
      padding: 10px 0;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: #484848;
      .abnormal{
        color: #DD4B39;
      }
    }
  }
}
</style>
