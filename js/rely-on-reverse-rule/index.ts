// 依赖倒转原则 描述 子类和父类松耦合，不互相依赖  里氏代换原则 子类型必须能够替换掉他们的父类型


class Transport{
    fertility(){}
    freight(){}
    destory(){}
}


class Car extends Transport{
    name:string = '汽车'
    fertility(): void {
        console.log(`${this.name}产生了`)
    }
    freight(): void {
        console.log(`${this.name}运货了`)
    }
    destory(): void {
        console.log(`${this.name}销毁了`)
    }
}

class Ship extends Transport{
    name:string = '轮船'
    fertility(): void {
        console.log(`${this.name}产生了`)
    }
    freight(): void {
        console.log(`${this.name}运货了`)
    }
    destory(): void {
        console.log(`${this.name}销毁了`)
    }
}

class Train extends Transport{
    name:string = '火车'
    fertility(): void {
        console.log(`${this.name}产生了`)
    }
    freight(): void {
        console.log(`${this.name}运货了`)
    }
    destory(): void {
        console.log(`${this.name}销毁了`)
    }
}


class TransportFactory{
    carrier:Transport
    constructor(carrier:Transport){
        this.carrier = carrier
    }    
    fertility(): void {
        this.carrier.fertility()
    }
    freight(): void {
        this.carrier.freight()
    }
    destory(): void {
        this.carrier.destory()
    }
}


function main(){
    let exec = new TransportFactory(new Car())
    exec.fertility()
    exec.freight()
    exec.destory()

}


main()