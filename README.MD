# 新闻上架流程

1. 配置好newsConfig.json
2. banner图片放入newsImage
3. 文章中用到的图片放入newsimgs
4. markdown文件放入newsPackage
5. 点击server.bat 不要关闭
6. 点击build_pc.bat 构建pc端
7. 点击build_phone.bat 构建移动端
8. 将newsConfig.json,newsImage,newsimgs,newsPackage放入官网根目录
9. 删除官网/pc下所有文件并将/pc/dist下所有文件复制到官网/pc目录下
10. 删除官网/pc下所有文件并将/phone/dist下所有文件复制到官网/phone目录下