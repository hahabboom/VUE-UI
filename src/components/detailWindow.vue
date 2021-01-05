<template>
<!--  内层带标题的模板-->
  <div class="box" :style="getPanelStyle()">
    <div class="boxinner">
      <div class="windowTop" v-if="headHeight !== '0px'">
        <div class="topInner">
          <div class="name">{{title}}</div>
          <div class="detail" v-if="detailFlag">详情<span class="iconfont iconxiangyou"></span></div>
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
  name: 'detailWindow',
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
    detailFlag: {
      type: Boolean,
      default: true
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
    background: #FFFFFF;
    .windowTop{
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
        .name{
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: bold;
          color: #484848;
          text-align: left;
          margin-left: 10px;
        }
        .detail{
          width: 56px;
          height: 20px;
          background: #FFFFFF;
          border: 1px solid #DBDBDB;
          border-radius: 3px;
          font-size: 12px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #484848;
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          right: 10px;
          .iconfont{
            font-size: 14px;
            color: #5E6871;
            padding-top: 3px;
          }
        }
      }
      .topInner:before{
        content: '';
        height: 14px;
        border: 2px solid #337AB7;
      }
    }
    .slot-body{
      padding: 0 10px;
    }
  }
}
</style>
