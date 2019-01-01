window.jQuery = function (nodeOrSelector) {  // 参数可能是node，也可能是选择器
  let nodes = {}  // 先声明一个空对象，伪数组
  if (typeof nodeOrSelector === 'string') {  // 字符串检测，如果是个字符串或多个字符串
    let temp = document.querySelectorAll(nodeOrSelector)  // 找一个节点或多个节点,temp是伪数组，不想要nodelist的原型
    for (let i = 0; i < temp.length; i++) {  // 遍历这个temp
      nodes[i] = temp[i]
    }
    nodes.length = temp.length  // 生成新的纯净的伪数组,有纯净的原型链
  } else if (nodeOrSelector instanceof Node) {  // 如果传的是一个节点
    nodes = {   // 前一种情况返回伪数组，另外一种情况也应该返回伪数组，不会被弄晕
      0: nodeOrSelector,
      length: 1
    }
  }

  nodes.addClass = function (classes) {
    [classes].forEach((value) => {  // 有可能每个节点上要加不止一个class（classes可能是个伪数组），所以需要foreach()方法,对classes里每个值执行函数
      for (let i = 0; i < nodes.length; i++) {  // 要加多个元素节点的class，所以需要遍历，根据nodes的个数
        nodes[i].classList.add(value)   // 对每个遍历到的nodes的值addclass（根据classes里value个数，因为foreach方法，这个for循环要轮几大轮）
      }
    })
  }

  nodes.setText = function (text) {
    for (let i = 0; i < nodes.length; i++) {  // 利用for循环遍历nodes
      nodes[i].textContent = text   // nodes里每个value的textcontent都等于text
    }
  }
  return nodes  // 返回nodes
}
window.$ = jQuery 

var $div = $('div')
$div.addClass('blue') // 可将所有 div 的 class 添加一个 blue
$div.setText('hi') // 可将所有 div 的 textContent 变为 hi