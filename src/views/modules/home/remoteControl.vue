<template>
  <div class="remote-box">
    <div class="top">
      <div v-for="(item ,i) in dataList" :key="i" :class="{active: i === now}" v-on:click="checkType($event, i)">
        <div class="number">{{item.value}}</div>
        <div>{{item.name}}</div>
      </div>
    </div>
    <div class="bottom">
      <div v-for="(item, i) in detailList" :key="i">
        <span>{{item.value}}</span>
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'remoteControl',
  data () {
    return {
      now: 0,
      dataList: [
        {
          name: '今日控制次数',
          value: '50'
        }, {
          name: '本月控制次数',
          value: '50'
        }, {
          name: '累计控制次数',
          value: '50'
        }
      ],
      detailList: [
        {
          name: '一键开机',
          value: 10
        }, {
          name: '配电柜电源',
          value: 10
        }, {
          name: '伺服加电',
          value: 10
        }, {
          name: 'RDA机柜电源',
          value: 10
        }, {
          name: '发射机低压',
          value: 10
        }, {
          name: '发射机高压',
          value: 10
        }, {
          name: '精密空调',
          value: 10
        }, {
          name: '发电机',
          value: 10
        }
      ]
    }
  },
  props: {},
  watch: {},
  methods: {
    checkType (e, index) {
      console.log(index)
      if (index !== this.now) {
        this.now = index
      }
    }
  },
  computed: {},
  created () {
  },
  mounted () {
  }
}
</script>

<style scoped lang="scss">
.remote-box{
  width: 100%;
  height: 100%;
  .top{
    height: 90px;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    >div{
      border-bottom: 1px solid #DBDBDB;
      width: calc(100% / 3);
      height: 100%;
      font-size: 12px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #4A5968;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .number{
        font-size: 24px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #4A5968;
      }
    }
    .active {
      border-bottom: 3px solid #549CF5;
      .number{
        color: #549CF5;
      }
    }
    .active:after{
      content: '';
      position: absolute;
      bottom: 2px;
      height: 1px;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-bottom: 5px solid #549CF5;
    }
  }
  .bottom{
    height: calc(100% - 90px);
    width: 100%;
    font-size: 12px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #484848;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    >div{
      width: 86px;
      height: 66px;
      background: #F4F4F4;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      >span:nth-child(1){
        font-weight: bold;
        font-size: 14px;
      }
    }
  }
}
</style>
