// 中介者模式 用一个中介对象来封装一系列的对象交互，中介者使各个对象不需要显示的相互引用，从而使其耦合松散，而且可以独立的改变他们之间的交互

type Identity = Landlord | Civilians
class Mediation{
  landlord:Landlord
  civilian:Civilians
  notify(identity:Identity,message:string){
    let role:Identity = identity.role == this.landlord.role ? this.civilian : this.landlord
    role.getMessage(message)
  }
}

class MediationHuman{
  name:string
  role:number
  mediation:Mediation
  constructor(name:string,mediation:Mediation){
    this.mediation = mediation
    this.name = name
  }
  getMessage(message:string){
    console.log('to',this.name,message)
  }
}

class Landlord extends MediationHuman{
  role:number = 1
  notify(){
    this.mediation.notify(this,"没有房子了哟")
  }
}

class Civilians extends MediationHuman{
  role:number = 0
  notify(){
    this.mediation.notify(this,"我需要房子")
  }
}




function main(){
  let mediation = new Mediation()
  mediation.landlord = new Landlord('地主',mediation)
  mediation.civilian = new Civilians('农民',mediation)  
  mediation.civilian.notify()
  mediation.landlord.notify()
}

main()