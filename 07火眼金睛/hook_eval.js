window.__cr_eval = window.eval

var myeval = function (src) {
    console.log("========= eval begin: length=" + src.length + ", caller=" + (myeval.caller && myeval.caller.name) + " =======")
    console.log(">>>>>>>>> eval injected: " + document.location + " <<<<<<<<<")
    console.log(src)
    console.log("====== eval end ======")
    return window.__cr_eval(src)
}

// 重写eval的toString放置检测出修改了eval
myeval.toString = function () { return window.__cr_eval.toString }

Object.defineProperty(window, 'eval', { value: myeval })