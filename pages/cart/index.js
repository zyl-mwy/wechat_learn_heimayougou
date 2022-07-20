// 1 获取用户的收获地址
  // 1 绑定点击事件
  // 2 调用小程序内置 api 获取用户的收获地址 wx.chooseAddress

  // 2 获取 用户 对小程序 所授予 获取地址的 权限 状态 scope
    // 1 假设 用户 点击获取收获地址的提示框 确定 autoSetting scope.address
      // scope 值 true 直接调用 获取收货地址
    // 2 假设 用户 从来没有调用过 收货地址的api
      // scope 值 undefined 直接调用 获取收货地址
    // 3 假设 用户 点击获取收获地址的提示框 取消 
      // scope 值 false
      // 1 诱导用户 自己 打开 授权设置界面(wx.openSetting) 当用户取消给与 获取地址权限的时候
      // 2 获取收获地址
Page({
  // 点击 收获地址
  handleChooseAddress(){
    // console.log("干一行 行一行 一行行 行行行");
    // // 2 获取收获地址
    // wx.chooseAddress({
    //   success: (result) => {
    //     console.log(result);
    //   }
    // })

    // // wx.getSetting({
    // //   success: (result) => {
    // //     console.log(result);
    // //   },
    // //   fail: () => {},
    // //   complete: () => {}
    // // })

    // 1 获取 权限状态
    wx.getSetting({
      success: (result) => {
        // 2 获取权限状态 只要发现一些 属性名很怪异的时候 都要使用 [] 形式来获取属性值
        const scopeAddress = result.authSetting["scope.address"];
        if(scopeAddress===true || scopeAddress===undefined){
          wx.chooseAddress({
            success: (result1) => {
              console.log(result1);
            }
          });
        }else{
          // 3 用户 以前拒绝过权限授予 先诱导用户打开授权界面
          wx.openSetting({
            success: (result2) => {
              // 4 可以调用 收货地址代码
              wx.chooseAddress({
                success: (result3) => {
                  console.log(result3);
                }
              });
            }
          });
        }
      },
      fail: (res) => {},
      complete: (res) => {},
    })
  }
})