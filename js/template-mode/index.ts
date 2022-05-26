// 模板方法模式  要点 提供一个通用的代码服用平台 把阔以复用的操作归类程一个操作


class Template {
    writeFooter() {
        throw new Error("Method not implemented.")
    }
    writeContent() {
        throw new Error("Method not implemented.")
    }
    writeTitle() {
        throw new Error("Method not implemented.")
    }
    output = () =>{
        this.writeTitle()
        this.writeContent()
        this.writeFooter()
    }
}

class Resume extends Template {
    writeTitle(){
        console.log("写入简历标题")
    }
    writeContent(){
        console.log("写入简历内容")
    }
    writeFooter(){
        console.log("写入简历结尾")
    }
}
class Report extends Template {
    writeTitle(){
        console.log("写入海报标题")
    }
    writeContent(){
        console.log("写入海报内容")
    }
    writeFooter(){
        console.log("写入海报结尾")
    }
}


function main(){
    let resume:Template = new Resume()
    resume.output()
    let report:Template = new Report()
    report.output()
}


main()