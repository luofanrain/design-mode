// 建造者模式 建造者模式是当创建复杂对象的算法应该独立于该对象组成部分以及他的装配方式适用模式
class Person {
    createHead(){}
    createBody(){}
    createHand(){}
    createLeg(){}
    createFoot(){}
    getResult(){
        this.createHead()
        this.createBody()
        this.createHand()
        this.createLeg()
        this.createFoot()
    }
}


class FatMan extends Person {
    createHead(){
        console.log("创建了一个胖子的头")
    }
    createBody(){
        console.log("创建了一个胖子的身体")
    }
    createHand(){
        console.log("创建了一个胖子的双手")
    }
    createLeg(){
        console.log("创建了一个胖子的双腿")
    }
    createFoot(){
        console.log("创建了一个胖子的双脚")
    }
}
class  SkinnyMan extends Person {
    createHead(){
        console.log("创建了一个胖子的头")
    }
    createBody(){
        console.log("创建了一个胖子的身体")
    }
    createHand(){
        console.log("创建了一个胖子的双手")
    }
    createLeg(){
        console.log("创建了一个胖子的双腿")
    }
    createFoot(){
        console.log("创建了一个胖子的双脚")
    }
}


class Builder {
    person:Person
    constructor(person:Person){
        this.person = person
    }
    build(){
        this.person.getResult()
    }
}

function main(){
    let builder = new Builder(new FatMan())
    builder.build()
    let builder1 = new Builder(new SkinnyMan())
    builder.build()
}


main()