// 外观模式  核心逻辑  为子系统提供统一的接口，高层统一处理


class  Stock{
    pay(){}
}


class Bonds extends Stock {
    pay(): void {
        console.log('国债被买了')
    }
}
class Wine extends Stock {
    pay(): void {
        console.log('贵州茅台股票被买了')
    }
}
class Drug extends Stock {
    pay(): void {
        console.log('医药股票被买了')
    }
}


class Fund {
    bonds:Stock
    wine:Stock
    drug:Stock
    constructor(){
        this.bonds = new Bonds()
        this.wine = new Wine()
        this.drug = new Drug()
    }
    payOne(){
        this.bonds.pay()
        this.wine.pay()
    }
    payTwo(){
        this.bonds.pay()
        this.drug.pay()
    }
}


function main(){
    let fund = new Fund()
    fund.payOne()
    fund.payTwo()
}

main()