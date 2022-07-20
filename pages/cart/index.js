// 1 获取用户的收获地址
  // 1 绑定点击事件
  // 2 调用小程序内置 api 获取用户的收获地址 wx.chooseAddress
Page({
  // 点击 收获地址
  handleChooseAddress(){
    console.log("干一行 行一行 一行行 行行行");
    // 2 获取收获地址
    wx.chooseAddress({
      success: (result) => {
        console.log(result);
      }
    })
  }
})