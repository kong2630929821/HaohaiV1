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

新闻 (暂时隐藏)



## 官网地址
[http://www.gaia.world](http://www.gaia.world)

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


## 移动版和PC版同时发布流程

1. 新建两个文件夹，pc 和 phone ,分别把打包后的PC和移动端代码copy到对应文件夹下，
2. 在根目录新建index.html，判断入口是pc还是手机端，然后重定向对应目录

```
<script>
    var isMobile = navigator.userAgent.indexOf("Mobile") >= 0;
    if (isMobile) {
        location.href = "./phone/";
    } else {
        location.href = "./pc/";
    }
</script>
```


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



## 开发中遇到的问题

<div id="菜单栏弹出 底部也可以滑动"></div>

### 菜单栏弹出 底部也可以滑动

问题描述：菜单栏弹出时，滑动屏幕，底层内容会滑动

解决办法：检测菜单栏弹出的时候，设置body的position为fixed,并记录当前内容滑动的距离，设置body margin-left为负的滑动距离，以此来保持内容显示效果不变，
当关闭菜单栏的时候，恢复body元素原来设置

### 菜单栏弹出时有一个逐渐下拉的动画效果，但是有些手机没有此效果（iphone6）

问题描述:菜单栏弹出时有一个逐渐下拉的动画效果，但是有些手机没有此效果（iphone6）,此动画效果是使用transition过渡效果实现的，测试有些机型不支持此效果

解决办法：改用keyframe动画来代替transition过渡


### 路线图圆点细线在浏览器调试时正常，真机测试时变化

问题描述：路线图页面中的圆点以及细线在浏览器调试时一切正常，但是真机上测试时发生变形。推测是因为设置圆点以及细线的宽度时使用vw单位，真机上各种浏览器可能对小数点的
处理不一致导致最终效果有误差

解决办法：在设置这类像素值较小的内容时，使用px作单位

### 在一些显示多行文本时，比如任务介绍，新闻列表概要，在iphone6手机上显示最后一行字时只有半截

问题描述：在一些显示多行文本时，比如任务介绍，新闻列表概要，在iphone6手机上显示最后一行字时只有半截，一个原因是这类手机不支持以下属性
```
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
```
另外在不支持以上属性的情况下设置最大高度，也是因为单位使用vw,导致实际高度有误差，出现半截文字的情况

解决办法：统一显示字数，并设置最大高度高出应设值几个像素

## 菜单栏背景色变化1

问题描述：菜单栏需求一滚动就显示背景色，到顶部的时候无背景色，通过监听滚动事件来实现此效果，但是当关于我们页面职位介绍弹框弹出时，由于弹出弹框时同样需要禁止底层内容滑动，
使用[菜单栏弹出 底部也可以滑动](#菜单栏弹出 底部也可以滑动)相同技术实现，当设置fixed时，body会有一个滚动效果，但是菜单栏监听到此时滚动距离为0，所以导致此时菜单栏背景色
消失。

解决办法：当监听body滚动时，在监听内容加上一个margin-top的值，如果margin-top为负值，设置背景色为有

## 菜单栏背景色变化2

问题描述：滚动监听原始设置是大于0设置背景色，其他情况为无，但有些机型上会出现负值情况，导致背景色变为无

解决办法：将监听条件改为等于0时无背景色，其他情况有背景色


## 路线图展开保持点击item位置不变

问题描述：路线图首先展开一条item，滚动到第二次想要展开的item，点击后会因为滚动条已经滚动一定距离，导致第二次展开的条目滚动上去，看不见完整显示

解决办法：当第二次点击条目的时候，设置  滑动距离 =  已经滑动的距离 - 上次展开的路线图的高度 并且将滑动距离为负值时设置0,同时还有使用一个标志来表示上一次展开的条目，
同此时展开的条目比较，如果是curIndex < lastIndex,及从下往上展开的话，不对其进行滚动处理
```
    let $routeMapHeight = $( ":not('.route-map-hidden').route-map-container").outerHeight(true);
      if (!$routeMapHeight) {
        //第一次展开
        this.$emit("clickRouteMap", this.index);
        return;
      }
      let scrollTop = $(document).scrollTop();
      this.$emit("clickRouteMap", this.index);
      if(this.index < this.lastIndex){ //从下往上进行展开
          return;
      }
      let t = scrollTop - $routeMapHeight;
      if (t < 0 ) {
        window.scrollTo(0, 0);
      } else {
        window.scrollTo(0, scrollTop - $routeMapHeight);
      }
```


## 白皮书在某些机型(iphone6)上只能显示一页

问题描述：pc版白皮书使用iframe框架加载pdf文档，但是手机上会出现某些机型只展示首页且无法翻页滚动的情况

解决办法：通过使用pdf.js,因为pdf.js是HTML5实现的，无需任何本地支持，而且对浏览器的兼容性也是比较好，只要浏览器支持HTML5。
在[https://github.com/mozilla/pdf.js](https://github.com/mozilla/pdf.js)下载压缩包，解压后将build 和 web文件夹放到static文件夹下

参考网站   [https://github.com/Plortinus/blog/issues/1](https://github.com/Plortinus/blog/issues/1)

