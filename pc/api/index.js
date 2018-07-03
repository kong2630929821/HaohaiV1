const axios = require('axios')
//获取资讯详情
async function getNews (fileName) {
    const root = '/newsPackage'
    return await axios({
      method: 'GET',
      url: fileName,
      baseURL:root,
      withCredentials: false
    })
}


//获取资讯配置文件
async function getNewsConfig(){
  const root = '/'
  return await axios({
      method: 'GET',
      url: "newsConfig.json",
      baseURL:root,
      /* headers:{
        "Cache-Control": "no-cache"
      }, */
      withCredentials: false
    });
}
export {
    getNews,
    getNewsConfig
}