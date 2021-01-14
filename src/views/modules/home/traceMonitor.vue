<template>
<!--  痕迹监控-->
  <div class="trace-box">
    <div class="header"><div v-for="item in header" :key="item">{{item}}</div></div>
    <div class="body" v-for="(item, i) in accData" :key="i">
      <div>{{item.name}}</div>
      <div>{{item.value1}}</div>
      <div>{{item.value2}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'traceMonitor',
  data () {
    return {
      header: ['参数类型', '变更台站数量', '变更累积次数'],
      accData: [
        {
          name: '适配参数',
          value1: '12台',
          value2: '12台'
        }, {
          name: '雷达软件版本',
          value1: '12台',
          value2: '12台'
        }, {
          name: '控制器软件版本',
          value1: '12台',
          value2: '12台'
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
.trace-box{
  width: 100%;
  height: 100%;
  font-size: 12px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #484848;
  .header{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 30px;
    >div{
      width: calc(100% / 3);
      padding: 7px 0;
      text-align: center;
    }
  }
  .body{
    height: calc((100% - 30px)/3);
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    >div{
      padding: 7px 0;
      width: calc(100% / 3);
      text-align: center;
    }
    >div:not(:first-child){
      font-weight: bold;
    }
  }
}
</style>
