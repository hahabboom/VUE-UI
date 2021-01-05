<template>
  <div class="box">
    <div class="left">
      <div v-for="(item ,i) in dataList" :key="i" :class="{active: i === now}">
        <div class="number">{{item.value}}</div>
        <div>{{item.name}}</div>
      </div>
    </div>
    <div class="right">
      <div v-for="(item, i) in detailList" :key="i" :style="{color: item.color}">
        <div class="icon" :style="{background: item.color}"></div>
        <div>{{item.type}}：</div>
        <div>{{item.number}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'radarAlarm',
  data () {
    return {
      now: 0,
      dataList: [
        {
          name: '当前报警次数',
          value: '50'
        }, {
          name: '本月报警次数',
          value: '50'
        }, {
          name: '累计报警次数',
          value: '50'
        }
      ],
      detailList: [
        {
          type: '重要故障',
          number: '12',
          color: '#DD4B39'
        },
        {
          type: '严重故障',
          number: '12',
          color: '#F0B557'
        },
        {
          type: '重要故障',
          number: '12',
          color: '#60BE7B'
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
  padding: 20px 0;
  display: flex;
  .left{
    height: 100%;
    width: 32%;
    position: relative;
    >div{
      border-right: 1px solid #DBDBDB;
      height: calc(100% / 3);
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
      border-right: 3px solid #549CF5;
      .number{
        color: #549CF5;
      }
    }
    .active:after{
      content: '';
      position: absolute;
      right: 2px;
      height: 1px;
      border-top: 4px solid transparent;
      border-bottom: 4px solid transparent;
      border-right: 5px solid #549CF5;
    }
  }
  .right{
    width: 68%;
    height: 100%;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    >div{
      height: 65px;
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      background: #F4F4F4;
      padding: 0 15px;
      .icon{
        width: 10px;
        height: 10px;
        background: #DD4B39;
      }
      div:nth-child(2){
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
      }
      div:nth-child(3){
        font-size: 24px;
        font-family: Microsoft YaHei;
        font-weight: bold;
      }
    }

  }
}
</style>
