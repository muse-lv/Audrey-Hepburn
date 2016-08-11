#一个关于Audrey Hepburn的小网站

##目录

* [背景介绍](#背景介绍)
* [项目结构](#项目结构)
* [项目介绍](#项目介绍)

<a name="背景介绍"></a>
## 背景介绍

认识赫本是通过她的经典电影《罗马假日》，被她的优雅与俏皮所倾倒。
于是制作了这个小网站。

<a name="项目结构"></a>
## 项目结构
├── Readme.md               
├── dist                     // 发布版本
├── node_modules             // npm
├── src                      // 源码
│   ├── css
│		│			└──*.css           
│   ├── fonts 
│   │      └──fonts  				 
│   ├── img  
│		│		 └──*.jpg/.svg      
│   ├── js
│		│		 └──*.js 						 
│		├── favicon.ioc          
│		├── index.html           // 首页
│		├── Life Story.html
│		├── Lover.html
│		├── Films.html
│		└── Photos.html
├── gulpfile.js              // gulp打包发布流程
└── package.json             // npm信息

<a name="项目介绍"></a>
## 项目介绍
简单介绍网站的五个页面及所用技术。

1.home <br/>
 运用html5和css3的动画特效制作了目录，实现了旋转、翻转、移动、跳出等动画效果。<br/>
2.Life Story<br/>
 一个十分简单的html页面，介绍了赫本的经历。<br/>
3.Films<br/>
选取了5部赫本主演的电影，每部电影一个页面。仅仅利用css3就制作了多个页面平滑切换的效果。<br/>
4.Lovers<br/>
介绍了赫本的爱人及宠物，用jQuery代码实现了点击导航在不同楼层中移动
以及拖动滚动条时导航样式的同步变化。<br/>
5.Photos<br/>
利用瀑布流布局展示了5部电影中赫本的剧照，另外结合jQuery和css3制作了侧边栏的动画效果。
