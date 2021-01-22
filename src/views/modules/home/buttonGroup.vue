<template>
  <!--  首页按钮组-->
  <div class="button-box">
    <div class="left">
      <div :class="nowIndex === i ? 'btn-click' : ''" v-for="(item, i) in btnList" :key="i" v-on:click="checkType(i)">
        <span class="iconfont" :class="item.icon"></span>
        <span>{{item.name}}</span>
      </div>
    </div>
    <div class="right">
      <div v-on:click="showArea">应急区域
        <span class="iconfont" :class="showAreaFlag ? 'iconxiangshang': 'iconxiangxia'"></span>
      </div>
      <div v-on:click="showDialog">编辑应急区域</div>
      <a href="">
        可视化大屏展示
        <span></span>
      </a>
    </div>
    <el-dialog
      class="dialog"
      title="应急区域设置"
      :show-close=false
      :close-on-click-modal=false
      :close-on-press-escape=false
      :visible.sync="dialogVisible"
      width="900px">
      <div slot="title" class="dialog-head">
        <span>应急区域设置</span>
        <div class="btn">
          <div @click="addRegion()" class="add-btn">
            <span class="iconfont icontianjia"></span>
            添加应急区域
          </div>
          <span class="iconfont iconshanchu1" @click="closeDialog()"></span>
        </div>
      </div>
      <div class="body">
        <div v-if="choosePart.length !== 0" class="isdata" >
          <div class="item" v-for="(item, index) in choosePart" :key="index">
            <div class="normal" :class="{'edit-active': editFlag && index === nowRow}">
              <el-input maxlength="6" v-model="item.name" :readonly="!editFlag"></el-input>
            </div>
            <div class="box">
              <div class="box-item" :class="{'boxedit-active': editFlag && index === nowRow}" v-for="(item2, index2) in item.list" v-bind:key="index2">
                {{item2.name}}
                <span class="iconfont iconshanchu" v-show="editFlag && index === nowRow" @click="removeProvince($event, index)"></span>
              </div>
              <div v-show="index === nowRow && addFlag" class="add-part">
                <el-select v-model="addvalue" placeholder="请选择省份...">
                  <el-option
                    v-for="item in provinceName"
                    :key="item.pro_id"
                    :label="item"
                    :value="item.pro_id">
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="tool">
              <div v-for="item in toolBox" :class="{'btn-active': item.id === btn && index === nowRow, 'not-allow': item.id !== btn && index === nowRow && notAllow}" :key="item.id" @click="(first || (item.id === btn && index === nowRow)) && changeBtn($event, item.id, index)">
                <span class="iconfont" :class="item.id === btn && index === nowRow ? 'iconqueding' : item.icon"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="nodata" v-else>
          <div></div>
          <div>目前暂无应急区域，请添加...</div>
        </div>
      </div>
    </el-dialog>
    <el-dialog
      class="add-dialog"
      title="添加应急区域"
      :show-close=false
      :close-on-click-modal=false
      :close-on-press-escape=false
      :before-close="closeInnerDialog"
      :visible.sync="innerdialogVisible"
      width="900px">
      <div slot="title" class="dialog-head">
        <span>应急区域设置</span>
        <div class="btn">
          <span class="iconfont iconshanchu1" @click="closeInnerDialog()"></span>
        </div>
      </div>
      <div class="add-body">
        <div class="one">
          <div>应急区域名称</div>
          <div>
            <el-input v-model="reginName" placeholder="请输入应急区域名称..." maxlength="6" @change="checkRepeatedName($event)"></el-input>
            <div>注：最大6个汉字</div>
          </div>
        </div>
        <div class="two">
          <div>应急区域（多选）</div>
          <div>
            <div v-for="(item, index) in provinceName" v-bind:key="index" @click="addProvince(item, index)" :class="provinceTemp.includes(item) ? 'province_check' : ''">{{item}}</div>
          </div>
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button @click="closeInnerDialog()">取消</el-button>
          <el-button @click="chooseProvince()">确认</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'buttonGroup',
  data () {
    return {
      nowIndex: 0,
      nowCheck: 0,
      dialogVisible: false,
      innerdialogVisible: false,
      btn: -1,
      reginName: null,
      nowRow: -1,
      options: [
        {
          value: '重庆',
          label: '重庆'
        }, {
          value: '青海',
          label: '青海'
        }, {
          value: '甘肃',
          label: '甘肃'
        }, {
          value: '湖北',
          label: '湖北'
        }
      ],
      addvalue: '',
      nameTxt: '应急区域',
      toolBox: [
        {
          name: '',
          icon: 'icontianjia',
          id: 0
        }, {
          name: '',
          icon: 'iconbianji',
          id: 1
        }, {
          name: '',
          icon: 'iconshanchu1',
          id: 2
        }
      ],
      addFlag: false,
      editFlag: false,
      deleteFlag: false,
      provinceTemp: [],
      provinceName: ['河北省', '山西省', '辽宁省', '吉林省', '黑龙江省', '江苏省', '浙江省',
        '安徽省', '福建省', '江西省', '山东省', '河南省', '湖北省', '湖南省', '广东省', '海南省',
        '四川省', '贵州省', '云南省', '陕西省', '甘肃省', '青海省', '台湾省', '内蒙古自治区',
        '广西壮族自治区', '西藏自治区', '宁夏回族自治区', '新疆维吾尔自治区', '北京市', '天津市', '上海市', '重庆市', '香港特别行政区', '澳门特别行政区'],
      choosePart: [
        {
          id: 72,
          list: [
            {
              eme_id: 72,
              name: '浙江省',
              pro_id: 7,
              value: 0
            },
            {
              eme_id: 72,
              name: '重庆市',
              pro_id: 2,
              value: 0
            }
          ],
          name: '应急区域一',
          status: 0
        },
        {
          id: 72,
          list: [
            {
              eme_id: 72,
              name: '浙江省',
              pro_id: 7,
              value: 0
            },
            {
              eme_id: 72,
              name: '重庆市',
              pro_id: 2,
              value: 0
            }
          ],
          name: '应急区域一',
          status: 0
        }
      ],
      errorMsg: '',
      dropData: [],
      initRatioTimer: null,
      notAllow: false,
      first: true,
      systemType: null, // 系统级别
      systemName: null, // 系统名称
      btnList: [
        {
          name: '新一代天气雷达',
          icon: 'iconxinyidaitianqileida'
        }, {
          name: '风廓线雷达',
          icon: 'iconfengkuoxianleida'
        }, {
          name: 'X波段天气雷达',
          icon: 'iconXboduantianqileida'
        }, {
          name: '气溶胶激光雷达',
          icon: 'iconqirongjiaojiguangleida'
        }, {
          name: 'X波段相控阵雷达',
          icon: 'iconXboduanxiangkongzhenleida'
        }, {
          name: '毫米波测云雷达',
          icon: 'iconhaomiboceyunleida'
        }
      ],
      showAreaFlag: true // 应急区域标志
    }
  },
  props: {},
  watch: {},
  methods: {
    // 类型切换
    checkType (index) {
      if (index !== this.nowIndex) {
        this.nowIndex = index
      }
    },
    // 控制应急区域是否显示
    showArea () {
      this.showAreaFlag = !this.showAreaFlag
      this.$event.$emit('showAreaFlag', this.showAreaFlag)
    },
    // 编辑应急区域弹窗显示
    showDialog () {
      this.dialogVisible = true
    },
    // 编辑应急区域弹窗隐藏
    closeDialog () {
      this.dialogVisible = false
    },
    // 检查应急区域重名
    checkRepeatedName (e) {
      if (this.isChineseChar(e)) {
        this.choosePart.some(item => {
          if (item.name === e) {
            this.$message({
              showClose: true,
              message: '该应急区域名称已存在',
              type: 'error'
            })
            this.reginName = ''
          }
        })
      } else {
        this.$message({
          showClose: true,
          message: '应急区域名称仅能输入中文英文数字',
          type: 'error'
        })
      }
    },
    // 应急区域显示
    regionshow () {
      this.dialogVisible = true
      this.first = true
      this.$axios({
        url: 'RadarMonitor/monitor/eme/select',
        method: 'get'
      }).then(({ data }) => {
        if (data.code === 0 && data.msg === 'success') {
          this.choosePart = data.data
        }
      })

      this.$axios({
        url: 'RadarMonitor/monitor/eme/province',
        method: 'get'
      }).then(({ data }) => {
        if (data.code === 0 && data.msg === 'success') {
          this.provinceName = data.data
        }
      })
      this.$refs.chooseButton.init()
    },
    // 添加应急区域关闭
    closeInnerDialog () {
      this.dialogVisible = true
      this.innerdialogVisible = false
    },
    changeBtn (e, index, part) {
      this.first = !this.first
      this.nowRow = part
      if (index !== this.btn) {
        this.btn = index
      } else {
        this.btn = -1
        if (this.addFlag === true) {
          if (this.addvalue !== '') {
            var tempadd = this.provinceName.filter((item) => {
              return item.pro_id === this.addvalue
            })
            var result = this.choosePart[part].list.some(item => {
              if (item.pro_id === tempadd[0].pro_id) {
                return true
              }
            })
            if (!result) {
              this.choosePart[part].list.push(tempadd[0])
              this.updateRegion(part)
            } else {
              this.$message({
                showClose: true,
                message: '该应急区域中已存在此省份',
                type: 'error'
              })
              this.addvalue = ''
              this.addFlag = true
            }
          }
        }
      }
      // 添加方法
      if (index === 0) {
        this.addvalue = ''
        this.addFlag = !this.addFlag
        this.editFlag = false
        this.deleteFlag = false
        if (this.addFlag) {
          this.notAllow = true
        } else {
          this.notAllow = false
        }
      }
      // 编辑方法
      if (index === 1) {
        if (this.editFlag) {
          this.updateRegion(part)
        }
        this.editFlag = !this.editFlag
        this.addFlag = false
        this.deleteFlag = false
        if (this.editFlag) {
          this.notAllow = true
        } else {
          this.notAllow = false
        }
      }
      // 删除方法
      if (index === 2) {
        this.deleteFlag = !this.deleteFlag
        this.addFlag = false
        this.editFlag = false
        this.$confirm('请再次确认是否删除该应急区域？', '温馨提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.deleteRegion(part)
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
        // this.deleteFlag = false
      }
    },
    // 移除省份
    removeProvince (e, index) {
      var now = e.target.parentNode.innerText
      var tempremove = this.choosePart[index].list.findIndex((item) => {
        return item.name === now
      })
      this.choosePart[index].list.splice(tempremove, 1)
    },
    // 添加应急区域
    addRegion () {
      this.reginName = null
      this.provinceTemp = []
      this.innerdialogVisible = true
      this.dialogVisible = false
    },
    // 添加应急区域--选择省份
    addProvince (item, index) {
      if (!this.provinceTemp.includes(item)) {
        this.provinceTemp.push(item)
      } else {
        this.provinceTemp.splice(this.provinceTemp.indexOf(index), 1)
      }
    },
    // 添加新的应急区域
    chooseProvince () {
      if (this.reginName === '' || this.reginName === null) {
        this.$message({
          message: '请输入应急区域名称',
          type: 'error'
        })
      } else if (this.provinceTemp.length === 0) {
        this.$message({
          message: '请选择应急区域所含省份',
          type: 'error'
        })
      } else {
        if (this.isChineseChar(this.reginName)) {
          var st = []
          this.provinceTemp.forEach((item) => {
            st.push(item.pro_id)
          })
          st = st.join(',')
          this.$axios({
            url: 'RadarMonitor/monitor/eme/insert',
            method: 'get',
            params: {
              name: this.reginName,
              proIds: st
            }
          }).then(({ data }) => {
            if (data.code === 0 && data.msg === 'success') {
              this.$message({
                showClose: true,
                message: '添加成功',
                type: 'success'
              })
              this.regionshow()
              this.innerdialogVisible = false
              this.dialogVisible = true
            }
          })
        } else {
          this.$message({
            showClose: true,
            message: '应急区域名称仅能输入中文英文数字',
            type: 'error'
          })
        }
      }
    },
    // 验证字符输入
    isChineseChar (str) {
      var regu = /^[A-Z0-9\u4E00-\u9FA5]+$/gi
      var re = new RegExp(regu)
      if (re.test(str)) {
        return true
      } else {
        return false
      }
    },
    // 更新应急区域
    updateRegion (part) {
      if (this.isChineseChar(this.choosePart[part].name)) {
        var st = []
        this.choosePart[part].list.forEach((item) => {
          st.push(item.pro_id)
        })
        st = st.join(',')
        this.$axios({
          url: 'RadarMonitor/monitor/eme/update',
          method: 'get',
          params: {
            id: this.choosePart[part].id,
            name: this.choosePart[part].name,
            proIds: st
          }
        }).then(({ data }) => {
          if (data.code === 0 && data.msg === 'success') {
            this.$message({
              showClose: true,
              message: '修改成功',
              type: 'success'
            })
            this.$event.$emit('regionData', this.choosePart[part].list)
            this.$event.$emit('regionName', this.choosePart[part].name)
          }
        })
      } else {
        this.$message({
          showClose: true,
          message: '应急区域名称仅能输入中文英文数字',
          type: 'error'
        })
        this.$axios({
          url: 'RadarMonitor/monitor/eme/select',
          method: 'get'
        }).then(({ data }) => {
          if (data.code === 0 && data.msg === 'success') {
            this.choosePart = data.data
          }
        })
      }
    },
    // 删除应急区域
    deleteRegion (part) {
      this.$axios({
        url: 'RadarMonitor/monitor/eme/delete',
        method: 'get',
        params: {
          id: this.choosePart[part].id
        }
      }).then(({ data }) => {
        if (data.code === 0 && data.msg === 'success') {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
          this.regionshow()
          this.nowRow = -1
        }
      })
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
.button-box{
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  .left{
    height: 100%;
    width: 60%;
    display: flex;
    justify-content: space-between;
    >div{
      width: 160px;
      height: 100%;
      background: #FFFFFF;
      border: 1px solid #D8D8D8;
      box-shadow: 0px 1px 0px 0px #D9D9D9;
      border-radius: 3px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: #484848;
      cursor: pointer;
      .iconfont{
        color: #ADAEC0;
        margin-right: 5px;
      }
    }
    >div:hover{
      background: #549CF5;
      border: 1px solid #00848A;
      border-radius: 3px;
      color: #FFFFFF;
      .iconfont{
        color: #FFFFFF;
      }
    }
  }
  .right{
    height: 100%;
    width: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    >div{
      width: 100px;
      height: 36px;
      background: #FFFFFF;
      border: 1px solid #337AB7;
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #337AB7;
      cursor: pointer;
      .iconxiangshang, .iconxiangxia{
        font-size: 8px;
        padding-left: 10px;
      }
    }
    >div:hover{
      color: #FFFFFF;
      background: #337AB7;
    }
    a{
      padding: 0 10px;
      height: 36px;
      display: block;
      background: #FFFFFF;
      border: 1px solid #337AB7;
      border-radius: 4px;
      font-size: 12px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #337AB7;
      text-decoration: none;
      cursor: pointer;
      text-align: center;
      line-height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      span{
        display: block;
        width: 0;
        height: 0;
        margin-left: 10px;
        border-top: 5px solid transparent;
        border-left: 5px solid #337AB7;
        border-bottom: 5px solid transparent;
      }
    }
    a:hover{
      color: #FFFFFF;
      background: #337AB7;
      span{
        border-left: 5px solid #FFFFFF;
      }
    }
    .btn-check{
      color: #FFFFFF;
      background: #337AB7;
    }
  }
  /deep/ .el-dialog__header{
    padding: 0;
  }
  /deep/ .el-dialog__body{
    padding: 0 30px;
  }
  ///deep/ .el-dialog__headerbtn .el-dialog__close{
  //  color: #FFFFFF;
  //}
  .dialog{
    .dialog-head{
      width: 100%;
      height: 50px;
      background: #337AB7;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #FFFFFF;
      padding: 20px;
      .btn{
        font-size: 12px;
        padding: 0 20px;
        position: absolute;
        right: 0;
        display: flex;
        cursor: pointer;
        .add-btn{
          padding: 0 20px;
          border-right: 1px solid #7EADD6;
          margin-right: 20px;
        }
      }
    }
    .body{
      width: 100%;
      .isdata{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        .item{
          width: 100%;
          display: flex;
          padding: 20px 0;
          justify-content: space-between;
          align-items: center;
          .normal{
            width: 128px;
            margin-right: 10px;
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            margin-bottom: 5px;
            border: none;
            ::v-deep .el-input__inner{
              border: none;
              font-weight: bold;
              color: #484848;
              padding: 0 2px;
              text-align: center;
              height: 30px;
            }
            ::v-deep .el-input{
              font-size: 16px;
            }
          }
          .edit-active{
            font-size: 12px;
            font-family: Microsoft YaHei;
            text-align: center;
            //border: 1px solid #337AB7;
            //border-radius: 4px;
            ::v-deep .el-input__inner{
              border: 1px solid #337AB7;
              border-radius: 4px;
              font-size: 12px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #484848;
            }
          }
          .box{
            width: 75%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            .box-item{
              /*width: 80px;*/
              height: 30px;
              padding: 0 20px;
              background: rgba(16, 15, 79, 0);
              border: 1px solid #B2BACA;
              border-radius: 4px;
              display: flex;
              justify-content: center;
              align-items: center;
              position: relative;
              margin-bottom: 7px;
              font-size: 12px;
              font-weight: 400;
              color: #484848;
            }
            >div:not(:nth-last-child(1)){
              margin-right: 10px;
            }
            .boxedit-active{
              border: 1px dashed #337AB7;
              border-radius: 4px;
            }
            .iconshanchu{
              position: absolute;
              right: -5px;
              top: -5px;
              color: #337AB7;
              background-color: #ffffff;
            }
            .add-part{
              margin-bottom: 7px;
              ::v-deep .el-input__inner{
                color: #484848;
                border: 1px solid #337AB7;
                border-radius: 4px;
                height: 30px;
              }
            }
          }
          .tool{
            width: 14%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            >div{
              width: 30px;
              height: 30px;
              display: flex;
              justify-content: center;
              align-items: center;
              cursor: pointer;
              border: 1px solid #B2BACA;
              border-radius: 4px;
              color: #8C98AF;
            }
            .btn-active{
              color: #FFFFFF;;
              background: #337AB7;
              border: none;
            }
            .not-allow{
              cursor: not-allowed;
            }
          }
        }
        >div:not(:last-child){
          border-bottom: 1px dashed #DBDBDB;
        }
      }
      .nodata{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        div:nth-child(1){
          width: 132px;
          height: 68px;
          background: url("~@/assets/img/dialog_nodata.png");
          -webkit-background-size: 100% 100%;
          background-size: 100% 100%;
          background-repeat: no-repeat;
        }
        div:nth-last-child(1){
          padding-top: 25px;
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #47558F;
        }
      }
    }
  }
  .add-body{
    width: 100%;
    height: 100%;
  }
  .add-dialog{
    .dialog-head{
      width: 100%;
      height: 50px;
      background: #337AB7;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #FFFFFF;
      padding: 20px;
      .btn{
        font-size: 12px;
        padding: 0 20px;
        position: absolute;
        right: 0;
        display: flex;
        cursor: pointer;
        .add-btn{
          padding: 0 20px;
          border-right: 1px solid #7EADD6;
          margin-right: 20px;
        }
      }
    }
    .one{
      padding: 20px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      font-family: Microsoft YaHei;
      color: #484848;
      text-align: left;
      border-bottom: 1px dashed #DBDBDB;
      >div:nth-last-child(1){
        width: 85%;
        height: 100%;
        padding-right: 20px;
        font-size: 12px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #DD4B39;
        display: flex;
        justify-content: space-between;
        align-items: center;
        ::v-deep .el-input{
          width: 550px;
          height: 36px;
        }
        ::v-deep .el-input__inner{
          color: #484848;
          border: 1px solid #B2BACA;
          border-radius: 4px;
        }
      }
    }
    .two{
      margin-top: 20px;
      font-size: 14px;
      font-family: Microsoft YaHei;
      color: #484848;
      width: 100%;
      height: calc(100% - 85px);
      display: flex;
      padding-bottom: 30px;
      border-bottom: 1px solid #DBDBDB;
      justify-content: space-between;
      >div:nth-child(2){
        width: 85%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        div{
          /*width: 80px;*/
          min-width: 78px;
          //max-width: 148px;
          height: 30px;
          padding: 0 10px;
          border: 1px solid #B2BACA;
          border-radius: 4px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 13px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #484848;
          margin-right: 10px;
          cursor: pointer;
        }
        div:not(:last-child){
          margin-bottom: 10px;
        }
        .province_check{
          background-color: #337AB7;
          color: #FFFFFF;
        }
      }
    }
    .dialog-footer{
      width: 100%;
      padding: 10px 0;
      display: flex;
      flex-direction: row-reverse;
      justify-content: right;
      align-items: center;
      ::v-deep .el-button{
        width: 90px;
        height: 40px;
        border: 1px solid #337AB7;
        border-radius: 4px;
        font-size: 14px;
        font-family: Microsoft YaHei;
        color: #337AB7;
      }
      button:last-child{
        margin-right: 10px;
      }
    }
  }
}
</style>
