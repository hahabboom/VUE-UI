<template>
<!--  雷达报警模块-->
  <div class="alarm-box">
    <div class="top">
      <div v-for="(item ,i) in dataList" :key="i" :class="{active: i === now}">
        <div class="number">{{item.value}}</div>
        <div>{{item.name}}</div>
      </div>
    </div>
    <div class="bottom">
      <div v-for="(item, i) in detailList" :key="i" class="item">
        <div :style="{color: item.color, backgroundColor: item.bgcolor}" class="total">
          <div>{{item.type}}：</div>
          <div>{{item.number}}</div>
        </div>
        <div class="list">
          <div v-for="item2 in item.list" :key="item2">{{item2}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'radarAlarmV2',
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
          color: '#DD4B39',
          bgcolor: 'rgba(221, 75, 57, 0.1)',
          list: ['豫·三门峡', '豫·三门峡', '豫·三门峡', '豫·三门峡', '豫·三门峡', '豫·三门峡', '豫·三门峡', '豫·三门峡']

        },
        {
          type: '严重故障',
          number: '12',
          color: '#F0B557',
          bgcolor: 'rgba(240, 181, 87, 0.1)',
          list: ['豫·三门峡', '豫·三门峡', '豫·三门峡', '豫·三门峡', '豫·三门峡', '豫·三门峡', '豫·三门峡', '豫·三门峡']

        },
        {
          type: '重要故障',
          number: '12',
          color: '#60BE7B',
          bgcolor: 'rgba(96, 190, 123, 0.1)',
          list: ['豫·三门峡', '豫·三门峡', '豫·三门峡', '豫·三门峡', '豫·三门峡', '豫·三门峡', '豫·三门峡', '豫·三门峡']

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
.alarm-box{
  width: 100%;
  height: 100%;
  .top{
    height: 85px;
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
    width: 100%;
    height: calc(100% - 85px);
    display: flex;
    justify-content: space-between;
    padding-bottom: 15px;
    .item{
      width: calc(100% / 3);
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      .total{
        height: 60px;
        width: 110px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #F4F4F4;
        font-size: 12px;
        font-weight: bold;
        margin: 10px 0;
      }
      .list{
        height: calc(100% - 80px);
        display: flex;
        overflow: auto;
        flex-wrap: wrap;
        padding: 0 3px;
        >div{
          width: 50%;
          padding: 10px 0;
          font-size: 12px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #484848;
        }
      }
    }
    .item:not(:last-child){
      border-right: 1px dashed #DBDBDB;
    }
  }
}
</style>
