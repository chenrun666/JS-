# 浏览器开发者工具介绍和使用技巧【第一节】

## CONTENT

- 浏览器开发者工具的介绍
- Network 面板的介绍和使用
- Console 面板的介绍和使用
- Source 面板的介绍和使用

### chrome 调试界面

![table.png](./images/table.png)

### Network 面板的使用

- Network 面板介绍
- 异步请求重发
- 如何5秒钟生成爬虫代码

#### 过滤器

**domain:** 仅显示来自指定域的资源。您可以使用通配符来包括多个域。例如，.com显示以.com结尾的所有域名中的资源。

**has-response-header:**显示包含指定HTTP相应头信息的资源.

**is:**通过is:running找出WebSocket请求

**larger-than(大于):**显示大于指定大小资源（以字节为单位）。设置值1000等效于设置值1k。

**method（方法）:**显示通过指定的HTTP方法类型检索的资源。

**mime-type:**显示指定MIME类型的资源。

**mixed-content:**混合内容： 显示所有混合内容资源或仅显示当前显示的内容

**Scheme:**协议， 显示通过不受保护的HTTP

**set-cookie-domain:**显示具有set-cookie头，并且其Domain属性与指定匹配的资源

**set-cookie-name:**显示具有set-cookie头，并且名称与指定匹配的资源

**set-cookie-value:**显示具有set-cookie头，并且与指定的值匹配的资源


### Source 面板的使用

### Console 面板的使用

- console.info 向控制台输出提示信息
- console.error 向控制台输出错误信息
- console.warn 向控制台输出警示信息
- console.assert 断言

#### console 小技巧

- console.table()
- copy 复制console的内容
- $
- $x xpath 获取dom