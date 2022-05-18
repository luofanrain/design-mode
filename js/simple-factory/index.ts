// 简单工厂模式
class Calculate{
  @verityNumber
  exec(){
    return (this as any).getResult()
  }
}

function supplement(){
  return function(target:any){
    target.prototype.numberA = 0;
    target.prototype.numberB = 0;
  }
}

function verityNumber(target:any,name:String,descriptor:any){
  var targetValue = descriptor.value
  descriptor.value = function(){
    let reg = /^[\d]+(\.[\d]+)?$/
    if(!reg.test(this.numberA)) return `numberA必须是数字,错误值：${this.numberA}`
    if(!reg.test(this.numberB)) return `numberB必须是数字,错误值：${this.numberB}`
    return targetValue.apply(this,arguments)
  }
  return descriptor
}


@supplement()
class CalcAddition extends Calculate{
  getResult(){
    return (this as any).numberA + (this as any).numberB
  }
}
@supplement()
class CalcSubtraction extends Calculate{
  getResult(){
    return (this as any).numberA - (this as any).numberB
  }
}
@supplement()
class CalcMultiplication extends Calculate{
  getResult(){
    return (this as any).numberA * (this as any).numberB
  }
}
@supplement()
class CalcDivision extends Calculate{
  getResult(){
    if((this as any).numberB == 0) return '除数不能为0'
    return (this as any).numberA / (this as any).numberB
  }
}

function main(){
  let item:any = new CalcDivision()
  item.numberA = 1
  item.numberB = 2
  console.log(item.exec())
}

main()

