<template>
  <div class="box">
    <div class="top">
      <div v-for="(item, i) in dataList" :key="i">
        <div class="number" :style="{color: item.color}">{{item.value}}</div>
        <div :style="{color: item.color}">{{item.name}}</div>
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
  name: 'envAbnormal',
  data () {
    return {
      dataList: [
        {
          name: 'xxxxxx',
          value: 12,
          color: '#4A5968'
        },
        {
          name: 'xxxxxx',
          value: 12,
          color: '#DD4B39'
        },
        {
          name: 'xxxxxx',
          value: 12,
          color: '#4A5968'
        },
        {
          name: 'xxxxxx',
          value: 12,
          color: '#4A5968'
        },
        {
          name: 'xxxxxx',
          value: 12,
          color: '#60BE7B'
        },
        {
          name: 'xxxxxx',
          value: 12,
          color: '#60BE7B'
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
  padding: 0 20px;
  .top{
    height: calc(100% - 90px);
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    >div{
      width: calc(100% / 3);
      height: calc(100%/ 3);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #484848;
      .number{
        font-size: 18px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #4A5968;
      }
    }
  }
  .bottom{
    height: 60px;
    width: 100%;
    background-color: #FFECEA;
    border-left: 3px solid #DD4B39;
    >div{
      height: calc(100% / 2);
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: 12px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #DD4B39;
      .link{
        text-decoration: underline;
        color: #337AB7;
      }
    }
  }
}
</style>
