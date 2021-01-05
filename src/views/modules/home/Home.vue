<template>
  <div class="home">
    <div class="module-one">
      <button-group></button-group>
    </div>
    <div class="module-two">
      <base-window width="100%" height="90px" headHeight="0px">
        <div slot="body" style="height: 100%;width: 100%">
          <total-number></total-number>
        </div>
      </base-window>
    </div>
    <div class="module-three">
      <base-window width="100%" height="268px" headHeight="0px">
        <div slot="body" style="height: 100%;width: 100%">
          <detail-one></detail-one>
        </div>
      </base-window>
    </div>
    <div class="module-four">
      <base-window width="100%" height="268px" headHeight="0px">
        <div slot="body" style="height: 100%;width: 100%">
          <detail-one></detail-one>
        </div>
      </base-window>
    </div>
    <div class="module-five">
      <base-window width="100%" height="268px" title="全国雷达整体信息概述" icon="iconquanguoleidazhengtixinxigaishu">
        <div slot="body" class="five-body">
          <div class="inner-one">
            <today-todo></today-todo>
          </div>
          <div class="inner-two">
            <detail-window title="健康指数在线监控" width="25%" height="320px">
              <div slot="body" style="height: 100%;width: 100%">
                <health-index></health-index>
              </div>
            </detail-window>
            <detail-window title="雷达报警次数" width="25%" height="320px">
              <div slot="body" style="height: 100%;width: 100%">
                <radar-alarm></radar-alarm>
              </div>
            </detail-window>
            <detail-window title="关键指标异常台站数" width="25%" height="320px">
              <div slot="body" style="height: 100%;width: 100%">
                <key-index></key-index>
              </div>
            </detail-window>
            <detail-window title="业务完成情况" width="25%" height="320px">
              <div slot="body" style="height: 100%;width: 100%">
              </div>
            </detail-window>
          </div>
          <div class="inner-three">
            <detail-window title="环境温湿度异常台站数量" width="25%" height="320px">
              <div slot="body" style="height: 100%;width: 100%">
                <env-abnormal></env-abnormal>
              </div>
            </detail-window>
            <detail-window title="附属设备异常数量" width="25%" height="320px">
              <div slot="body" style="height: 100%;width: 100%">
                <acc-abnormal></acc-abnormal>
              </div>
            </detail-window>
            <detail-window title="远程控制" width="25%" height="320px">
              <div slot="body" style="height: 100%;width: 100%">
              </div>
            </detail-window>
            <detail-window title="痕迹监控" width="25%" height="320px">
              <div slot="body" style="height: 100%;width: 100%">
              </div>
            </detail-window>
          </div>
        </div>
      </base-window>
    </div>
  </div>
</template>

<script>
import TodayTodo from '@/views/modules/home/TodayTodo'
import HealthIndex from '@/views/modules/home/healthIndex'
import RadarAlarm from '@/views/modules/home/radarAlarm'
import KeyIndex from '@/views/modules/home/KeyIndex'
import EnvAbnormal from '@/views/modules/home/envAbnormal'
import AccAbnormal from '@/views/modules/home/accAbnormal'
import ButtonGroup from '@/views/modules/home/buttonGroup'
import TotalNumber from '@/views/modules/home/totalNumber'
import DetailOne from '@/views/modules/home/detailOne'
import DetailWindow from '@/components/detailWindow'
export default {
  name: 'Home', // 复合雷达建立后修改
  components: { DetailWindow, DetailOne, TotalNumber, ButtonGroup, AccAbnormal, EnvAbnormal, KeyIndex, RadarAlarm, HealthIndex, TodayTodo }
}
</script>

<style lang="scss" scoped>
  .home {
    display: flex;
    //height: 944px;
    padding-top: 10px;
    flex-direction: column;
    margin-left: 30px;
    >div:not(:last-child){
      margin-bottom: 15px;
    }
    >div:last-child{
      margin-bottom: 30px;
    }
    .module-five{
      background-color: yellowgreen;
      display: flex;
      flex-direction: column;
      .five-body{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        background-color: slateblue;
        >div{
          display: flex;
        }
        .inner-one{
          width: 100%;
          padding: 20px 0;
          background-color: #FFFFFF;
        }
        .inner-two, .inner-three{
          >div{
            border-top: 1px solid #DBDBDB;
          }
          >div:not(:last-child){
            border-right: 1px solid #DBDBDB;
          }
        }
      }
    }
  }
</style>
