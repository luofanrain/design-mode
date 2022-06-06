// 代理模式  代理模式 功能   为其他对象提供一种代理以控控制对象的访问  

class Company{
  name:string
  constructor(name:string){
    this.name = name
  }
  doSign(){}
  doMeeting(){}
  doWork(){}
}

class Employees extends Company {}

class ProxyEmployees {
  person:Employees
  constructor(person:Employees){
    this.person = person
  }
  doSign(){
    console.log(`${this.person.name}签到了`)
  }
  doMeeting(){
    console.log(`${this.person.name}开会了`)
  }
  doWork(){
    console.log(`${this.person.name}工作了`)
  }
}

function main(){
  // 陌生人代理李四去 签到 开会 工作
  let person = new ProxyEmployees(new Employees("李四"))
  person.doSign()
  person.doMeeting()
  person.doWork()
}

main()

