## 支持源码中的JS依赖文件：以单文件的形式存在RPK中；

期望目标：

1. 减小RPK体积；
2. 减小页面JS的首屏渲染耗时；（JS内容 -> AST -> JS对象）

### 如何配置

`--enable-split-chunks=smart`


