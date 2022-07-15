//0 引入 用来发送请求的 方法 一定要把路径补全
import { request } from "../../request/index.js";

Page({
  data: {
    // 轮播图数组
    swiperList:[],

    // 导航 数组
    catesList: []
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
  },

  //获取轮播图数据
  getSwiderList(){
    request({url:"https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata"})
    .then(result => {
      this.setData({
        swiperList: result.data.message
      })
    })
  },

  //获取分类导航数据
  getCateList(){
    request({url:"https://api-hmugo-web.itheima.net/api/public/v1/home/catitems"})
    .then(result => {
      this.setData({
        catesList: result.data.message
      })
    })
  }

});