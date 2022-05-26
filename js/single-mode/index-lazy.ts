


class Human{
    private static instance:Human
    public name:string = ''
    private constructor(name:string){
        this.name = name
    }

    static getInstance(name:string){
        if(!this.instance){
            this.instance = new Human(name) 
        }
        return this.instance
    }
}


function main(){
    let person = Human.getInstance('李四')
    console.log(person.name)
    let person1 = Human.getInstance('张三')
    console.log(person1.name)
    
}

main()