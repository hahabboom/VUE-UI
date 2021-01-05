<template>
<!--  外层带阴影的模板-->
  <div class="box" :style="getPanelStyle()">
    <div class="boxinner">
      <div class="windowTop" v-if="headHeight !== '0px'">
        <div class="topInner">
          <div>
            <span class="iconfont" :class="icon"></span>
            {{title}}
          </div>
          <div class="sprit"></div>
        </div>
      </div>
      <div class="slot-body" :style="getBodyStyle()">
        <slot name="body"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseWindow',
  data () {
    return {}
  },
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    },
    headHeight: {
      type: String,
      default: '35px'
    },
    title: {
      type: String,
      default: '标题'
    },
    icon: {
      type: String
    }
  },
  watch: {},
  methods: {
    getPanelStyle () {
      return { width: this.width, height: this.height }
    },
    getBodyStyle () {
      return { height: `calc(100% - ${this.headHeight})` }
    },
    getHeadStyle () {
      return { height: `${this.headHeight}` }
    }
  },
  computed: {},
  created () {},
  mounted () {}
}
</script>

<style lang="scss" scoped>
.box{
  height: 300px;
  width: 412px;
  position: relative;
  /*border: 1px solid #4364A8;*/
  /*box-shadow: 0px 0px 10px #4364A8 inset;*/
  /*!*-webkit-clip-path: polygon(100% 0, 100% 87%, 88% 100%, 11% 100%, 0 88%, 0 0);*!*/
  /*!*clip-path: polygon(100% 0, 100% calc(100% - 38px), calc(100% - 38px) 100%, 38px 100%, 0 calc(100% - 38px), 0 0);*!*/
  .boxinner{
    width: 100%;
    height: 100%;
    box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.4);
    background: #FFFFFF;
    .windowTop{
      border-bottom: 1px solid #DBDBDB;
      margin: 0 10px;
      height: 35px;
      .topInner{
        height: 100%;
        width: 100%;
        color: #484848;
        padding: 10px 0;
        display: flex;
        justify-content: left;
        align-items: center;
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        >div{
          margin-left: 10px;
        }
        .iconfont{
          color: #616161;
          font-size: 12px;
        }
        .sprit{
          width: 3px;
          height: 24px;
          margin-top: 3px;
        }
      }
      .topInner:before{
        content: '';
        height: 14px;
      }
    }
    .slot-body{
    }
  }
}
</style>
