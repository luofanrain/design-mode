// 迭代器模式 提供一种方法顺序访问一个聚合对象中的各个元素，这个模式叫迭代器模式

abstract class IteratorItem{
  count:number
  dataList:Array<any>
  index:number
  isDone(){}
  add(item:any){}
  next(){}
}


class BaseIterator extends IteratorItem{
  constructor(){
    super()
    this.count = 0
    this.dataList = []
    this.index = 0
  }
  isDone(){
    return this.index >= this.count
  }
  add(item:any){
    this.dataList.push(item)
    this.count += 1
  }
  start(){
    return this.dataList[this.index] || null
  }
  next() {
    this.index += 1
    return this.dataList[this.index] || null
  }
}

function main(){
  let list = new BaseIterator()
  list.add("张三")
  list.add("李四")
  list.add("王五")
  list.add("赵云")
  list.add("关羽")
  list.add("陈麻子")
  list.add("黄美丽")
  let item = list.start()
  while(!list.isDone()){
    console.log(`${item}上车请记得买票哦`)
    item = list.next()
  }
}

main()