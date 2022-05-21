// 责任链模式 每个人每个职位做自己的事情
type LeaderChildren = Array<Leader>
type LeaderItem = Leader | null

@bindleader()
class Leader{
    childrens:LeaderChildren = []
    bind(child:Leader){
        (this as any).leader = child
    }
    askReponsebility(thing:string){
        if((this as any).doSomething.includes(thing)){
            console.log(`这是${(this as any).name}做的`)
        }else{
            if(!(this as any).leader){
                console.log(`公司里${(this as any).name}最大,这件事都做不了${thing}`)
                return
            }
            (this as any).leader.askReponsebility(thing)
        }
    }
}

function bindleader(){
    return function(target:any){
        target.prototype.leader = null
    }
}
function verityParams(target:any,name:string,descriptor:any){
    let targetValue = descriptor.value;
    descriptor.value = function([who,thing]:[Leader,string]){
        
        if(!who){
            console.log("公司没有这个人")
            return
        }
        if(!thing){
            console.log("你在悄咪咪问什么")
            return
        }
        return targetValue.apply(this,arguments)
    }
    return descriptor
}
class Boss extends Leader {
    name='boss'
    doSomething = ['拉投资','发工资']
}

class Manager extends Leader{
    name='manager'
    doSomething = ['拿需求','安排任务']
}
class Employees extends Leader{
    name='employees'
    doSomething = ['做事','摸鱼']
}

class Company {
    boss:Boss
    manager:Manager
    employees:Employees
    constructor(){
        this.boss = new Boss()
        this.manager = new Manager()
        this.manager.bind(this.boss)
        this.employees = new Employees()
        this.employees.bind(this.manager)
    }
    @verityParams
    askReponsebility(who:string,thing:string){
        this[who].askReponsebility(thing)
    }

}

function main(){
    let company = new Company()
    company.askReponsebility('employees','发工资')
    company.askReponsebility('manager','拿需求')
    company.askReponsebility('boss','发工资')
    company.askReponsebility('employees','做事1')
}
main()
  
  