Page({
  data: {
    // 轮播图数组
    swiperList:[]
  },

  // 页面加载就会触发
  onLoad: function(options){
    //1 发送异步请求获取轮播图数据
    wx.request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata', //域名需要备案
      success: (result) => {
        this.setData({
          swiperList: result.data.message
          
        })
        console.log(result);
      }
    });
  }

});