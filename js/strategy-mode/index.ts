// 策略模式

class PayContext{
  @verityMoney
  getAmount(money:number){
    return (this as any).getResult(money)
  }
}
function verityMoney(target:any,name:string,descriptor:any){
  let oldTarget = descriptor.value
  descriptor.value = function(){
    let money = arguments[0]
    let reg = /^[\d]+(\.[\d]+)?$/
    if(!reg.test(money)) return "错误的总价"
    return oldTarget.apply(this,arguments)
  }
  return descriptor
}

class PayCommon extends PayContext{
  getResult(money:number){
    return money
  }
}

class PayDiscount extends PayContext{
  multiple:number = 0
  constructor([multiple]:[number]){
    super()
    this.multiple = multiple
  }
  getResult(money:number){
    return money * this.multiple
  }
}

class PayFullReduction extends PayContext{
  count:number= 0
  remain:number= 0
  constructor([count,remain]:[number,number]){
    super()
    this.count = count
    this.remain = remain
  }
  getResult(money:number){
    let loseMoney = Math.floor( money / this.count ) * this.remain
    return money - loseMoney
  }
}
type PayDescriptor = PayCommon | PayDiscount | PayFullReduction | null
class PayFactory{
  sales:PayDescriptor = null
  constructor(...args:any){
    let type = args[0],
    params = args.slice(1)
    switch(type){
      case 0:
        this.sales = new PayCommon()
        break;
      case 1: 
        this.sales = new PayDiscount(params)
        break;
      case 2:
        this.sales = new PayFullReduction(params)
    }
  }
  getResult(money:number){
    return this.sales.getAmount(money)
  }
}

function main(){
  let payMoney:number = 3000
  let money1:PayFactory = new PayFactory(0)
  console.log(money1.getResult(payMoney))
  let money2:PayFactory = new PayFactory(1,0.8)
  console.log(money2.getResult(payMoney))
  let money3:PayFactory = new PayFactory(2,300,100)
  console.log(money3.getResult(payMoney))
}

main()