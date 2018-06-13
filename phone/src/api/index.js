const axios = require('axios')

//获取资讯详情
function getNews (url, success, failure) {
    const root = '/static/news'
    axios({
      method: 'GET',
      url: url,
      baseURL: root,
      withCredentials: false
    })
    .then(function (res) {
      //console.log('res',res);
      success(res);
    })
    .catch(function (err) {
      //console.log('err',err);
      if(failure){
        failure();
      }
    })
}

//获取资讯配置文件
function getNewsConfig(url,success,failure){
  const root = '/static/'
    axios({
      method: 'GET',
      url: url,
      baseURL: root,
      headers:{
        "Cache-Control": "no-cache"
      },
      withCredentials: false
    })
    .then(function (res) {
      //console.log('res',res);
      success(res);
    })
    .catch(function (err) {
      //console.log('err',err);
      if(failure){
        failure();
      }
    })
}
export default {
    getNews,
    getNewsConfig
}