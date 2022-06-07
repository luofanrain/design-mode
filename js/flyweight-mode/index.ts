// 享元模式 运用共享技术有效的支持大量细粒度对象


class User{
  name:string
  constructor(name:string){
    this.name = name
  }
}

class WebSite{
  type:string
  name:string
  user:User
  constructor(type:string,name:string,user:User){
    this.name = name
    this.type = type
    this.user = user
  }
}


class WebManage{
  webSiteList:Array<WebSite> = []
  add(webSite:WebSite){
    this.webSiteList.push(webSite)
  }
  display(){
    this.webSiteList.forEach((webSite:WebSite)=>{
      console.log(`申请人：${webSite.user.name}，类型：【${webSite.type}】，网站名【${webSite.name}】`)
    })
  }

}
function main(){
  let webManage = new WebManage()
  let web1 = new WebSite('官网','华西医院官网',new User('李四'))
  let web2 = new WebSite('博彩','王麻子博彩',new User('王麻子'))
  let web3 = new WebSite('官网','三个臭皮匠官网',new User('赵三'))
  let web4 = new WebSite('博彩','魅力博彩',new User('黄美丽'))
  let web5 = new WebSite('SASS平台','丝泉健身SASS平台',new User('杨思泉'))
  let web6 = new WebSite('SASS平台','四川李颖语音识别SASS平台',new User('邓丽颖'))
  let web7 = new WebSite('官网','四川王麻子公司官网',new User('王麻子'))
  webManage.add(web1)
  webManage.add(web2)
  webManage.add(web3)
  webManage.add(web4)
  webManage.add(web5)
  webManage.add(web6)
  webManage.add(web7)
  webManage.display()
}
main()