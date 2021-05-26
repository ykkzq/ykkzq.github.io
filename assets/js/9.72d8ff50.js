(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{329:function(n,t,e){"use strict";e.r(t);var r=e(33),s=Object(r.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("p",[e("strong",[n._v("1.数组扁平化 :")]),n._v("\n数组扁平化是指将一个多维数组变为一个一维数组")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("const res = [];\nconst fn = (arr) => {\n    for(let i=0;i<arr.length;i++){\n        if (Array.isArray(arr[i])){\n            fn(arr[i])\n        } else {\n            res.push(arr[i])\n        }\n    }\n};\n\n例子：\nfn([1, [2, [3, [4, 5]]], 6])\n")])])]),e("p",[e("strong",[n._v("2.数组去重")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("const unique = arr => {\n    let res=[];\n    for(let i=0;i<arr.length;i++){\n        if (res.indexOf(arr[i]) === -1){\n            res.push(arr[i])\n        }\n    }\n    return res\n}\n\n例子：\nunique([1,1,3,4,5,6,5])\n")])])]),e("p",[e("strong",[n._v("3.类数组转化为数组 :")]),n._v("\n类数组是具有 length 属性，但不具有数组原型上的方法。常见的类数组有 arguments、DOM 操作方法返回的结果。")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("1.[...document.querySelectorAll('div')];\n2.Array.prototype.splice.call(document.querySelectorAll('div'));\n")])])]),e("p",[e("strong",[n._v("4.filter")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("Array.prototype._filter = function(fn){\n    if(!Array.isArray(this)){\n        throw Error('type error')\n    }\n    if(typeof fn !== 'function'){\n        throw Error(fn + 'is not a function')\n    }\n    let res=[];\n    for(let i=0;i<this.length;i++){\n        if (fn(this[i], i, this)){\n            res.push(this[i])\n        }\n    }\n    return res;\n}\n\n例子：\nfunction fun(e,i,a){\n    return e>2\n}\nvar arr = [1,2,3,4];\nvar res = arr._filter(fun);\nconsole.log(res)\n")])])]),e("p",[e("strong",[n._v("5.map")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("Array.prototype._map = function(fn){\n    if (!Array.isArray(this)){\n        throw Error('type error')\n    }\n    if(typeof fn !== 'function'){\n        throw Error(fn + 'is not a function')\n    }\n    let res=[]\n    for(let i=0;i<this.length;i++){\n        res.push(fn(this[i], i, this))\n    }\n    return res;\n}\n\nfunction ArrReduce(e){\n    return e * 2;\n}\nvar arr = [1,2,3];\nvar res = arr._map(ArrReduce)\nconsole.log(res)\n")])])]),e("p",[e("strong",[n._v("6.forEach")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("Array.prototype._forEach = function(fn){\n    if(!Array.isArray(this)){\n        throw Error('type error')\n    }\n    if(typeof fn !== 'function'){\n        throw Error(fn + 'is not a function')\n    }\n    let res=[]\n    for(let i=0;i<this.length;i++){\n        res.push(fn(this[i], i))\n    }\n}\n\n例子：\nlet list = [1,2,3,4,5]\nlist._forEach((elem,i)=>{\n    console.log(elem, i)\n})\n")])])]),e("p",[e("strong",[n._v("7.reduce")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('Array.prototype._reduce = function (fn, initValue) {\n  if (!Array.isArray(this)) {\n    throw Error("type error");\n  }\n  if (typeof fn !== "function") {\n    throw Error(fn + "is not a function");\n  }\n  if (initValue && typeof initValue !== "number") {\n    throw Error(initValue + "is not a number");\n  }\n  let acc;\n  if (initValue) {\n    acc = initValue;\n  } else {\n    acc = 0;\n  }\n  for (let i = 0; i < this.length; i++) {\n    acc = fn(acc, this[i]);\n  }\n  return acc;\n};\n\n例子：\nvar arr = [1, 2, 3];\nvar res = arr._reduce(function (acc, el) {\n  return acc + el;\n}, 2);\nconsole.log(res);\n')])])]),e("p",[e("strong",[n._v("8.apply")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("Function.prototype._apply = function(ctx=window, args){\n    if(typeof this !== 'function'){\n        throw Error(this + 'is not a function')\n    }\n    ctx['fn'] = this;\n    let res = ctx['fn'](...args);\n    delete ctx['fn'];\n    return res;\n}\n\nfunction fn(...args) {\n    console.log(this)\n    console.log(args)\n}\nfn._apply({x:10}, [1,2,3])\n")])])]),e("p",[e("strong",[n._v("9.call")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("Function.prototype._call = function(ctx=window, ...args){\n    if(typeof this !== 'function'){\n        throw Error(this + 'is not a function')\n    }\n    ctx['fn'] = this;\n    let res = ctx['fn'](...args);\n    delete ctx['fn'];\n    return res;\n}\n\n例子：\nfunction fn(...args) {\n    console.log(this)\n    console.log(...args)\n}\nfn._call({x:10}, 1,2,3)\n")])])]),e("p",[e("strong",[n._v("10.bind")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("Function.prototype._bind = function(ctx=window, ...args) {\n  if (typeof this !== 'function') {\n    throw new Error(this + 'is not a function')\n  }\n  var that = this;\n  return function F() {\n    // 考虑new的情况\n    if(this instanceof F) {\n      return new that(...args, ...arguments)\n    } else{\n      ctx['fn'] = this;\n      let res = ctx['fn'](...args.concat(...arguments));\n      delete ctx['fn'];\n      return res\n    }\n  }\n}\n\n例子：\nfunction fn(...args) {\n    console.log(this)\n    console.log(...args)\n}\nlet b = fn._bind({x:10}, 1,2,3)\nb(4)\n")])])]),e("p",[e("strong",[n._v("11.函数防抖:")]),n._v(" 触发高频时间后 n 秒内函数只会执行一次,如果 n 秒内高频时间再次触发,则重新计算时间。")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("function debounce (fn, delay){\n    let timer = null;\n    let that = this;\n    return function(){\n        if(timer){\n            clearTimeout(timer)\n        }\n        timer = setTimeout(function(){\n            fn.apply(that,arguments)\n            timer = null\n        },delay)\n    }\n}\n")])])]),e("p",[e("strong",[n._v("12.函数节流:")]),n._v(" 高频时间触发,但 n 秒内只会执行一次,所以节流会稀释函数的执行频率。")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("function throttle(fn,delay){\n    let timer = null;\n    let that = this;\n    return function(){\n        if(timer){\n            timer = null\n        }\n        timer = setTimeout(function(){\n            fn.apply(that, arguments)\n            timer = null\n        },delay)\n    }\n}\n")])])]),e("p",[e("strong",[n._v("13.函数柯里化:")]),n._v(" 指的是将一个接受多个参数的函数 变为 接受一个参数返回一个函数的固定形式，这样便于再次调用，例如 f(1)(2)=3;")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("function f(){\n    const _args = [...arguments];\n    function fn(){\n        _args.push(...arguments);\n        return fn;\n    }\n    fn.toString = function(){\n        return _args.reduce((sum, cur) => sum + cur);\n    }\n    return fn\n}\n")])])]),e("p",[e("strong",[n._v("14.模拟 new 操作")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("function myNew(fn,...args) {\n    const obj = Object.create(null)\n    obj.__proto__ = fn.prototype\n    const result = fn.apply(obj, args)\n    const isObject = typeof result === 'object' && result !== null\n    const isFunction = typeof result === 'function'\n    if(isObject || isFunction) return result\n    return obj\n}\n\n例：\nfunction P() {\n    const args = Array.prototype.slice.call(arguments, 0)\n    console.log(args)\n}\nvar p = myNew(P, 1,2,3)\nvar p2 = new p(1,2,3)\n")])])]),e("p",[e("strong",[n._v("15.手写 ajax")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("function _ajax(url){\n    let p = new Promose((resolve, reject)=>{\n        const xhr = new XMLHttpRequest();\n        xhr.open('GET', url, true);\n        xhr.onreadystatechange = function(){\n            if(xhr.readyState === 4){\n                if(xhr.status === 200){\n                    resolve(\n                        JSON.parse(xhr.responseText);\n                    )\n                } else if(xhr.status === 404){\n                    reject(new Error('404 not found'))\n                }\n            }\n        }\n        xhr.send(null);\n    });\n    return p;\n}\n")])])]),e("p",[e("strong",[n._v("16.深拷贝")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("function deepClone(obj={}){\n    if(typeof obj !== 'object' || obj === null){\n        return obj;\n    }\n    let result;\n    if(obj instanceof Array){\n        result = [];\n    } else {\n        result = {};\n    }\n    for(let key in obj){\n        if(obj.hasOwnProperty(key)){\n            result[key]=deepClone(obj[key]);\n        }\n    }\n    return result;\n}\n")])])]),e("p",[e("strong",[n._v("17.instanceof")])]),n._v(" "),e("p",[n._v("instanceof\n原理：判断某个对象是否属于某个类型，或者是该类型的父类型祖先类型。")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("function myInstanceof(left, right) {\n    let leftValue = left.__proto__\n    let rightValue = right.prototype\n    while(leftValue) {\n      if(leftValue===rightValue) {\n        return true\n      }\n      leftValue = leftValue.__proto__\n    }\n    return false\n  }\n\n例：\nfunction P() {}\nconst p = new P()\nconsole.log(p instanceof P)\nconsole.log(myInstanceof(p, P))\n")])])]),e("p",[e("strong",[n._v("18.Promsie.all")])]),n._v(" "),e("p",[n._v("核心思路：")]),n._v(" "),e("ol",[e("li",[n._v("接收一个 Promise 实例的数组或者具有 Iterator 接口的对象作为参数")]),n._v(" "),e("li",[n._v("这个方法返回一个新的 Promsie 对象")]),n._v(" "),e("li",[n._v("遍历传入的参数，用 Promsie.resolve()将参数进行包裹使其变成一个 Promsie 对象")]),n._v(" "),e("li",[n._v("参数所有回调成功才是成功，返回值数组与参数顺序一致，参数数组只要有一个失败则触发失败状态")])]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v(" function promiseAll(promsies) {\n    return new Promise((resolve, reject)=> {\n      if(!Array.isArray(promsies)) {\n        throw new Error('not Array')\n      }\n      let len = promsies.length\n      let count = 0\n      let result = []\n      for(let i=0;i<len;i++) {\n        Promise.resolve(promsies[i]).then(data=> {\n          result.push(data)\n          count++\n          if(count===len) {\n            return resolve(result)\n          }\n        }).catch(err=> {\n          return reject(err)\n        })\n      }\n    })\n }\n\n 例：\n const p1 = Promise.resolve(1)\n  const p2 = Promise.resolve(2)\n  Promise.all([p1, p2]).then(data=> {\n      console.log(data)\n  })\n  promiseAll([p1, p2]).then(data=> {\n      console.log(data)\n  })\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);