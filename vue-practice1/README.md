# hushen-h5

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


##### 1.使用less预处理语言  #####

  ** 引用全局less  **
  ```
  utils.js---------------------------------
    exports.cssLoaders中添加方法 
      function resolveResource(name) {
        return path.resolve(__dirname, './../src/css/' + name);
      }
      function generateSassResourceLoader() {
        const loaders = [
          cssLoader,
          // 'postcss-loader',
          'less-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              // it need a absolute path
              resources: [resolveResource('index.less')]
            }
          }
        ];
        if (options.extract) {
          return ExtractTextPlugin.extract({
            use: loaders,
            fallback: 'vue-style-loader'
          })
        } else {
          return ['vue-style-loader'].concat(loaders)
        }
      }
        return{
          ...
          less: generateSassResourceLoader(),
        }
 ```
 
 ##### 2.使用axios做登录拦截  #####
 
 ##### 3.父子组件通信实现多选操作  #####
