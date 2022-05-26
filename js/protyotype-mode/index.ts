interface WorkItem {
    date:string,
    thing:string

}
class Person {
    name:string = ''
    age:number = 0
    height:number = 0
    weight:number = 0
    workList:Array<WorkItem> = []
    setBaseInfo(name:string,age:number,height:number,weight:number){
        this.name = name
        this.age = age
        this.height = height
        this.weight = weight
    }
    setWorkInfo(date:string,thing:string){
        let item:WorkItem = {
            date,
            thing
        }
        this.workList.push(item)

    }
    show(){
        console.log(`我叫${this.name},年龄${this.age}岁，身高${this.height}cm，体重${this.weight}kg`)
        this.workList.forEach((item:WorkItem)=>{
            console.log(`于${item.date},${item.thing}`)
        })
    }
    clone(item:Person){
        let keys = Object.keys(item)
        let person:Person = new Person()
        keys.forEach((key)=>{
            person[key] = this.deepCopy(item[key])
        })
        return person
    }
    deepCopy(item:any){
        let type = typeof item
        if(item instanceof Array) {
            let list:Array<any>= []
            item.forEach(val=>{
                list.push(this.clone(val))
            })
            return list
        }
        if(type == "object") return this.clone(item)
        if(type == "function") return function(...args){
            return eval(`(${item.toString()})(...args)`)
        }
        if(item )
        return item
    }
}

function main(){
    let person = new Person()
    person.setBaseInfo('李四',18,173,65)
    person.setWorkInfo('2018年9月-2019年6月','在广达上班')
    let person1 = person.clone(person)
    person1.setBaseInfo('李四',19,183,75)
    person1.setWorkInfo('2019年6月-2020年9月','在从重庆上班')
    let person2 = person.clone(person)
    person2.setBaseInfo('李四',22,200,90)
    person2.setWorkInfo('2020年6月-2021年9月','在成都上班')
    person.show()
    person1.show()
    person2.show()
    
}


main()