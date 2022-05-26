// 深拷贝脚本
let data = {
    a:1,
    b:function(name,age){
        console.log(name,age)
        return [name,age]
    },
    c:[{b:1,c:2}],
    d:{f:1}
}

function deepCopy(item){
    let type = typeof item
    if(item instanceof Array) {
        let list = []
        item.forEach(val=>{
            list.push(clone(val))
        })
        return list
    }
    if(type == "object") return clone(item)
    if(type == "function") return function(...args){
        return eval(`(${item.toString()})(...args)`)
    }
    if(item )
    return item
}

function clone(item){
    let keys = Object.keys(item)
    let info = {}
    keys.forEach((key)=>{
        info[key] = deepCopy(item[key])
    })
    return info
}

let cloneItem = clone(data)
console.log(cloneItem)
console.log(cloneItem.b("李四","18"))