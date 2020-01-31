var my_stringify = JSON.stringify;
JSON.stringify = function (params) {
    console.log(">>>", params);
    return my_stringify(params);
}

var my_parse = JSON.parse;
JSON.parse = function (params) {
    console.log(">>>", params);
    return my_parse(params);
}