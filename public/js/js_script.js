function MenuItem(burger_name, kCal, img, gluten, lactose) {
    this.name = burger_name;
    this.kCal =kCal;
    this.img =img;
    this.gluten = gluten;
    this.lactose = lactose;
    this.namekCal = function() {
        return this.name + " "+ this.kCal;
    };
}

let burger1 = new MenuItem("Chicken", "1000 kCal","./img/chicken.jpg", false, true);
let burger2 = new MenuItem("Bacon", "1300 kCal", "./img/bacon.jpg", true, false);
let burger3 = new MenuItem("Halumni", "1200 kCal", "./img/halumni.jpg", true, true);
let burger4 = new MenuItem("Beef", "1800 kCal", "./img/double.jpg", false, false);
let burger5 = new MenuItem("Pork", "1900 kCal", "./img/burger.jpg",true, false);

let menu_array = [burger1,burger2,burger3, burger4, burger5];


let myBurgers = document.getElementsByClassName("burgers");

/*for (let burger of food) {
    console.log(Object.values(burger).length);
    let div = document.createElement("div");

    let heading = document.createElement("h3");
    let headingtext = document.createTextNode(burger.name);
    heading.setAttribute("class", "burger_heading");

    let ul = document.createElement("ul");

    let img = document.createElement("img");
    img.src = burger.img;
    img.width = "200";
    img.height = "180";

    let li = document.createElement('li');
    li.appendChild(document.createTextNode(burger.kCal + " kCal"));
    ul.appendChild(li);

    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = "value";
    checkbox.id = "id";

    var label = document.createElement('label');
    label.htmlFor = "id";

    label.appendChild(document.createTextNode('Add '+ burger.name));

    if (burger.gluten) {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode("contains gluten"));
        ul.appendChild(li);
    }

    if (burger.lactose) {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode("contains lactose"));
        ul.appendChild(li);
    }
    heading.appendChild(headingtext);
    div.appendChild(heading);
    div.appendChild(img);
    div.appendChild(ul);
    div.appendChild(checkbox);
    div.appendChild(label);
    myBurgers[0].appendChild(div);
}*/

/*let myButton = document.getElementById("order");
myButton.addEventListener("click", ordering);

function ordering (){
    console.log("Button clicked")
}*/

function getInput() {
    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let street = document.getElementById("street").value;
    let house = document.getElementById("house").value;
    let payment = document.getElementById("payment").value;
    let gender = document.getElementsByName('gender');
    let selected;
    for(let i = 0; i < gender.length; i++){
        if(gender[i].checked){
            selected = gender[i].value;
        }
    }
    let burger = document.getElementsByName("burgerselection");
    let burgerarray = [];
    for(let i = 0; i < burger.length; i++){
        if(gender[i].checked){
            burgerarray.append(gender[i].value);
        }
    }
    console.log([fullname,email,street,house,payment,selected, burgerarray]);
    return [fullname,email,street,house,payment,selected, burgerarray];
}