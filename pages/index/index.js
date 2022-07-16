//0 引入 用来发送请求的 方法 一定要把路径补全
import { request } from "../../request/index.js";

Page({
  data: {
    // 轮播图数组
    swiperList:[],

    // 导航 数组
    catesList: [],

    // 楼层 数据
    floorList: []
  },

  // 页面加载就会触发
  onLoad: function(options){
    //1 发送异步请求获取轮播图数据 优化的手段可以通过es6的 promise来解决这个问题
    // wx.request({
    //   url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata', //域名需要备案
    //   success: (result) => {
    //     this.setData({
    //       swiperList: result.data.message
          
    //     })
    //     console.log(result);
       
    //   }
    // });
    
    // request({url:"https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata"})
    // .then(result => {
    //   this.setData({
    //     swiperList: result.data.message
    //   })
    // })

    this.getSwiderList();
    this.getCateList();
    this.getFloorList();
  },

  //获取轮播图数据
  getSwiderList(){
    // request({url:"https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata"})
    request({url:"/home/swiperdata"})
    .then(result => {
      this.setData({
        // swiperList: result.data.message
        swiperList: result
      })
    })
  },

  //获取分类导航数据
  getCateList(){
    request({url:"/home/catitems"})
    .then(result => {
      this.setData({
        // catesList: result.data.message
        catesList: result
      })
    })
  },

  //获取楼层数据
  getFloorList(){
    request({url:"/home/floordata"})
    .then(result => {
      this.setData({
        // floorList: result.data.message
        floorList: result
      })
    })
  }

});