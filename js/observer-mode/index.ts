// 观察者模式  观察者模式定义了一种一对多的依赖关系，让多个观察者对象同时监听某一个主题对象。这个主题对象在状态发生变化时，会通知所有观察者对象，使它们能够自动更新自己

class Observer {
  notify(){}
  addTarget(target:Classmate){}
}

class Classmate{
  name:string = ''
  sub:Observer
  doSomeThing:string = ''
  constructor(name:string,sub:Observer,doSomeThing:string){
    this.name = name
    this.sub = sub
    this.doSomeThing = doSomeThing
  }
  update(){
    console.log(`老板来了，${this.name},停止${this.doSomeThing},好好自习`)
  }

}

class Teacher extends Observer{
  observerList:Array<Classmate> = []
  addTarget(target:Classmate){
    this.observerList.push(target)
  }
  removeTarget(target:Classmate){}
  notify(){
    this.observerList.forEach((target:Classmate)=>{
      target.update()
    })
  }
}

function main(){
  let observer = new Teacher()
  let zhangsan = new Classmate('张三',observer,'看小说')
  let huangmeili = new Classmate('黄美丽',observer,'化妆')
  observer.addTarget(zhangsan)
  observer.addTarget(huangmeili)
  observer.notify()

}


main()