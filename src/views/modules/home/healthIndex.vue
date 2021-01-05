<template>
  <div style="height: 100%; width: 100%">
    <div class="top">
      <div v-for="(item, i) in healthData" :class="activeGauge === i ? 'gauge' : ''" :key="i">
        <div class="title">{{item.value}}台</div>
        <div :id="`health-${i}`" class="chart"></div>
        <div class="score">
          <span>{{item.name}}<span class="iconfont iconyiwen"></span></span>
        </div>
      </div>
    </div>
    <div class="table">
      <div class="item" v-for="(item, i) in list" :key="i">
        <div>{{item.province}}·{{item.station}}：</div>
        <div style="font-weight: bold">{{item.value}}分</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'healthIndex',
  data () {
    return {
      activeGauge: 0,
      healthData: [
        {
          name: '低于75分(含)',
          value: 25
        },
        {
          name: '75-85分',
          value: 25
        },
        {
          name: '86-99分',
          value: 25
        },
        {
          name: '100分',
          value: 25
        }
      ],
      list: [
        {
          province: '川',
          station: '成都',
          value: '68'
        },
        {
          province: '川',
          station: '成都',
          value: '68'
        },
        {
          province: '川',
          station: '成都',
          value: '68'
        },
        {
          province: '川',
          station: '成都',
          value: '68'
        },
        {
          province: '川',
          station: '成都',
          value: '68'
        },
        {
          province: '川',
          station: '成都',
          value: '68'
        },
        {
          province: '川',
          station: '成都',
          value: '68'
        },
        {
          province: '川',
          station: '成都',
          value: '68'
        }
      ]
    }
  },
  props: {},
  watch: {},
  methods: {
    // 绘制仪表图
    drawHealth (type) {
      var myChartOne = this.$echarts.init(document.getElementById('health-' + type))
      // 指定图表的配置项和数据
      var colorRegionRateOne = 80
      var chartTemp = {}
      switch (type) {
        case 3:
          chartTemp.data = [{
            value: colorRegionRateOne
          }]
          chartTemp.color = '#60BE7B'
          break
        case 2:
          chartTemp.data = [{
            value: colorRegionRateOne
          }]
          chartTemp.color = '#F0B557'
          break
        case 1:
          chartTemp.data = [{
            value: colorRegionRateOne
          }]
          chartTemp.color = '#DD4B39'
          break
        case 0:
          chartTemp.data = [{
            value: colorRegionRateOne
          }]
          chartTemp.color = '#7D0000'
          break
      }
      var optionOne = {
        title: {
          text: chartTemp.data[0].value + '%',
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
            value: 66,
            name: '占比',
            itemStyle: {
              normal: {
                color: chartTemp.color,
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
            value: 100 - 66,
            itemStyle: {
              normal: {
                color: '#E1E8EE'
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
    },

    // 值不同，颜色不同
    getStateColor (value) {
      if (value === 100) {
        return { color: '#17FFD1' }
      } else if (value >= 86 && value < 100) {
        return { color: '#F0FF4C' }
      } else if (value > 76 && value < 86) {
        return { color: '#E8AA61' }
      } else if (value <= 75) {
        return { color: '#FE4200' }
      }
    }
  },
  computed: {},
  created () {
  },
  mounted () {
    this.drawHealth(0)
    this.drawHealth(1)
    this.drawHealth(2)
    this.drawHealth(3)
  }
}
</script>

<style scoped lang="scss">
.top{
  width: 100%;
  height: 155px;
  display: flex;
  position: relative;
  flex-direction: row;
  cursor: pointer;
  >div{
    padding: 7px 0;
    height: 100%;
    width: calc(100% / 4);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .title{
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: #4A5968;
      text-align: center;
    }
    .chart{
      margin: 10px 0;
      height: 60%;
      width: 75%;
    }
    .score{
      font-weight:400;
      color:rgba(171,207,255,1);
      font-size: 12px;
      font-family: Microsoft YaHei;
      color: #4A5968;
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
.table{
  width: 100%;
  height: calc(100% - 155px);
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  .item{
    display: flex;
    width: 25%;
    height: 45px;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #484848;
  }
}
</style>
