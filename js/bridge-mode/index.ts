// 桥接模式  将抽象部分与他的实现部分分离，使他们都可以独立的变化

interface SoftWareList{
  [key:string]: SoftWare
}

abstract class  Mobile{
  name:string
  softWareList:SoftWareList
  addSoftWare(software:SoftWare){}
  run(){}
}
abstract class  SoftWare{
  name:string
}

class BaseMobile extends Mobile{
  constructor(name:string){
    super()
    this.name = name
    this.softWareList = {}
  }
  addSoftWare(sofware:SoftWare){
    this.softWareList[sofware.name] = sofware
  }
  run(){
    for(let key in this.softWareList){
      console.log(`【${this.name}】手机正在运行${this.softWareList[key].name}`)
    }
  }
}

class HuaWei extends BaseMobile{}
class IPhone extends BaseMobile{}

class BaseSoftWare extends SoftWare {}

class HuaWeiChat extends BaseSoftWare{
  name:string = "聊天工具"
}
class IPhoneChat extends BaseSoftWare{
  name:string = "聊天工具"
}
class HuaWeiGame extends BaseSoftWare{
  name:string = "王者荣耀"
}
class IPhoneGame extends BaseSoftWare{
  name:string = "王者荣耀"
}

class MobileFactory{
  mobile:Mobile
  constructor(mobile:Mobile){
    this.mobile = mobile
  }
  addSoftWare(software:SoftWare){
    this.mobile.addSoftWare(software)
  }
  run(){
    this.mobile.run()
  }
}

function main(){
  let huawei = new MobileFactory(new HuaWei('华为'))
  huawei.addSoftWare(new HuaWeiChat())
  huawei.addSoftWare(new HuaWeiGame())
  huawei.run()
  let iphone = new MobileFactory(new IPhone('苹果'))
  iphone.addSoftWare(new IPhoneChat())
  iphone.addSoftWare(new IPhoneGame())
  iphone.run()
}
main()