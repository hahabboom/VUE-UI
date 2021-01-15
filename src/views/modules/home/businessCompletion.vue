<template>
<!--  业务完成情况-->
  <div class="business-box">
    <div class="top">
      <div v-for="(item, i) in businessData" :class="activeGauge === i ? 'gauge' : ''" :key="i"  v-on:click="changeGauge(i)">
        <div :id="`health-${i + 4}`" class="chart"></div>
        <div class="score">
          <span>{{item.name}}<span class="iconfont iconyiwen"></span></span>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div v-for="(item, i) in businessList" :key="i" class="item">
        <div><span style="font-weight: bold; font-size: 20px">{{ item.value }}</span>个</div>
        <div>{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'businessCompletion',
  data () {
    return {
      activeGauge: 0,
      businessData: [
        {
          name: '上周维护',
          value: 25
        },
        {
          name: '上月维护',
          value: 25
        },
        {
          name: '年维护/年巡检',
          value: 25
        }
      ],
      businessList: [
        {
          name: '未完成台站',
          value: 15
        },
        {
          name: '未进行台站数',
          value: 15
        },
        {
          name: '正常台站数',
          value: 15
        },
        {
          name: '异常台站数',
          value: 15
        }
      ]
    }
  },
  props: {},
  watch: {},
  methods: {
    // 绘制圆环图
    drawHealth (type) {
      var myChartOne = this.$echarts.init(document.getElementById('health-' + type))
      // 指定图表的配置项和数据
      const m = this.businessData[type - 4].value
      var optionOne = {
        title: {
          text: m + '%\n' + '完成率',
          x: 'center',
          y: 'center',
          textStyle: {
            fontWeight: 'normal',
            color: '#4A5968',
            fontSize: '12'
          }
        },
        legend: {
          show: false
        },
        series: [{
          name: 'circle',
          type: 'pie',
          clockWise: true,
          radius: ['60%', '90%'],
          itemStyle: {
            normal: {
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            }
          },
          hoverAnimation: false,
          data: [{
            value: m,
            name: '占比',
            itemStyle: {
              normal: {
                color: '#F0B557',
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              }
            }
          }, {
            name: '剩余',
            value: 100 - m,
            itemStyle: {
              normal: {
                color: '#549CF5'
              }
            }
          }]
        }]
      }
      myChartOne.setOption(optionOne)
    },
    // 切换仪表图下方表格数据
    changeGauge (index) {
      if (index !== this.activeGauge) {
        this.activeGauge = index
      }
      this.tableData = this.healthData[this.activeGauge].list
    }
  },
  computed: {},
  created () {
  },
  mounted () {
    this.drawHealth(4)
    this.drawHealth(5)
    this.drawHealth(6)
  }
}
</script>

<style scoped lang="scss">
.business-box{
  width: 100%;
  height: 100%;
  .top{
    width: 100%;
    height: 160px;
    display: flex;
    position: relative;
    flex-direction: row;
    cursor: pointer;
    >div{
      height: 100%;
      width: calc(100% / 3);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .chart{
        margin: 10px 0;
        height: 65%;
        width: 75%;
      }
      .score{
        font-size: 12px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #484848;
        .iconfont{
          font-size: 12px;
          margin-left: 3px;
          color: #6AB0B8;
        }
      }
    }
    .gauge{
      border-bottom: 3px solid #549CF5;
      display: flex;
      justify-content: center;
      align-items: center;
      &:after{
        content: "";
        position: absolute;
        bottom: 2px;
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 6px solid #549CF5;
      }
    }
  }
  .top:after{
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: #DBDBDB;
  }
  .bottom{
    height: calc(100% - 160px);
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #484848;
    .item{
      width: 86px;
      height: 90px;
      background: #F4F4F4;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
}
</style>
