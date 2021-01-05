<template>
  <nav class="main-top">
    <div class="left">
      <div>
        <div class="name">综合气象观测业务运行信息化平台</div>
        <div class="time">XXXXXXXXXXXXXXXXXXXXXXXXX</div>
      </div>
    </div>
    <div class="right">
      <div class="right-top">
        <div>O</div>
        <div class="name">
          <span>您好</span>
          <span>测试人员</span>
        </div>
      </div>
      <div class="right-bottom">
        <div class="time">21:11</div>
        <div class="date">
          <span>星期三</span>
          <span>2020-06-10</span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { clearLoginInfo } from '@/utils'

export default {
  name: 'main-top',
  props: {
    userMsg: {
      type: Object
    }
  },
  data () {
    return {
      uploadInfo: [],
      alarmList: [],
      userInfo: {
        username: '',
        obj: {
          projectname: '',
          province: '',
          radartype: '',
          stationname: '',
          onlineusers: 0
        }
      }
    }
  },
  watch: {
    userMsg (val) {
      this.userInfo = val
    }
  },
  methods: {
    /* WEBSOCKET_MONITOR 事件监听回调 */
    onWebSocketResult (resp) {
      if (resp.code !== 0) return
      switch (resp.method) {
        case 'fileupload':
          this.refreshUploadState(resp.data)
          break
        case 'onlineusers':
          this.userInfo.obj.onlineusers = resp.data
          break
        case 'alarmInfo':
          this.updateAlarmInfo(resp)
          break
        default:
          if (resp.method.indexOf('login_') !== -1) {
            const token = resp.method.split('_')[1]
            if (token === this.$cookie.get('token')) {
              this.$alert('您的账号在别处登录，您已被迫离线', '提示', {
                confirmButtonText: '确定'
              }).then(() => {
                clearLoginInfo()
                this.$router.push({ name: 'login' })
              }).catch(() => {
              })
            }
          }
      }
    },

    /* 文件上传监控 */
    // 获取文件上传监控数据
    getUploadState () {
      this.$axios.get('/index/fileupload').then(({ data }) => {
        if (data && data.code === 0) this.refreshUploadState(data.data)
      })
    },
    // 文件上传监控数据处理
    refreshUploadState (data) {
      this.uploadInfo = []
      data.list.forEach(item => {
        const uploadItem = {}
        uploadItem.name = item.name.substr(0, 1)
        switch (item.status) {
          case -1:
            uploadItem.status = '无数据'
            uploadItem.stateClass = 'no-data'
            break
          case 0:
            uploadItem.status = ' 正常'
            uploadItem.stateClass = 'success'
            break
          case 1:
            uploadItem.status = ' 异常'
            uploadItem.stateClass = 'error'
            break
        }
        uploadItem.date = item.updateTime.split(' ')[0]
        uploadItem.time = item.updateTime.split(' ')[1].slice(0, 5)
        this.uploadInfo.push(uploadItem)
      })
    },

    /* 告警信息 */
    // 获取告警信息数据
    getAlarmInfo () {
      this.$axios.get('/index/alarmInfo').then(({ data }) => {
        this.updateAlarmInfo(data)
      })
    },
    // 告警信息数据处理
    updateAlarmInfo (data) {
      this.alarmList = []
      data.data.forEach(item => {
        const alarmItem = {}
        alarmItem.alarm_name = item.alarm_name
        alarmItem.alarm_content = item.alarm_content
        alarmItem.id = item.id
        this.alarmList.push(alarmItem)
      })
    },
    // 告警信息详情跳转
    onAlarmClick () {
      if (this.$store.state.common.menuActiveName !== 'pro-alarminfo') {
        this.$event.$emit('gotoView', '故障管理', '故障查询')
      } else {
        this.$alert('当前已处于告警页面，请不要重复操作。', '提示', {
          confirmButtonText: '确定'
        })
      }
    },

    /* 用户注销 */
    logoutHandle () {
      this.$confirm('确定进行 [退出] 操作?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$axios.post('/sys/logout').then(({ data }) => {
          if (data && data.code === 0) {
            clearLoginInfo()
            this.$router.push({ name: 'login' })
          }
        })
      }).catch(() => {
      })
    }
  },
  mounted () {
    // this.getUploadState()
    // this.getAlarmInfo()
    // this.$event.$on('WEBSOCKET_MONITOR', this.onWebSocketResult)
  },
  beforeDestroy () {
    // this.$event.$off('WEBSOCKET_MONITOR', this.onWebSocketResult)
  }
}
</script>

<style lang="scss" scoped>
  .main-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    overflow: hidden;
    background-color: royalblue;
    .left,
    .right {
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    .left{
      padding-left: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      .name{
        font-size: 20px;
      }
    }
    .right{
      width: 160px;
      background-color: seagreen;
      .right-top{
        height: 45%;
        background-color: crimson;
        display: flex;
        .name{
          display: flex;
          flex-direction: column;
        }
      }
      .right-bottom{
        display: flex;
        align-items: center;
        height: 65%;
        .time{
          font-size: 19px;
        }
        .date{
          padding-left: 10px;
          height: 100%;
          width: 100%;
          background-color: skyblue;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
</style>
