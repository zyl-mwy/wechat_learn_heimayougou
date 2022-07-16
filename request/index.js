export const request=(params)=>{
    // 定义公共的url
    const baseUrl = "https://api-hmugo-web.itheima.net/api/public/v1";


    return new Promise((resolve, reject)=>{
        wx.request({
            ...params,
            // 拼装url
            url: baseUrl + params.url,


            success:(result)=>{
                // resolve(result);
                resolve(result.data.message);
            },
            fail:(err)=>{
                reject(err);
            }
        })
    });
}