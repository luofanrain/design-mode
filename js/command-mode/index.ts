// 命令模式 将一个请求封装为一个对象，从而使你可用不同的请求对客户进行参数化，对请求排队或记录请求日志，以及可支持撤销操作

abstract class Command {
  name:string
}

class BaseCommand extends Command{
  constructor(name:string){
    super()
    this.name = name
  }
}


class Computer{
  events:Array<Command> = []
  addEvents(command:Command){
    let names = this.events.map((item:Command)=>item.name)
    if(names.includes(command.name)){
      console.log(`事件队列已有此事件，不允许再添加，【${command.name}】将不会执行`)
    }else{
      console.log(`事件队列新增事件【${command.name}】`)
      this.events.push(command)
    }
  }
  removeEvents(command:Command){
    let names = this.events.map((item:Command)=>item.name)
    let index = names.indexOf(command.name)
    this.events.splice(index,1)
    console.log(`事件队列移除事件【${command.name}】`)
  }
  exec(){
    this.events.forEach((command:Command)=>{
      console.log(`${command.name}命令已执行`)
    })
  }
}

function main(){
  let computer = new Computer()
  let command1 = new BaseCommand("copy")
  let command2 = new BaseCommand("paste")
  let command3 = new BaseCommand("cut")
  let command4 = new BaseCommand("paste")
  computer.addEvents(command1)
  computer.addEvents(command2)
  computer.addEvents(command3)
  computer.addEvents(command4)
  computer.removeEvents(command2)

  computer.exec()
}
main()

