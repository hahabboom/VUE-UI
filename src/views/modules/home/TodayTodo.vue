<template>
  <div class="box">
    <div :class="{active: now === index}" v-for="(item, index) in dataList" v-bind:key="index" v-on:click="checkType($event, index)">
      <span class="iconfont" :class="'icon' + item.icon"></span>
      {{item.name}}
      <div class="mark">{{item.value}}</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TodayTodo',
  data () {
    return {
      now: 1,
      dataList: [
        {
          name: '健康指数',
          value: 10,
          icon: 'jiankangzhishu'
        },
        {
          name: '关键性能',
          value: 10,
          icon: 'guanjianxingneng'
        },
        {
          name: '监控警报',
          value: 10,
          icon: 'jiankongbaojing'
        },
        {
          name: '痕迹监控',
          value: 10,
          icon: 'henjijiankong'
        },
        {
          name: '业务过程',
          value: 10,
          icon: 'yewuguocheng'
        },
        {
          name: '器件更换',
          value: 10,
          icon: 'qijiangenghuan'
        },
        {
          name: '机房环境',
          value: 10,
          icon: 'jifanghuanjing'
        },
        {
          name: '附属设备',
          value: 10,
          icon: 'fushushebei'
        },
        {
          name: '远程控制',
          value: 10,
          icon: 'yuanchengkongzhi'
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
  .box{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    >div{
      width: 150px;
      height: 80px;
      background: #F4F4F4;
      border: 1px solid #DDDDDD;
      border-radius: 2px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #666666;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .iconfont{
        font-size: 20px;
        margin-bottom: 10px;
      }
    }
    .active{
      background: #549CF5;
      border: 1px solid #00848A;
      border-radius: 2px;
      color: #FFFFFF;
    }
    .mark{
      position: absolute;
      right: -5px;
      top: -5px;
      //width: 21px;
      height: 18px;
      background: #DD4B39;
      border-radius: 9px;
      font-size: 12px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      padding: 0px 6px;
      color: #FFFFFF;
    }
  }
</style>
