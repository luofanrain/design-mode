// 组合模式  将对象组合成树形结构以表示“部分整体”的层次结构，组合模式使得用户对单一对象的使用具有一致性
// 优点 基本对象会被组合成的组合对象，组合对象也可以组成更复杂的组合对象
interface CompanyList{
  [key:string]:Struck
}
abstract class Struck{
  chidrens:CompanyList = {}
  name:string
  add(target:Struck){}
  remove(target:Struck){}
  display(depath:number=0){}
}
class Depatment extends Struck {
  constructor(name:string){
    super()
    this.name = name
  }
  display(depath: number = 0): void {
    let prefix = new Array(depath).fill('-').join('')
    console.log(`-${prefix}${this.name}`)
    for(let key in this.chidrens){
      this.chidrens[key].display(depath+2)
    }
  }
  add(target:Struck){
    this.chidrens[target.name] = target
  }
  remove(target:Struck){
    delete this.chidrens[target.name]
  }
}

class BaseCompany extends Depatment{} // 公司
class Office extends Depatment{} // 办事处
class Financial extends Depatment{} // 财务部
class Reception extends Depatment{} // 前台
class Personnel extends Depatment{} // 人事
class Project extends Depatment{} // 项目部

function main(){
  let company = new BaseCompany('川川总公司')
  let office1 = new Office('成都办事处')
  let office2 = new Office('重庆办事处')
  company.add(new Financial('总公司财务部'))
  company.add(new Reception('总公司前台'))
  company.add(new Personnel('总公司人事'))
  company.add(new Project('总公司项目部'))
  office1.add(new Financial('成都办事处财务部'))
  office1.add(new Reception('成都办事处前台'))
  office1.add(new Personnel('成都办事处人事'))
  office1.add(new Project('成都办事处项目部'))
  company.add(office1)
  office2.add(new Financial('重庆办事处财务部'))
  office2.add(new Reception('重庆办事处前台'))
  office2.add(new Personnel('重庆办事处人事'))
  office2.add(new Project('重庆办事处项目部'))
  let office3 = new Office('綦江办事处')
  office3.add(new Reception('綦江办事处前台'))
  office3.add(new Project('綦江办事处项目部'))
  office2.add(office3)
  office3.remove(new Project('綦江办事处前台'))
  company.add(office2)
  company.display()
}

main()