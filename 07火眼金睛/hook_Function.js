window.__cr_fun = window.Function;
var myfun = function() {
    var args = Array.prototype.slice.call(arguments, 0, -1).join(','), src = arguments[arguments.length - 1]
    console.log(src);
    console.log('========= Function end ========');
    return window.__cr_fun.apply(this, arguments);
}

myfun.toString = function() { return window.__cr_fun + "" };
Object.defineProperty(window, 'Function', { value: myfun });