// 访问者模式 表示一个作用于某对象结构中的个元素的操作。它使你可以在不改变个元素的类的前提下定义作用于这些元素的新操作

abstract class VisitorHuman{
  name:string
  observe(visitor:Mood){}
}

class Adult extends VisitorHuman{
  name:string = "成年人"
  observe(visitor:Mood){
    visitor.generateAdult(this)
  }
  
}

class Child extends VisitorHuman{
  name:string = "小孩"
  observe(visitor:Mood){
    visitor.generateChild(this)
  }
  
}


abstract class Mood{
  mood:string
  generateAdult(human:VisitorHuman){}
  generateChild(human:VisitorHuman){}
}


class Happy extends Mood{
  mood:string = "开心"
  generateAdult(human: VisitorHuman): void {
    console.log(`${human.name}的心情是【${this.mood}】,所以我要打游戏`)
  }
  generateChild(human: VisitorHuman): void {
    console.log(`${human.name}的心情是【${this.mood}】,所以我要看电视`)
  }
}

class Sad extends Mood{
  mood:string = "不开心"
  generateAdult(human: VisitorHuman): void {
    console.log(`${human.name}的心情是【${this.mood}】,所以我要沉默思考`)
  }
  generateChild(human: VisitorHuman): void {
    console.log(`${human.name}的心情是【${this.mood}】,所以我要哭泣`)
  }
}

class Boring extends Mood{
  mood:string = "无聊"
  generateAdult(human: VisitorHuman): void {
    console.log(`${human.name}的心情是【${this.mood}】,所以我要看小说`)
  }
  generateChild(human: VisitorHuman): void {
    console.log(`${human.name}的心情是【${this.mood}】,所以我要玩儿玩具`)
  }
}

interface HumanItem {
  [key:string]:VisitorHuman
}

class ManageHuman {
  humans:HumanItem = {}
  add(human:VisitorHuman){
    console.log(human)
    this.humans[human.name] = human
  }
  remove(human:VisitorHuman){
    delete this.humans[human.name]
  }
  observe(mood:Mood){
    for(let key in this.humans){
      let human = this.humans[key]
      human.observe(mood)
    }
  }
}

function main(){
  let manage = new ManageHuman()
  manage.add(new Adult())
  manage.add(new Child())
  
  let mood:Mood
  mood = new Happy()
  manage.observe(mood)
  mood = new Sad()
  manage.observe(mood)
  mood = new Boring()
  manage.observe(mood)
}

main()