// promise 形式的 getSetting
export const getSetting=()=>{
  return new Promise((resolve, reject)=>{
    wx.getSetting({
      success: (result) => {
        resolve(result);
      },
      fail: (err) =>{
        reject(err);
      }
    });
  })
}

// promise 形式的 chooseAddress
export const chooseAddress=()=>{
  return new Promise((resolve, reject)=>{
    wx.chooseAddress({
      success: (result) => {
        resolve(result);
      },
      fail: (err) =>{
        reject(err);
      }
    });
  })
}

// promise 形式的 openSetting
export const openSetting=()=>{
  return new Promise((resolve, reject)=>{
    wx.openSetting({
      success: (result) => {
        resolve(result);
      },
      fail: (err) =>{
        reject(err);
      }
    });
  })
}

// promise 形式的 showModal
export const showModal=({content})=>{
  return new Promise((resolve,reject)=>{
    wx.showModal({
      title: '提示',
      content: content,
      success :(res) =>{
        // if (res.confirm) {
        //   console.log("用户点击确定");
        //   cart.splice(index, 1);
        //   this.setCart(cart);
        // }else if (res.cancel) {
        //   console.log("用户点击取消");
        // }
        resolve(res);
      },
      fail:(err)=>{
        reject(err);
      }
    })
  })
}

// promise 形式的 showToast
export const showToast=({title})=>{
  return new Promise((resolve,reject)=>{
    wx.showToast({
      title: title,
      content: 'none',
      success :(res) =>{
        resolve(res);
      },
      fail:(err)=>{
        reject(err);
      }
    })
  })
}

// promise 形式的 login
export const login=()=>{
  return new Promise((resolve,reject)=>{
    wx.login({
      timeout: 10000,
      success: (result) => {
        // console.log(result);
        // const {code} = result;
        resolve(result);
      },
      fail: (err) => {
        reject(err);
      }
    })
  })
}