// 备忘录模式 在不破坏封装性的前提下，捕获一个对象的内部状态，并在该对象之外保存这个状态，这样以后就可以对这个对象进行恢复
// 缺点，如果对象数据多，消耗内存比较大
// 优点 可以恢复初始化状态

interface Roles{
  [key:string]:GameRole
}
abstract class Memo{
  roles:Roles = {}
  saveRole(role:GameRole){}
}

class BaseMemo extends Memo{
  saveRole(role: GameRole): void {
    this.roles[role.id] = new GameRole(role.HP,role.MP,role.damage)
  }
  getRole(role:GameRole){
    return this.roles[role.id]
  }
}

const generaId = (function(){
  let id = 1;
  return function(){
    return id++
  }
})()

class GameRole{
  HP:number
  MP:number
  damage:number
  id:number
  constructor(HP:number,MP:number,damage:number){
    this.HP = HP
    this.MP = MP
    this.damage = damage
    this.id = generaId()
  }
  fight(){
    this.HP = 0
    this.MP = 0
    this.damage = 0
  }
  display(){
    console.log("生命值：",this.HP,"魔法值：",this.MP,"攻击力：",this.damage)
  }
  restore(role:GameRole){
    this.HP = role.HP
    this.MP = role.MP
    this.damage = role.damage
  }
}

function main(){
  let memo = new BaseMemo()
  let role = new GameRole(100,100,100)
  role.display()
  memo.saveRole(role)
  role.fight()
  role.display()
  role.restore(memo.getRole(role))
  role.display()
  
  let role1 = new GameRole(98,98,98)
  role1.display()
  memo.saveRole(role1)
  role1.fight()
  role1.display()
  role1.restore(memo.getRole(role1))
  role1.display()
}

main()



