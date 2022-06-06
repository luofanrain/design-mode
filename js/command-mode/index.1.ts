// 命令模式 将一个请求封装为一个对象，从而使你可用不同的请求对客户进行参数化，对请求排队或记录请求日志，以及可支持撤销操作
interface CustomerList {
  [key:string]:Customer
}

interface Foods{
  [key:string]:number
}

abstract class Barbecue{}

abstract class Manage {
  customers:CustomerList
  addCustomers(customer:Customer){}
  removeCustomer(customer:Customer){}
  isDone(){}
  getItem(){}
}

class BaseBarbecue extends Barbecue{
  exec(target:ManageFactory,customer:Customer){
    let content = ''
    for(let key in customer.foods){
      content += `烧烤：${key}，数量:${customer.foods[key]};`
    }
    console.log(`开始烧烤,${customer.name}的单子，${content}`)
    setTimeout(()=>{
      console.log(`烧烤完成,下一单\n\n`)
      target.notify(customer)
    },1000)
  }
}

class BaseManage extends Manage{
  customers:CustomerList = {}
  addCustomers(customer:Customer){
    if(this.customers[customer.name]){
      console.log('点餐重复')
      return
    }
    this.customers[customer.name] = customer
  }
  removeCustomer(customer:Customer){
    delete this.customers[customer.name]
  }
  isDone(){
    return Object.keys(this.customers).length == 0
  }
  getItem(){
    let key = Object.keys(this.customers)[0]
    return this.customers[key]
  }
}

class Customer {
  name:string
  foods:Foods = {}
  constructor(name:string,foods:Foods){
    this.name = name
    this.foods = foods
  }
}

class ManageFactory{
  barbecue:BaseBarbecue
  manager:BaseManage
  constructor(barbecue:BaseBarbecue,manager:BaseManage){
    this.barbecue = barbecue
    this.manager = manager
  }
  notify(customer:Customer){
    this.manager.removeCustomer(customer)
    this.run()
  }
  addCustomer(customer:Customer){
    this.manager.addCustomers(customer)
  }
  removeCustomer(customer:Customer){
    this.manager.removeCustomer(customer)
  }
  run(){
    if(this.manager.isDone()){
      console.log('烤完了，可以休息了')
      return
    } 
    this.barbecue.exec(this,this.manager.getItem())
  }
}

function main(){
  let manage = new ManageFactory(new BaseBarbecue(),new BaseManage())
  let customer1 = new Customer('李四',{'鸡腿':Math.ceil(Math.random()*10),'鸡翅膀':Math.ceil(Math.random()*10)})
  let customer2 = new Customer('李四1',{'火腿':Math.ceil(Math.random()*10),'鸡皮':Math.ceil(Math.random()*10)})
  let customer3 = new Customer('李四2',{'馒头':Math.ceil(Math.random()*10),'鱼皮':Math.ceil(Math.random()*10)})
  let customer4 = new Customer('李四3',{'韭菜':Math.ceil(Math.random()*10),'豆皮':Math.ceil(Math.random()*10)})
  let customer5 = new Customer('李四4',{'豆干':Math.ceil(Math.random()*10),'苕皮':Math.ceil(Math.random()*10)})
  let customer6 = new Customer('李四5',{'鸡腿':Math.ceil(Math.random()*10),'鸡翅膀':Math.ceil(Math.random()*10)})
  let customer7 = new Customer('李四6',{'馒头':Math.ceil(Math.random()*10),'鱼皮':Math.ceil(Math.random()*10)})
  let customer8 = new Customer('李四7',{'韭菜':Math.ceil(Math.random()*10),'豆皮':Math.ceil(Math.random()*10)})
  let customer9 = new Customer('李四8',{'豆干':Math.ceil(Math.random()*10),'苕皮':Math.ceil(Math.random()*10)})
  let customer10 = new Customer('李四9',{'鸡腿':Math.ceil(Math.random()*10),'鸡翅膀':Math.ceil(Math.random()*10)})
  manage.addCustomer(customer1)
  manage.addCustomer(customer2)
  manage.addCustomer(customer3)
  manage.addCustomer(customer4)
  manage.addCustomer(customer5)
  manage.addCustomer(customer6)
  manage.run()
  console.log(22222)
  manage.addCustomer(customer7)
  manage.addCustomer(customer8)
  manage.addCustomer(customer9)
  manage.addCustomer(customer10)

}

main()