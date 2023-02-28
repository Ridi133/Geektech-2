// 1) Создать класс Cars с парметрами model, color, wheels (количество колёс)

class Cars{
    constructor(option){
        this.model = option.model;
        this.color = option.color;
        this.wheels = option.wheels;
    }
    start(){
        console.log("Машина заведена"); 
    }    
}

class Trucks extends Cars{
    constructor(option){
        super(option);
        this.design = option.design;
    }
}

class Motorcycles extends Cars{
    constructor(option){
        super(option);
        this.controllability = option.controllability;
    }
}

class PassengerСars extends Cars{
    constructor(option){
        super(option);
        this.PassengerSeats = option.PassengerSeats;
    }
}


const trucks = new Trucks({
    model: 'Cybertruck',
    color: 'gray',
    wheels: 4,
    design: "10 / 10"
})
console.log(trucks);
trucks.start();

const motorcycles = new Motorcycles({
    model: 'Yamaha R6',
    color: 'blue',
    wheels: 2,
    controllability: "5 / 6",
})
console.log(motorcycles);
motorcycles.start();

const passengerСars = new PassengerСars({
    model: 'Lexus RX350',
    color: 'White',
    wheels: 4,
    PassengerSeats: "5",
})
console.log(passengerСars);
passengerСars.start();

// 2) Сверстать светофор из ДЗ4 и реализовать его через классы.

class Traffic {
    constructor(selector) {
        this.$element = document.querySelector(selector)
    }

    hide() {
        this.$element.style.backgroundColor = 'white'
    }

    show() {
        this.$element.style.display = 'block'
    }
}

class TrafficLight extends Traffic {
    constructor(options) {
        super(options.selector);
        this.$element.style.width = this.$element.style.height = options.pxTl + 'px'
        this.$element.style.border = options.colorOfTL + ' solid 1px'
        this.$element.style.borderRadius = options.radiusTl + '%'
        this.$element.style.backgroundColor = options.colorTL
    }
}

const redOne = new TrafficLight({
    selector: '.redLit',
    pxTl: 100,
    colorOfTL: 'black',
    radiusTl: 50,
    colorTL: 'red'
})

const yellowOne = new TrafficLight({
    selector: '.yellowLit',
    pxTl: 100,
    colorOfTL: 'black',
    radiusTl: 50,
    colorTL: 'yellow'
    
})

const greenOne = new TrafficLight({
    selector: '.greenLit',
    pxTl: 100,
    colorOfTL: 'black',
    radiusTl: 50,
    colorTL: 'green'
})

let askColor = prompt('Выберите цвет светофора')
if(askColor.toLowerCase() === 'красный'){
    greenOne.hide()
    yellowOne.hide()
}
else if(askColor.toLowerCase() === 'жёлтый'){
    redOne.hide()
    greenOne.hide()
}
else if(askColor.toLowerCase() === 'зелёный'){
    redOne.hide()
    yellowOne.hide()
    
}
else{
    alert("Error")
}

