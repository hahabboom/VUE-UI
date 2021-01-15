<template>
<!--  环境温湿度模块-->
  <div class="env-box">
    <div class="left">
      <div v-for="(item, i) in iconList" :key="i" class="item" :class="{active: i === now}" v-on:click="checkType($event, i)">
        <div>
          <span class="iconfont" :class="item.icon"></span>
          {{item.name}}
        </div>
      </div>
    </div>
    <div class="right">
      <div class="inner-top">
        <div class="header">
          <hr>
          <span class="slice"><span class="iconfont iconwendu"></span>温度</span>
        </div>
        <div class="content">
          <div v-for="(item, i) in tempList" :key="i">
            <span class="number">{{item.value}}</span>
            <span>{{item.name}}</span>
          </div>
        </div>
      </div>
      <div class="inner-bottom">
        <div class="header">
          <hr>
          <span class="slice"><span class="iconfont iconwendu"></span>温度</span>
        </div>
        <div class="content">
          <div v-for="(item, i) in tempList" :key="i">
            <span class="number">{{item.value}}</span>
            <span>{{item.name}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'envAbnormalV2',
  data () {
    return {
      now: 0,
      iconList: [
        {
          name: '机房',
          icon: 'iconjifang'
        },
        {
          name: '天线罩',
          icon: 'icontianxianzhao'
        },
        {
          name: '发射机',
          icon: 'iconfasheji'
        }
      ],
      tempList: [
        {
          name: '严重超标台站数',
          value: 12
        }, {
          name: '超标台站数',
          value: 12
        }, {
          name: '正常台站数',
          value: 12
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
.env-box{
  width: 100%;
  height: 100%;
  padding-top: 10px;
  padding-bottom: 15px;
  display: flex;
  .left{
    width: 105px;
    height: 100%;
    .item{
      height: calc(100% / 3);
      width: 100%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      border-right: 1px solid #DBDBDB;
      >div{
        width: 80px;
        height: 74px;
        background: #FFFFFF;
        border: 1px solid #DBDBDB;
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #484848;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .iconfont{
          font-size: 20px;
          color: #60BE7B;
        }
      }
    }
    .active {
      border-right: 3px solid #549CF5;
      >div{
        background-color: #60BE7B;
        color: #FFFFFF;
        border: none;
        .iconfont{
          color: #FFFFFF;
        }
      }
    }
    .active:after{
      content: '';
      position: absolute;
      right: 0;
      border-top: 4px solid transparent;
      border-bottom: 4px solid transparent;
      border-right: 5px solid #549CF5;
    }
  }
  .right{
    height: 100%;
    width: calc(100% - 105px);
    border-right: 1px solid #DBDBDB;
    border-top: 1px solid #DBDBDB;
    border-bottom: 1px solid #DBDBDB;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .inner-top{
      width: 100%;
      height: 100%;
      padding: 0 5px;
      .header{
        position: relative;
        display: flex;
        justify-content: center;
        height: 50px;
        hr {
          width: 180px;
          margin-top: 23px;
          border: none;
          border-top: 1px solid #DBDBDB;
          color: #DBDBDB;
          overflow: visible;
          text-align: center;
          height: 20px;
        }
        .slice{
          position: absolute;
          top: 15px;
          background-color: #fff;
          padding: 0 15px;
          font-size: 12px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: rgba(72, 72, 72, 0.4);
        }
      }
      .content{
        width: 100%;
        height: calc(100% - 50px);
        border-bottom: 1px dashed #DDDDDD;
        display: flex;
        justify-content: space-between;
        align-items: center;
        >div{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-size: 12px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #484848;
          .number{
            font-size: 20px;
            font-weight: bold;
          }
        }
      }
    }
    .inner-bottom{
      height: 100%;
      width: 100%;
      padding: 0 5px;
      .header{
        position: relative;
        display: flex;
        justify-content: center;
        hr {
          width: 180px;
          margin-top: 23px;
          border: none;
          border-top: 1px solid #DBDBDB;
          color: #DBDBDB;
          overflow: visible;
          text-align: center;
          height: 20px;
        }
        .slice{
          position: absolute;
          top: 15px;
          background-color: #fff;
          padding: 0 10px;
          font-size: 12px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: rgba(72, 72, 72, 0.4);
        }
      }
      .content{
        width: 100%;
        height: calc(100% - 50px);
        display: flex;
        justify-content: space-between;
        align-items: center;
        >div{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-size: 12px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #484848;
          .number{
            font-size: 20px;
            font-weight: bold;
          }
        }
      }
    }
  }
}
</style>
