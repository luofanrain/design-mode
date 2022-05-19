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
  constructor(multiple:number){
    super()
    this.multiple = multiple
  }
  getResult(money:number){
    return money * (this as any).multiple
  }
}

class PayFullReduction extends PayContext{
  count:number= 0
  remain:number= 0
  constructor(count:number,remain:number){
    super()
    this.count = count
    this.remain = remain
  }
  getResult(money:number){
    let loseMoney = Math.floor( money / this.count ) * this.remain
    return money - loseMoney
  }
}

class PayFactory{
  sales:any = null
  constructor(type:number){
    switch(type){
      case 0:
        (this as any).sales = new PayCommon()
        break;
      case 1: 
        (this as any).sales = new PayDiscount(0.8)
        break;
      case 2:
        (this as any).sales = new PayFullReduction(300,100)
    }
  }
  getResult(money:number){
    return (this as any).sales.getAmount(money)
  }
}

function main(){
  let payMoney:number = 3000
  let money1 = new PayFactory(0)
  console.log(money1.getResult(payMoney))
  let money2 = new PayFactory(1)
  console.log(money2.getResult(payMoney))
  let money3 = new PayFactory(2)
  console.log(money3.getResult(payMoney))
}

main()