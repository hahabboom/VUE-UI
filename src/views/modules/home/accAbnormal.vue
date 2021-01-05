<template>
  <div class="box">
    <div class="top">
      <div class="top-one">
        <div class="item1">UPS</div>
        <div class="item2">空调</div>
        <div class="item3">发电机</div>
      </div>
      <div class="top-two">
        <div v-for="(item, i) in dataList" :key="i">
          <div>{{item.name}}：</div>
          <div style="font-weight: bold">{{item.number}}</div>
        </div>
      </div>
    </div>
    <div class="bottom"></div>
  </div>
</template>

<script>
export default {
  name: 'accAbnormal',
  data () {
    return {
      dataList: [
        {
          name: '接入数量',
          number: 12
        }, {
          name: '接入数量',
          number: 12
        }, {
          name: '接入数量',
          number: 12
        }, {
          name: '接入数量',
          number: 12
        }, {
          name: '接入数量',
          number: 12
        }, {
          name: '接入数量',
          number: 12
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
.box{
  width: 100%;
  height: 100%;
  padding: 15px 10px;
  .top{
    height: calc(100% - 60px);
    width: 100%;
    padding: 10px 0;
    .top-one{
      display: flex;
      justify-content: space-between;
      >div{
        height: 74px;
        width: 112px;
        background-color: #6AB0B8;
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .item2{
        background-color: #549CF5;
      }
      .item3{
        background-color: #60BE7B;
      }
    }
    .top-two{
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      height: calc(100% - 80px);
      >div{
        width: calc(100% / 3);
        height: calc(100% / 2);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #61636F;
      }
    }
  }
  .bottom{
    width: 100%;
    height: 60px;
    background: #F4F4F4;
    border-left: 3px solid #6AB0B8;
  }
}
</style>
