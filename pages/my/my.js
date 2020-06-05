// pages/my/my.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    projectSource: 'https://github.com/liuxuanqiang/wechat-weapp-mall',
    userListInfo: [ {
      text: '联系方式',
      iconClass: 'iconfont icontelephone weui_cell_icon',
      detail: '15831683090'
    }, {
        text: '现居住地',
        iconClass: 'iconfont iconaddress weui_cell_icon',
        detail: '北京朝阳区'
      }, {
        text: '工作职位',
        iconClass: 'iconfont iconinfopersonal weui_cell_icon',
        detail: 'IT精英'
      }, {
        text: '兴趣爱好',
        iconClass: 'iconfont iconlike weui_cell_icon',
        detail: '篮球、足球、羽毛球'
      },{
        text: '联系客服',
        iconClass: 'iconfont iconsettings weui_cell_icon',
        detail: '01011111111'
      }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo( function( userInfo ) {
      //更新数据
      that.setData( {
        userInfo: userInfo
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})