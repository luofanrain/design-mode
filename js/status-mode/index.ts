// 状态模式 当一个对象的你在状态改变时候允许改变其行为，这个对象看起来像是改变了其类

class State {
    state:Body
    year:number = 0
    dead:Boolean = false
    setState(state:Body){
        this.state = state
    }
    growUp(){
        this.year += 1
    }
    readState(){
        this.state.readState(this)
    }
}
class Body {
    readState(state:State): void{}
}
class To30 extends Body {
    readState(state:State): void {
        if(state.year < 30){
            console.log("我的身体很健康")
        }else{
            state.setState(new To40())
        }
    }
}
class To40 extends Body {
    readState(state:State): void {
        if(state.year < 40){
            console.log("我的身体有点不行了")
        }else{
            state.setState(new To50())
        }
    }
}
class To50 extends Body {
    readState(state:State): void {
        if(state.year < 50){
            console.log("我快成功了")
        }else{
            state.setState(new To60())
        }
    }
}
class To60 extends Body {
    readState(state:State): void {
        if(state.dead) {
            console.log("我死了")
            return;
        }
        if(state.year < 60){
            console.log("我的身体有点不行了")
        }else{
            console.log("我是入土之人，不想说话了")
        }
    }
}


function main(){
    let state = new State()
    let body = new To30()
    state.setState(body)
    for(;state.year<100;){
        state.growUp()
        if(state.year == 60) state.dead = true
        state.readState()
    }
}

main()