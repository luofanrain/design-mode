// 解释器模式 给定一个语言，定义它的语法的一种表示，并定义一个解释器，这个解释其使用该表示来解释语言中的句子

// 创建模板类

interface CommandItem {
  [key:string]:any
}
interface ParseItem {
  [key:string]:any
}


abstract class Execute {
  exec(type:string,fName:string){}
  remove(fName:string){}
  create(fName:string){}
}

class TemplateFolder extends Execute{
  exec(type:string,fName:string){
    this[type](fName)
  }
  remove(fName:string){
    console.log(`删除目录[${fName}]`)
  }
  create(fName:string){
    console.log(`新增目录[${fName}]`)
  }
}
class TemplateFile extends Execute{
  exec(type:string,fName:string){
    this[type](fName)
  }
  remove(fName:string){
    console.log(`删除文件[${fName}]`)
  }
  create(fName:string){
    console.log(`新增文件[${fName}]`)
  }
}



class Interpreter{
  commands:CommandItem = {}
  parseModule:Array<string> = ['create','remove']
  commandMap:CommandItem = {
    '-f':'filename',
    '-filename':'filename',
    '-m':'menu',
    '-menu':'menu'
  }
  exec(command:string){
    let commands:Array<string> = command.trim().split(/\s+/)
    let baseCommand:string = commands[0]
    if(!this.parseModule.includes(baseCommand)) {
      console.log('无效的命令')
      return
    }
    let tempCommands = commands.slice(1)
    for(let index:number=0;index<tempCommands.length;index+=2){
      let key:string = this.commandMap[tempCommands[index]]
      if(key == ''){
        console.log('错误的命令参数---',baseCommand[index])
        return 
      }
      let value:string = tempCommands[index+1]
      this.commands[key] = value
    }
    try{
      let parseItem:TemplateExcute = new TemplateExcute()
      parseItem.exec(baseCommand,this.commands)
    }catch(err){
      console.log(command,'命令解析出错',err)
    }
  }
}

class TemplateExcute {
  parseModule:ParseItem = {
    filename:TemplateFile,
    menu:TemplateFolder
  }
  commands:CommandItem
  exec(execModule:string,commands:CommandItem){
    for(let key in commands){
      let exec:Execute = new (this.parseModule[key])()
      exec.exec(execModule,commands[key])
    }
  }
}
// 此处未构造目录树
function main(){
  let command:Interpreter = new Interpreter()
  command.exec('create -m Home -f index ')
  let command1:Interpreter = new Interpreter()
  command1.exec('remove -m Home -f index ')
}

main()