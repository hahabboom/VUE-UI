<template>
  <div class="button-box">
    <div class="left">
      <div :class="nowIndex === i ? 'btn-click' : ''" v-for="(item, i) in btnList" :key="i">
        <span class="iconfont" :class="item.icon"></span>
        <span>{{item.name}}</span>
      </div>
    </div>
    <div class="right">
      <div :class="nowCheck === 0 ? 'btn-check' : ''">应急区域</div>
      <div :class="nowCheck === 1 ? 'btn-check' : ''">编辑应急区域</div>
      <div :class="nowCheck === 2 ? 'btn-check' : ''">可视化大屏展示</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'buttonGroup',
  data () {
    return {
      nowIndex: 0,
      nowCheck: 0,
      btnList: [
        {
          name: '新一代天气雷达',
          icon: 'iconxinyidaitianqileida'
        }, {
          name: '风廓线雷达',
          icon: 'iconfengkuoxianleida'
        }, {
          name: 'X波段天气雷达',
          icon: 'iconXboduantianqileida'
        }, {
          name: '气溶胶激光雷达',
          icon: 'iconqirongjiaojiguangleida'
        }, {
          name: 'X波段相控阵雷达',
          icon: 'iconXboduanxiangkongzhenleida'
        }, {
          name: '毫米波测云雷达',
          icon: 'iconhaomiboceyunleida'
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
.button-box{
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  .left{
    height: 100%;
    width: 60%;
    display: flex;
    justify-content: space-between;
    >div{
      width: 160px;
      height: 100%;
      background: #FFFFFF;
      border: 1px solid #D8D8D8;
      box-shadow: 0px 1px 0px 0px #D9D9D9;
      border-radius: 3px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: #484848;
      .iconfont{
        color: #ADAEC0;
        margin-right: 5px;
      }
    }
    .btn-click{
      background: #549CF5;
      border: 1px solid #00848A;
      border-radius: 3px;
      color: #FFFFFF;
      .iconfont{
        color: #FFFFFF;
      }
    }
  }
  .right{
    height: 100%;
    width: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    >div{
      width: 100px;
      height: 36px;
      background: #FFFFFF;
      border: 1px solid #337AB7;
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #337AB7;
    }
    .btn-check{
      color: #FFFFFF;
      background: #337AB7;
    }
  }
}
</style>
