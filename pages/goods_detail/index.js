// 1 发送请求获取数据


import {request} from "../../request/index.js"
import regeneratorRuntime from "../../lib/runtime/runtime"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsObj: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 获取navigationbar url发送的id
    const {goods_id} = options;
    console.log(goods_id);
    this.getGoodsDetail(goods_id);
  },

  // 获取商品信息详情
  async getGoodsDetail(goods_id){
    const goodsObj = await request({url: '/goods/detail', data: {goods_id}});
    console.log(goodsObj);
    this.setData({
      goodsObj
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})