class Form {
    constructor(){
        this.input = createInput("").attribute("placeholder", "name")
        this.button = createButton("play")
        this.greeting = createElement("h4")
        this. title = createElement("h2")
    }
    display(){
        this.title.html("Car Racing Game") 
        this.title.position(displayWidth/2,10)
        this.input.position(displayWidth/2,displayHeight/2.5)
        this.button.position(displayWidth/2,displayHeight/2)
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name = this.input.value()
            playerCount +=1
            player.index = playerCount
            player.update()
            player.updateCount(playerCount)
            this.greeting.html("Hello  " + player.name)
            this.greeting.position(displayWidth/2,displayHeight/2)
        })
    }
    hide(){
        this.greeting.hide()
        this.button.hide()
        this.input.hide() 
        this.title.hide()
    }
}