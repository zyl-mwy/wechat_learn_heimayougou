// pages/auth/index.js
import { request } from "../../request/index.js";
import regeneratorRuntime from '../../lib/runtime/runtime';
import { login } from "../../utils/asyncWx.js";
Page({
  // 获取用户信息
  async handleGetUserInfo(e){
    try{
      console.log(e);
      // 1 获取用户信息
      const { encryptedData, rawData, iv, signature } = e.detail;
      // 2 获取小程序登录成功后的code
      // wx.login({
      //   timeout: 10000,
      //   success: (result) => {
      //     console.log(result);
      //     const {code} = result;
      //   }
      // })
      const {code} = await login();
      // console.log(code);
      const loginParams = {encryptedData, rawData, iv, signature, code};
      // 3 发送请求 获取用户的token
      const {token} = await wx.request({url: '/users/wxlogin', data: loginParams, method: "post"});
      console.log(token);
      // 4 把token存入到缓存中 同时跳转回上一个页面
      wx.setStorageSync('token', token);
      wx.navigateBack({
        delta: 1
      });
    }catch(error){
      console.log(error);
    }
  }
})