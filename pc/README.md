# GAIA

#技术栈
1. vue
2. vue-router
3. vue-i18n

# 标注地址
http://192.168.31.241:10080/weiw/GAIA_material.git




# 后续需完成

邮箱确认

白皮书需补充

关于我们团队 (暂时隐藏)

新闻



## 官网地址
[http://www.fairblock.io](http://www.fairblock.io) (暂时)

## 本地运行环境搭建
1. 安装nodejs环境（在 [https://nodejs.org/](https://nodejs.org/) 官方网站下载安装包，然后进行安装）
2. 命令行进入工程目录 
3. 执行 npm install 安装工具包 
4. 执行npm run dev 即可在本地搭建运行环境
5. 浏览器键入[http://localhost:8080](http://localhost:8080)即可在本地查看

## 打包发布（假设node环境已搭建好）
1. 命令行进入工程目录
2. 执行npm run build 进行项目打包
3. 将dist文件夹下的所有文件copy到服务器
4. 浏览器键入网站地址查看

## 如何将打包好的文件上传到服务器
1. 使用beyond compare新建会话（文件夹比较）
2. 在右侧地址栏输入服务器地址(输入账户密码)，进入到相应文件夹，右键以此文件夹为基准
3. 把需要上传的文件直接拖入左侧，右键copy到右边
4. 发布完成

## 新闻如何上架
1. /static/news/ 目录下放置markdown文件
2. /static/newsImage/ 目录下放置文章banner图片
3. /statci/newsConfig.json 配置文章


## newsConfig.json 配置文件详解
1. id : /static/taxInfos/目录下文件名 (唯一性 禁止中文 推荐根据日期命名 比如2018-04-13 14:30  可以命名为201804131430_zh.md(中文文档) 201804131430_en.md(英文文档))
2. imgUrl : banner图片名(含后缀名)
3. title_zh (中文标题)  tithle_en (英文标题)
4. tags_zh  (中文标签)  tags_zh (英文标签)
5. summary_zh (中文概要) summary_en (英文概要) 此概要是显示在新闻列表
6. date : 文章发布日期  (以此日期排序,如果日期相同,配置在前的排序在前)


## 中英文文件配置
/src/common/lang/en.js  英文配置文件
/src/common/lang/zh.js  中文配置文件

## 工程目录文件简要说明
1. /static/ 一些静态资源
2. /src/ 源代码目录
3. /src/App.vue   app入口文件 
4. /src/page/  页面入口文件
5. /src/components/  组件文件
6. /router/  路由文件
7. /style/  样式文件
8. /utils/  工具文件
9. /api/ ajax调用文件


## 开发过程中用到的技术点

### 中英文切换问题
使用vue-i18n 组件，配置中英文两份配置文件

- 参考网址 [https://segmentfault.com/a/1190000011800593](https://segmentfault.com/a/1190000011800593)

- 使用流程
1. npm install vue-i18n  安装vue-i18n
2. 注入 vue 实例中，项目中实现调用 api 和 模板语法

/src/i18n/index.js

```
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zh from '@/common/lang/zh'
import en from '@/common/lang/en'

Vue.use(VueI18n)

export default new VueI18n({
    locale:localStorage.getItem('lang') ? localStorage.getItem('lang') : 'zh-CN', //当前使用语言
    messages:{
        'zh-CN': zh,  //引入中文配置文件
        'en-US': en  //引入英文配置文件
    }
})

```
```
// 引用API文件
import api from './api/index.js'
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
```

3. 组件中使用 $t()
```
<span v-text="$t('m.music')"></span>
```
4. 语言切换
```
this.$i18n.locale = "zh-CN";
```

### 浏览器浏览pdf文档
通过在一个新页面中切入iframe标签实现 

```
<iframe src="pdf文件地址"></iframe>

```


### 首页动画实现细节


1. 设置元素初始透明度及偏移量 
```
    opacity: 0;
    transform: translateY(300px);
    animation-fill-mode:forwards;
```
2. 定义动画
```
@keyframes fadeInUp {
    0% {opacity: 0;transform: translateY(300px);}
    100% {opacity: 1;transform: translateY(0px);}
}
```
3. 定义动画类
```
.fade-in-up{
    animation: fadeInUp .5s;
}
```

4. 滚动检测到某一时刻将动画类fade-in-up添加到元素上

### 浏览器兼容

|超小屏幕 手机 |小屏幕 平板 |中等屏幕 桌面显示器 |大屏幕 大桌面显示器| 
|-----:|------:|-----:|-----:|----:|----:|
|<768px|≥768px|≥992px|≥1200px|

- 使用vw单位结合css媒体查询进行微调
- vw：是Viewport's width的简写,1vw等于window.innerWidth的1%
- padding,margin使用vw,字体大小使用px
- 在不同屏幕下对字体进行媒体查询



### 路线图如何画
通过border实现竖线,通过after,before伪元素实现小圆点，然后position:absolute进行定位


引用外部链接

新闻列表内容足够少底部会留白