import execjs

# 解释器
print(execjs.get().name)

# 直接执行js
e = execjs.eval('a = new Array(1,2,3)')
print(e)

# 编译之后执行
jstext = """
function hello(str){return str;}
"""

ctx = execjs.compile(jstext)
a = ctx.call('hello', 'hello world')
print(a)
