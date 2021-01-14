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
    <div class="bottom">
      <div v-for="(item, i) in msgList" :key="i">
        <div>{{item.time}}</div>
        <div>{{item.province}}·{{item.station}}</div>
        <div>{{item.msg}}</div>
        <a class="link">查看</a>
      </div>
    </div>
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
      ],
      msgList: [
        {
          time: '11:37',
          province: '川',
          station: '成都',
          msg: '有7个关键指标存在异常'
        }, {
          time: '11:37',
          province: '川',
          station: '成都',
          msg: '有7个关键指标存在异常'
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
  padding: 0 10px;
  .top{
    height: calc(100% - 90px);
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
    >div{
      height: calc(100% / 2);
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: 12px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #6AB0B8;
      .link{
        text-decoration: underline;
        color: #337AB7;
      }
    }
  }
}
</style>
