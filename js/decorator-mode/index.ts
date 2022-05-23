// 装饰器模式 核心要点 在已有的功能上加上新的功能 

class Shopping{
    pay(){}
}


class Clothes extends Shopping{
    pay(){
        console.log('衣服被购买了')
    }
}
class Food extends Shopping{
    pay(){
        console.log('食物被购买了')
    }
}

class GoodManager{
    exec:Shopping
    constructor(exec:Shopping){
        this.exec = exec
    }
    pay(count:number){
        for(let index=0;index<count;index++){
            this.exec.pay()
        }
    }                              
}


function main(){
    let clothes = new GoodManager(new Clothes())
    clothes.pay(3)
    let food = new GoodManager(new Food())
    food.pay(2)
}

main()