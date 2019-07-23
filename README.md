简洁，高效，实用的前端自动化开发小工具！针对前端开发常见需求，提供基于gulp的前端自动化环境，代码压缩[js|css|image]，less编译及压缩，文件监听，模版文件初始化，文件拷贝等常见的基于gulp自动化执行的任务。

## 使用:

#### 1. 全局安装
```
npm install gulp-auto -g
或
npm install gulp-auto -g --registry http://registry.cnpmjs.org
```

#### 2. 使用

```
Usage: gulp-auto [options] [command]

Options:
  -v, --version  输出当前gulp-auto版本号
  -h, --help     output usage information

Commands:
  minify [js|css|images]   压缩文件[js|css|images]
  watch                    监听文件
  init                     初始化模版应用
  parse [less]             解析less文件为css
  help [cmd]               display help for [cmd]
```

#### 3.说明 :  

##### Example:
文件目录
.  
└── src  
    ├── css  
    │   └── index.css  
    ├── images  
    │   └── test.png  
    └── js  
        └── index.js  

##### 1.js文件压缩

```
  gulp-auto minify js -d src
```  
.  
├── dist  
│   └── js  
│       └── index.js  
└── src  
    ├── css  
    │   └── index.css  
    ├── images  
    │   └── test.png  
    └── js  
        └── index.js  

##### 2.css文件压缩

```
  gulp-auto minify css -d src
```  

.  
├── dist  
│   └── css  
│       └── index.css  
└── src  
    ├── css  
    │   └── index.css  
    ├── images  
    │   └── test.png  
    └── js  
        └── index.js  

##### 3.图片文件压缩  

```
  gulp-auto minify images -d src
```  

.   
├── dist  
│   └── images  
│       └── test.png  
└── src  
    ├── css  
    │   └── index.css  
    ├── images  
    │   └── test.png  
    └── js  
        └── index.js  

##### 5.less文件编译为css  

```
  gulp-auto parse -d src
```

##### 6.`js`&`css`&`images`文件全部压缩

```
  gulp-auto minify build -d src
```  

.   
├── dist  
│   └── images  
│       └── test.png  
│   └── js  
│       └── index.js  
│   └── css  
│       └── index.css  
└── src  
    ├── css  
    │   └── index.css  
    ├── images  
    │   └── test.png  
    └── js  
        └── index.js  

> 其他功能陆续赶来。。。