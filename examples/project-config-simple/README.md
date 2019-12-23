## 配置项目的quickapp.config.js文件

在项目中可以使用quickapp.config.js文件实现编译工具的自定义配置。

目前支持配置cli和webpack字段。

cli字段可以设置命令行选项，如果项目的quickapp.config.js配置如下

```javascript
{
  cli: {
    devtool: 'source-map'
  }
}
```

那么执行`npx hap build`等同于执行`npx hap build --devtool=source-map`

这样就避免了开发者每次都需要在命令行里输入多个选项。

webpack字段允许开发者自定义配置编译工具，丰富编译工具的能力。

目前webpack字段只暴露resolve、module和plugins配置项。使用方式与webpack相同。

