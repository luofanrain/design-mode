// 迪米特法则，核心要点，多个同级之间不必有通信，，只需要第三方统一分配即可


class Leader{
    childrens:Array<Employees> = []
    addChild(person:Employees){
        this.childrens.push(person)
    }
    distribution(targetName:string){
        let alternativeList  = this.childrens.filter((person)=>person.status == 'free')
        if(alternativeList.length == 0){
            console.log("系统繁忙，等5秒钟在询问把")
            setTimeout(()=>{ this.distribution(targetName) },6000)
            return;
        }else{
            let person = alternativeList[0]
            person.status = 'busy'
            person.install(targetName)
        }
    }
}

class Employees{
    name:string = ''
    status:string = 'free'
    constructor(name:string,status:string){
        this.name = name
        this.status = status
    }
    install(targetName:string){
        console.log(`${this.name}正在给${targetName}安装电脑`)
        this.complete(targetName)
    }
    complete(targetName:string){
        setTimeout(()=>{
            console.log(`${this.name}装好了${targetName}的电脑`)
            this.status = 'free'
        },5000)
    }
}


function main(){
    let manage = new Leader()
    manage.addChild(new Employees('张三','free'))
    manage.addChild(new Employees('李四','free'))
    manage.addChild(new Employees('王二','free'))  
    manage.distribution('1号')
    manage.distribution('2号')
    manage.distribution('3号')
    manage.distribution('4号')
    manage.distribution('5号')
    manage.distribution('6号')
    manage.distribution('7号')
}


main()