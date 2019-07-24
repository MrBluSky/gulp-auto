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
  init [name]                   初始化模版应用
  minify [js|css|images|build]  压缩文件[js|css|images|build]
  parse [less]                  解析less文件为css
  watch                         监听文件
  help [cmd]                    display help for [cmd]
```

#### 3.说明 :  

##### Example:

##### 1.初始化模版应用
```
  gulp-auto minify js -d src
```  

即可在当前目录下创建一个文件app，内部的目录结构如下所示：
```
test-app
└── src
    ├── css
    │   └── index.css
    ├── images
    │   └── test.png
    └── js
        └── index.js
```

##### 2.js文件压缩

```
  gulp-auto minify js -d src
```  
此时，即可在当前目录下创建dist，并将压缩后的js放置在当前目录下，内部目录结构如下所示：

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
```

##### 3.css文件压缩

```
  gulp-auto minify css -d src
```  
此时，即可在当前目录下创建dist，并将压缩后的css放置在当前目录下，内部目录结构如下所示：
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
```

##### 4.图片文件压缩  

```
  gulp-auto minify images -d src
```  
内部目录结构如下所示：
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
```

##### 5.less文件编译为css  

```
  gulp-auto parse -d src
```

##### 6.`js`&`css`&`images`文件全部压缩

```
  gulp-auto minify build -d src
```  
内部目录结构如下所示：

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
```

> 其他功能陆续赶来。。。