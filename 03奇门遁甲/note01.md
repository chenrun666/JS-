# 奇门遁甲---调用JavaScript执行代码 【上】

## 目标

- 了解为什么我们需要直接调用JS
- 了解常见的Python调用的JS的库
- 了解一种性能更高的操作方式
- 知道什么场景下应该使用什么方式进行调用

## 常见的JS重写

### Base64

### MD5

- 一般引用开源的MD5库
- 32位的英文字符串

## 复杂的JS运行

- 使用python调用JS
- 一种性能更高的调用方式
- 到底选择哪种方案比较好
- 使用非浏览器存在的问题， 以及解决方法

### 使用python调用js

#### 各种调用JS的库

- PyV8
- Js2Py
- PyExecJS
- PyminiRacer
- Selenium
- Pyppeteer

##### PyV8

- V8是Google的开源JavaScript引擎， 被使用在Chrome中。
- PyV8是V8引擎的一个Python层包装， 可以用来调用V8引擎执行JS代码

**不推荐使用， 年久失修， 可能存在内存泄漏问题**

##### Js2Py

- Js2Py是一个纯Python实现的JavaScript解释器和翻译器
- 存在很多BUG
- 性能不高
- 对于高度混淆的大型JS会转换失败

##### PyMiniRacer

- 同样是V8引擎的包装， 和PyV8效果一样
- 新库

##### PyExecJS

- 一个最开始诞生于Ruby中的库， 后来移植到python
- 有多个引擎可选， 但是一般我们会选择使用NodeJS作为引擎执行代码

#### PyExecJS的使用

- 安装Node.js
- 安装PyExecJS
    - pip install pyexecjs

##### 选择不同引擎进行解析

```js
# 长期使用
os.environ['EXECJS_RUNTIME'] = 'Node'
```

```js
# 临时使用

import execjs.runtime_names
node = execjs.get(execjs.runtime_names.Node)
```

##### 执行js

```js
import execjs

# 直接执行js
e = execjs.eval('a = new Array(1,2,3)')
```

```js
import execjs

# 编译之后执行
jstext = """
function hello(str){return str;}
"""

ctx = execjs.compile(jstext)
a = ctx.call('hello', 'hello world')
print(a)
```

###### selenium 执行js代码

```js
js = '......'
reslut = browser.execute_script(js)
```

启动浏览器参数
```python
chrome_option = Options()
chrome_option.add_argument('--headless')
chrome_option.add_argument('--disable-gpu')
chrome_option.add_argument('--ignore-certificate-errors')
browser = webdeiver.Chrome(options=chrome_option)
```

###### Pyppeteer

```python
result = await page.evalute(js, *data)
```

```python
result = await page.evaluteOnNewDocument(js, *data)
```



#### RPC

写一个简单的RPC服务接口， 然后调用js
**使用Google 的 gRPC框架**
和正常写API一样， 调用一下目标JS就好了

#### HTTP API

简单来说就是， 提供一个可以执行JS的HTTP API， 然后通过调用这个API来执行JS并获取想要的结果

**使用Nodejs的Express框架来实现**
和正常写API一样， 调用一下目标JS就好了

## 使用NodeJS的问题

### window对象

- NodeJS没有window对象， 如果使用window对象需要自己创建一个或者指向global
- jsdom之类的库

### Base64

- window.btoa 在nodejs中不存在
- Buffer.from('abcd').toString('base64')