import {rerenderRoot} from "./render";

const State = {
    prob: [
        {name: "Sergey"},
        {name: "Nikolay"},
    ],
    listTo: [
        {id: "viktor", name: "Viktor"},
        {id: "stepan", name: "Stepan"},
        {id: "oleg", name: "Oleg"},
        {id: "vova", name: "Vova"},
        {id: "gosha", name: "Gosha"},
        {id: "luda", name: "Luda"},
    ],
    cars: [
        {name: "Bmw", id: "1", sale: "sale1", price: 121},
        {name: "Bmw1", id: "2", sale: "sale2", price: 122},
        {name: "Bmw2", id: "3", sale: "sale3", price: 123},
        {name: "Bmw3", id: "4", sale: "sale4", price: 124},
        {name: "Bmw4", id: "5", sale: "sale5", price: 125},
        {name: "Bmw5", id: "6", sale: "sale6", price: 126},
    ],
    test: [
        {name: "Viktor"},
        {name: "Yuriy"}
    ],
    newTextPage: "Yuriy",
    //-----------------------------------------//

    prod: [
        {item: "say hello"},
        {item: "how is your business"}
    ],
    //-----------------------------------------//

    about: [
        {name: "Viktor"},
        {name: "Oleg"},
        {name: "Bolt"},
    ],
    aboutPost: "Viktor",
    newPostText: "It-kama",
};
window.state = State

export let addlistNew = (name) => {
    let newName = {
        id: "0",
        name: name
    }
    State.aboutPost.push(newName)
    rerenderRoot(State)
}
export let addTextArea2 = (name) => {
    let newProd = {
        item: name,
    }
    State.prod.push(newProd)
    rerenderRoot(State)
}
export let addCars = (newNameCar) => {
    let newCars = {
        name: newNameCar,
        id: "1",
        sale: "1",
        price: 1
    }
    State.cars.push(newCars)
    rerenderRoot(State)
}
export let addTextArea = (name) => {
    let newList = {
        name: name,
    };
    State.test.push(newList)
    rerenderRoot(State);
};
export let addAboutRef = (message) => {
    let newAbout = {
        name: message,
    }
    State.about.push(newAbout)
    rerenderRoot(State)
}
export let updateNewPostText = (text) => {
    State.newPostText = text
    rerenderRoot(State)
}

//-----------------------------------------//
export let probData = (name) => {
    let newProbData = {
        name: name
    }
    State.prob.push(newProbData)
    rerenderRoot()
}
//-----------------------------------------//



export default State;
