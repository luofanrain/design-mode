// 开放封闭原则  原理在于  封闭修改，开放扩展，由于之前写简单工厂模式已包含此特性，我直接copy过来了

class Calculate{
  numberA:number
  numberB:number
  @verityNumber
  calc(){
    return this.getResult()
  }
  getResult(){}
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
    return this.numberA + this.numberB
  }
}
@supplement()
class CalcSubtraction extends Calculate{
  getResult(){
    return this.numberA - this.numberB
  }
}
@supplement()
class CalcMultiplication extends Calculate{
  getResult(){
    return this.numberA * this.numberB
  }
}
@supplement()
class CalcDivision extends Calculate{
  getResult(){
    if(this.numberB == 0) return '除数不能为0'
    return this.numberA / this.numberB
  }
}
@supplement()
class CalcFactorial extends Calculate{
  getResult(){
    if(this.numberA == 0) return this.numberA
    return Math.pow(this.numberA,this.numberB)
  }
}

class CalcOperator {
  operator:String = ""
  createOperator(operator:String){
    this.operator = operator
    let exec:Calculate | null = null
    switch(this.operator){
      case '+':
        exec = new CalcAddition()
        break;
      case '-':
        exec = new CalcSubtraction()
        break;
      case '*':
        exec = new CalcMultiplication()
        break;
      case '/':
        exec = new CalcDivision()
        break;
      case '**':
        exec = new CalcFactorial()
        break;
      default:
        console.log('错误的操作符')
        return null
    }
    return exec
  }
}
function main(){
  let operator:any = new CalcOperator()
  let item:any = operator.createOperator("**")
  item.numberA = 10
  item.numberB = 3
  console.log(item.calc())
}

main()

