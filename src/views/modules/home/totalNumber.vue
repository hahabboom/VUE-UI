<template>
  <div class="total-box">
    <div class="left">
      <div v-for="(item, i) in totalList" :key="i" class="item">
        <div class="icon" :style="{'background': item.color}">
          <span class="iconfont" :class="item.icon"></span>
        </div>
        <div>
          <div class="top">
            <div class="number" :style="{color: item.color}">{{item.value}}</div>
            <div v-if="item.detailFlag" class="detail">查看</div>
          </div>
          <div>{{item.name}}</div>
        </div>
      </div>
    </div>
    <div class="right">
      <div v-for="(item, i) in arriveData" :key="i">
        <div class="name">{{item.name}}</div>
        <div class="item">
          <span>应到</span>
          <span>{{item.should}}</span>
        </div>
        <div class="item">
          <span>实到</span>
          <span>{{item.fact}}</span>
        </div>
        <div class="item">
          <span>到报率</span>
          <span>{{item.ratio}}</span>
        </div>
        <div class="detail">查看</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'totalNumber',
  data () {
    return {
      totalList: [
        {
          name: '雷达总数',
          value: 216,
          color: '#2DB7F5',
          detailFlag: false,
          icon: 'iconleidazongshu'
        }, {
          name: '业务考核雷达数量',
          value: 216,
          color: '#F08457',
          detailFlag: true,
          icon: 'iconyewukaoheleidashuliang'
        }, {
          name: '雷达在线数量',
          value: 216,
          color: '#6AB0B8',
          detailFlag: true,
          icon: 'iconleidazaixianshuliang'
        }
      ],
      arriveData: [
        {
          name: '今日数据',
          should: 2000,
          fact: 1888,
          ratio: '100%'
        }, {
          name: '累计数据',
          should: 2000,
          fact: 1888,
          ratio: '100%'
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
.total-box{
  height: 100%;
  width: 100%;
  //background-color: sandybrown;
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  .left{
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    font-size: 14px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #484848;
    border-right: 1px solid #DBDBDB;
    .item{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: calc(100% / 3);
      .icon{
        width: 48px;
        height: 48px;
        background: #2DB7F5;
        border-radius: 50%;
        color: #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 22px;
        margin-right: 20px;
      }
      >div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .top{
          display: flex;
          align-items: center;
          .number{
            font-size: 24px;
            font-weight: bold;
            padding-right: 6px;
          }
          .detail{
            width: 40px;
            height: 18px;
            background: #FFFFFF;
            border: 1px solid #337AB7;
            border-radius: 4px;
            font-size: 12px;
            font-weight: 400;
            color: #337AB7;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }
  }
  .right{
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    >div{
      display: flex;
      height: calc(100% / 2);
      width: 100%;
      justify-content: space-around;
      align-items: center;
      .name{
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #549CF5;
      }
      .item{
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #484848;
        span:last-child{
          padding-left: 30px;
          padding-right: 50px;
          font-weight: bold;
        }
      }
      .item:nth-child(2), .item:nth-child(3){
        border-right: 1px solid #DBDBDB;
      }
      .detail{
        width: 50px;
        height: 24px;
        background: #FFFFFF;
        border: 1px solid #337AB7;
        border-radius: 4px;
        font-size: 12px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #337AB7;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
