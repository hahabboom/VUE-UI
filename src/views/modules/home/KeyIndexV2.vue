<template>
<!--  关键指标模块-->
  <div class="key-box">
    <div v-for="(item, i) in dataList" :key="i" class="item" :style="{width: item.width}">
      <div class="number">{{item.value}}</div>
      <div>{{item.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KeyIndexV2',
  data () {
    return {
      dataList: [
        {
          name: '发射机输出功率',
          value: 12,
          width: '125px'
        },
        {
          name: '天线波束指向精度',
          value: 12,
          width: '125px'
        },
        {
          name: '接收系统动态范围',
          value: 12,
          width: '125px'
        },
        {
          name: '回拨强度离线定标误差',
          value: 12,
          width: '125px'
        },
        {
          name: '速度测量误差',
          value: 12,
          width: '125px'
        },
        {
          name: '速度谱宽测量误差',
          value: 12,
          width: '125px'
        },
        {
          name: '噪声系数',
          value: 12,
          width: '90px'
        },
        {
          name: '相位噪声',
          value: 12,
          width: '90px'
        },
        {
          name: 'Sycal 变化量',
          value: 12,
          width: '90px'
        },
        {
          name: '天线控制精度',
          value: 12,
          width: '90px'
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
.key-box{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  padding: 15px 0;
  >div{
    height: 70px;
    display: flex;
    flex-direction: column;
    border: 1px solid #DDDDDD;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #484848;
    .number{
      font-size: 20px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: #4A5968;
    }
  }
}
</style>
