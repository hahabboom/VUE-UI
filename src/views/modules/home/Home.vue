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
      <base-window width="100%" title="全国雷达整体信息概述" icon="iconquanguoleidazhengtixinxigaishu">
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
                <business-completion></business-completion>
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
                <remote-control></remote-control>
              </div>
            </detail-window>
            <detail-window title="痕迹监控" width="25%" height="320px">
              <div slot="body" style="height: 100%;width: 100%">
                <trace-monitor></trace-monitor>
              </div>
            </detail-window>
          </div>
          <div class="inner-four">
            <detail-window title="监控报警次数" width="25%" height="320px">
              <div slot="body" style="height: 100%;width: 100%">
                <radar-alarm-v2></radar-alarm-v2>
              </div>
            </detail-window>
            <detail-window title="环境监控" width="25%" height="320px">
              <div slot="body" style="height: 100%;width: 100%">
                <env-abnormal-v2></env-abnormal-v2>
              </div>
            </detail-window>
            <detail-window title="关键指标" width="25%" height="320px">
              <div slot="body" style="height: 100%;width: 100%">
                <key-index-v2></key-index-v2>
              </div>
            </detail-window>
            <div class="final-box">
              <detail-window title="痕迹监控" width="100%" height="160px">
                <div slot="body" style="height: 100%;width: 100%">
                  <trace-monitor></trace-monitor>
                </div>
              </detail-window>
              <detail-window title="附属设备异常监控" width="100%" height="160px">
                <div slot="body" style="height: 100%;width: 100%">
                  <acc-abnormal-v2></acc-abnormal-v2>
                </div>
              </detail-window>
            </div>
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
import BusinessCompletion from '@/views/modules/home/businessCompletion'
import RemoteControl from '@/views/modules/home/remoteControl'
import TraceMonitor from '@/views/modules/home/traceMonitor'
import RadarAlarmV2 from '@/views/modules/home/radarAlarmV2'
import EnvAbnormalV2 from '@/views/modules/home/envAbnormalV2'
import KeyIndexV2 from '@/views/modules/home/KeyIndexV2'
import AccAbnormalV2 from '@/views/modules/home/accAbnormalV2'
export default {
  name: 'Home', // 复合雷达建立后修改
  components: { AccAbnormalV2, KeyIndexV2, EnvAbnormalV2, RadarAlarmV2, TraceMonitor, RemoteControl, BusinessCompletion, DetailWindow, DetailOne, TotalNumber, ButtonGroup, AccAbnormal, EnvAbnormal, KeyIndex, RadarAlarm, HealthIndex, TodayTodo }
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
        >div{
          display: flex;
        }
        .inner-one{
          width: 100%;
          padding: 20px 0;
          background-color: #FFFFFF;
        }
        .inner-two, .inner-three, .inner-four{
          >div{
            border-top: 1px solid #DBDBDB;
          }
          >div:not(:last-child){
            border-right: 1px solid #DBDBDB;
          }
        }
        .final-box{
          display: flex;
          flex-direction: column;
          width: 25%;
          height: 100%;
          >div:first-child{
            border-bottom: 1px solid #DBDBDB;
          }
        }
      }
    }
  }
</style>
