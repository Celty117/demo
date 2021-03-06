//  1.初始化数据
var hashA = init()
var keys = hashA['keys']
var hash = hashA['hash']


// 2.生成键盘
// 遍历 keys，生成 kbd 标签
generateKeyboard(keys, hash)


// 3.监听用户动作
listenToUser(hash)


// 下面是工具函数
function getFromLocalStorage(name) {
  return JSON.parse(localStorage.getItem(name) || 'null')
}
function tag(tagName) {
  return document.createElement(tagName)
}
function createSpan(textContent) {
  var span = tag('span')
  span.textContent = textContent
  span.className = 'text'
  return span
}
function createButton(id) {
  var button = tag('button')
  button.textContent = '编辑'
  button.id = id
  button.onclick = function (xzkjcnxlkcjlk) {  // xzkjcnxlkcjlk['target']就是用户点击的元素
    var button2 = xzkjcnxlkcjlk['target'] // 拿到用户点的哪个按钮
    var img2 = button2.previousSibling
    var key = button2['id']  // 拿到用户点的哪个按钮
    var x = prompt('给我一个网址')  //  用户输入的网址存到x里 
    hash[key] = x  //  让hash[key]里对应的值变成x的值,hash变更
    img2.src = 'https://' + x + '/favicon.ico'
    img2.onerror = function (xxx) {
      xxx.target.src = '//i.loli.net/2018/12/08/5c0b7acfc9d2a.png'
    }
    localStorage.setItem('zzz', JSON.stringify(hash))
  }
  return button
}
function createImage(domain) {
  var img = tag('img')
  if (domain) {
    img.src = 'https://' + domain + '/favicon.ico'
  } else {
    img.src = '//i.loli.net/2018/12/08/5c0b7acfc9d2a.png'
  }
  img.onerror = function (xxx) {
    xxx.target.src = '//i.loli.net/2018/12/08/5c0b7acfc9d2a.png'
  }
  return img
}
function init() {
  var keys = {
    '0': { 0: 'q', 1: 'w', 2: 'e', 3: 'r', 4: 't', 5: 'y', 6: 'u', 7: 'i', 8: 'o', 9: 'p', length: 10 },
    '1': { 0: 'a', 1: 's', 2: 'd', 3: 'f', 4: 'g', 5: 'h', 6: 'j', 7: 'k', 8: 'l', length: 9 },
    '2': { 0: 'z', 1: 'x', 2: 'c', 3: 'v', 4: 'b', 5: 'n', 6: 'm', length: 7 },
    'length': 3
  }
  var hash = {
    'q': 'qq.com',
    'w': 'weibo.com',
    'e': 'ele.me',
    'r': 'renren.com',
    't': 'taobao.com',
    'y': 'youtube',
    'i': 'iqiyi.com',
    'o': 'opera',
    'p': undefined,
    'a': 'acfun.tv',
    's': 'sohu.com',
    'b': 'bilibilbi.com',
    'z': 'zhihu.com',
    'm': 'www.mcdonalds.com.cn'
  }
  // 取出 localStorage 中的 zzz 对应的 hash
  var hashInLocalStorage = getFromLocalStorage('zzz')
  if (hashInLocalStorage) {
    hash = hashInLocalStorage
  }
  return {
    'keys': keys,
    'hash': hash
  }
}
function generateKeyboard(keys, hash) {
  for (var index = 0; index < keys['length']; index = index + 1) {
    var div = tag('div')
    div.className = 'row'

    main.appendChild(div)

    var row = keys[index]  // 第一个数组 第二个数组 第三个数组
    for (var index2 = 0; index2 < row['length']; index2 = index2 + 1) {  // 0~9 0~8 0~6
      var span = createSpan(row[index2])

      var button = createButton(row[index2])

      var img = createImage(hash[row[index2]])

      var kbd = tag('kbd')
      kbd.className = 'key'

      kbd.appendChild(span)
      kbd.appendChild(img)
      kbd.appendChild(button)

      div.appendChild(kbd)
    }
  }
}
function listenToUser(hash) {
  document.onkeypress = function (xzkjcnxlkcjlk) {
    var key = xzkjcnxlkcjlk['key']  // 拿到用户输入的键
    var website = hash[key]  // 得到这个键对应的网站
    //location.href = 'http://' + website//  // 把当前地址变成新的网站的地址
    window.open('http://' + website, '_blank')  // 在新标签打开这个网址
  }
}