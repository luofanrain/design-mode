

class Human{
    static person:Human = new Human('李四')
    public name:string = ''
    private constructor(name:string){
        this.name = name
    }

    static getInstance(){
        return Human.person
    }
}


function main(){
    let person:Human = Human.getInstance()
    console.log(person.name)
    let person1:Human = Human.getInstance()
    console.log(person1.name)
    
}

main()