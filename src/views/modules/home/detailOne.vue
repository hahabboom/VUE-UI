<template>
  <div class="one-box">
    <div class="top">
      <div class="name">暴风区域（一级）：</div>
      <div class="pro-item" v-for="(item, i) in provinceList" :key="i">{{item}}</div>
    </div>
    <div class="bottom">
      <div class="one">
        <detail-window width="100%" title="雷达概述" :detailFlag=false>
          <div slot="body" style="height: 100%;width: 100%">
            <div class="one-top">
              <div>雷达总数：10台</div>
              <div style="background-color:#DD4B39;">异常雷达：10台</div>
            </div>
            <div class="one-bottom">
              <div>川·成都</div>
              <div>川·成都</div>
              <div>川·成都</div>
              <div>川·成都</div>
              <div>川·成都</div>
            </div>
          </div>
        </detail-window>
      </div>
      <div class="two">
        <detail-window width="100%" title="雷达健康指数" :detailFlag=false>
          <div slot="body" style="height: 100%;width: 100%">
            <div class="two-box">
              <div class="two-left">
                <div v-for="(item, i) in rdaHealth" :key="i" :class="healthIndex === i ? 'health-click': ''">
                  <div>{{item.name}}/占比：<span style="font-weight: bold">{{item.number}}/{{item.ratio}}</span></div>
                </div>
              </div>
              <div class="two-right">
                <div v-for="(item, i) in healthList" :key="i">
                  {{item.province}}·{{item.station}}：
                  <span style="font-weight: bold">{{item.value}}分</span>
                </div>
              </div>
            </div>
          </div>
        </detail-window>
      </div>
      <div class="three">
        <detail-window width="100%" title="雷达故障告警" :detailFlag=false>
          <div slot="body" style="height: 100%;width: 100%">
            <div class="three-box">
              <div class="three-top">
                <div class="three-btn">当前告警：<span style="color: #DD4B39">100次</span></div>
              </div>
              <div class="three-bottom">
                <div class="three-left">
                  <div :class="faultIndex === i ? 'item-click' : ''" v-for="(item, i) in faultTotal" :key="i">
                    <div class="item-inner">
                      <div class="icon" :style="{background: item.color}"></div>
                      <div>{{item.name}}：{{item.number}}/{{item.ratio}}</div>
                    </div>
                  </div>
                </div>
                <div class="three-right">
                  <div v-for="(item, i) in faultList" :key="i">{{item}}</div>
                </div>
              </div>
            </div>
          </div>
        </detail-window>
      </div>
      <div class="four">
        <detail-window width="100%" title="雷达关键指标" :detailFlag=false>
          <div slot="body" style="height: 100%;width: 100%">
            <div class="four-box">
              <div class="top-btn">指标异常雷达：<span class="number">4台</span></div>
              <div class="bottom-list">
                <div v-for="(item, i) in keyList" :key="i">{{item}}</div>
              </div>
            </div>
          </div>
        </detail-window>
      </div>
      <div class="five">
        <detail-window width="100%" title="业务完成情况" :detailFlag=false>
          <div slot="body" style="height: 100%;width: 100%">
            <div class="five-box">
              <div class="week">
                <div class="name">
                  <div style="font-size: 14px; font-weight: bold; padding-bottom: 10px">50次</div>
                  <div>上周维护</div>
                </div>
                <div class="detail">
                  <div v-for="item in week" :key="item" class="item">
                    <div style="font-size: 14px;font-weight: bold;padding-bottom: 7px">{{item.value}}个</div>
                    <div>{{item.name}}</div>
                  </div>
                </div>
              </div>
              <div class="week">
                <div class="name" style="background: #60BE7B;">
                  <div style="font-size: 14px; font-weight: bold; padding-bottom: 10px">50次</div>
                  <div>上月维护</div>
                </div>
                <div class="detail">
                  <div v-for="item in week" :key="item" class="item">
                    <div style="font-size: 14px;font-weight: bold;padding-bottom: 7px">{{item.value}}个</div>
                    <div>{{item.name}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </detail-window>
      </div>
    </div>
  </div>
</template>

<script>
import DetailWindow from '@/components/detailWindow'
export default {
  name: 'detailOne',
  components: { DetailWindow },
  data () {
    return {
      provinceList: ['四川省', '云南省', '贵州省', '湖南省', '湖北省'],
      healthIndex: 0, // 健康指数当前
      rdaHealth: [
        {
          name: '需维修',
          ratio: '50%',
          number: '5'
        }, {
          name: '需维护',
          ratio: '50%',
          number: '5'
        }, {
          name: '良好',
          ratio: '50%',
          number: '5'
        }, {
          name: '健康',
          ratio: '50%',
          number: '5'
        }
      ],
      healthList: [
        {
          province: '豫',
          station: '三门峡',
          value: '45'
        }, {
          province: '豫',
          station: '三门峡',
          value: '45'
        }, {
          province: '豫',
          station: '三门峡',
          value: '45'
        }, {
          province: '豫',
          station: '三门峡',
          value: '45'
        }, {
          province: '豫',
          station: '三门峡',
          value: '45'
        }, {
          province: '豫',
          station: '三门峡',
          value: '45'
        }, {
          province: '豫',
          station: '三门峡',
          value: '45'
        }, {
          province: '豫',
          station: '三门峡',
          value: '45'
        }
      ], // 健康指数列表
      faultTotal: [
        {
          name: '严重',
          number: 10,
          ratio: '10%',
          color: '#DD4B39'
        }, {
          name: '重要',
          number: 10,
          ratio: '10%',
          color: '#F0B557'
        }, {
          name: '一般',
          number: 10,
          ratio: '10%',
          color: '#60BE7B'
        }
      ], // 雷达故障告警
      faultIndex: 0, // 雷达故障当前
      faultList: ['豫·三门峡', '豫·三门峡', '豫·三门峡', '豫·三门峡', '豫·三门峡', '豫·三门峡', '豫·三门峡', '豫·三门峡', '豫·三门峡', '豫·三门峡', '豫·三门峡', '豫·三门峡'], // 雷达故障list
      keyList: ['豫·三门峡', '豫·三门峡', '豫·三门峡', '豫·三门峡', '豫·三门峡', '豫·三门峡', '豫·三门峡', '豫·三门峡', '豫·三门峡', '豫·三门峡', '豫·三门峡', '豫·三门峡'], // 雷达关键指标list
      week: [
        {
          name: '未完成台站数',
          value: 12
        }, {
          name: '未进行台站数',
          value: 12
        }, {
          name: '正常台站数',
          value: 12
        }, {
          name: '异常台站数',
          value: 12
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
.one-box{
  width: 100%;
  height: 100%;
  .top{
    height: 45px;
    width: 100%;
    border-bottom: 1px solid #DBDBDB;
    display: flex;
    align-items: center;
    padding-left: 20px;
    .name{
      font-size: 12px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: #484848;
    }
    .pro-item{
      width: 100px;
      height: 26px;
      border: 1px solid #DDDDDD;
      border-radius: 4px;
      font-size: 12px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #4A5968;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 20px;
    }
  }
  .bottom{
    height: calc(100% - 45px);
    width: 100%;
    display: flex;
    justify-content: space-between;
    .one, .two, .three, .four{
      width: 18%;
      height: 100%;
      border-right: 1px solid #DBDBDB;
    }
    .one{
      .one-top{
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        >div{
          width: 125px;
          height: 52px;
          background: #6AB0B8;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 12px;
          font-family: Microsoft YaHei;
          font-weight: bold;
          color: #FFFFFF;
        }
      }
      .one-bottom{
        width: 100%;
        height: calc(100% - 80px);
        border-top: 1px dashed #DBDBDB;
        display: flex;
        flex-wrap: wrap;
        >div{
          height: calc(100% / 3);
          width: calc(100% / 3);
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 12px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #484848;
        }
      }
    }
    .two{
      .two-box{
        height: 100%;
        width: 100%;
        padding: 10px 0;
        display: flex;
        justify-content: space-between;
        .two-left{
          width: 57%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          position: relative;
          border-right: 1px solid #DBDBDB;
          >div{
            height: calc(100% / 4);
            width: 100%;
            //background-color: hotpink;
            display: flex;
            align-items: center;
            >div{
              width: 140px;
              height: 36px;
              background: #FFFFFF;
              border: 1px solid #DDDDDD;
              font-size: 12px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #484848;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }
          .health-click {
            font-weight: bold;
            color: #FFFFFF;
            border-right: 3px solid #549CF5;
            >div{
              font-weight: bold;
              color: #FFFFFF;
              background: #6AB0B8;
              border: none;
            }
          }
          .health-click:after{
            content: '';
            position: absolute;
            right: 2px;
            height: 1px;
            border-top: 4px solid transparent;
            border-bottom: 4px solid transparent;
            border-right: 5px solid #549CF5;
          }
        }
        .two-right{
          width: 43%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: left;
          overflow: auto;
          >div{
            font-size: 12px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #484848;
            padding-left: 10px;
          }
          :not(:last-child){
            margin-bottom: 15px;
          }
        }
      }
    }
    .three-box{
      height: 100%;
      width: 100%;
      .three-top{
        padding: 10px 0;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .three-btn{
          width: 267px;
          height: 28px;
          background: #F4F4F4;
          border: 1px solid #DDDDDD;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 12px;
          font-family: Microsoft YaHei;
          font-weight: bold;
          color: #484848;
        }
      }
      .three-bottom{
        height: calc(100% - 48px);
        width: 100%;
        display: flex;
        padding-bottom: 10px;
        .three-left{
          width: 53%;
          height: 100%;
          display: flex;
          flex-direction: column;
          border-right: 1px solid #DBDBDB;
          position: relative;
          >div{
            height: calc(100% / 3);
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            .item-inner{
              height: 100%;
              width: 115px;
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 12px;
              font-family: Microsoft YaHei;
              font-weight: bold;
              color: #484848;
              .icon{
                width: 10px;
                height: 10px;
                margin-right: 7px;
              }
            }
            .item-inner{
              border-bottom: 1px dashed #DBDBDB;
            }
          }
          .item-click{
            border-right: 3px solid #549CF5;
          }
          .item-click:after{
            content: '';
            position: absolute;
            right: 2px;
            height: 1px;
            border-top: 4px solid transparent;
            border-bottom: 4px solid transparent;
            border-right: 5px solid #549CF5;
          }
        }
        .three-right{
          width: 53%;
          height: 100%;
          display: flex;
          overflow: auto;
          justify-content: center;
          flex-wrap: wrap;
          >div{
            width: calc(100% / 2);
            font-size: 12px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #484848;
            text-align: center;
          }
          >div:not(:last-child){
            margin-bottom: 10px;
          }
        }
      }
    }
    .four-box{
      width: 100%;
      height: 100%;
      padding: 5px 15px 0;
      .top-btn{
        width: 100%;
        height: 52px;
        margin-bottom: 15px;
        background: #F4F4F4;
        border: 1px solid #DDDDDD;
        font-size: 12px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #484848;
        display: flex;
        justify-content: center;
        align-items: center;
        .number{
          color: #DD4B39;
          font-size: 16px;
        }
      }
      .bottom-list{
        height: calc(100% - 72px);
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        overflow: auto;
        border-top: 1px dashed #DBDBDB;
        >div{
          width: calc(100% / 3);
          padding: 20px 0;
          text-align: center;
          font-size: 12px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #484848;
        }
      }
    }
    .five{
      width: 28%;
      height: 100%;
      .five-box{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .week{
          width: 100%;
          height: 72px;
          display: flex;
          .name{
            width: 80px;
            height: 72px;
            background: #6AB0B8;
            font-size: 12px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #FFFFFF;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .detail{
            width: calc(100% - 80px);
            height: 100%;
            background: #FFFFFF;
            border: 1px solid #DBDBDB;
            display: flex;
            .item{
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              width: calc(100% / 4);
              height: 100%;
              font-size: 12px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #484848;
            }
          }
        }
      }
    }
  }
}
</style>
