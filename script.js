// 1. Build an object that represent an employee at the taco shop.
// 2. The employee object should have the following properties:
// - a name
// - a startDate
// - a jobTitle
// - a payRate
// - a favoriteTaco
// - an array of menu items they know how to make

const joe ={
    name: "Joe Burrito",
    startDate: "August 30",
jobTitle: "burrito master",
payRate: 10.50,
favoriteTaco: "black bean",
recipeKnowledge: ["bean burrito", "jackfruit taco", "veggie quesadilla"],
    }
  
    const beth ={
        name: "Beth Taco",
        startDate: "August 25",
    jobTitle: "burrito master",
    payRate: 10.50,
    favoriteTaco: "jackfruit taco",
    recipeKnowledge: ["layered burrito", "jackfruit taco", "veggie quesadilla"],
        }

        const carl ={
            name: "Carl Queso",
            startDate: "August 20",
        jobTitle: "queso master",
        payRate: 11.50,
        favoriteTaco: "veggie taco",
        recipeKnowledge: ["veggie taco","bean burrito", "jackfruit taco", "veggie quesadilla"],
            }

// Build an object called tacoShopStaff

// One of its properties should be called employees. This property should hold an array. Store the employee objects you created in the previous lightning exercise in this array.

// Your tacoShopStaff object should have a method called hireEmployee. It should take a parameter of a new employee and use the .push() method to add that new employee to the tacoShopStaff's array of employees.

// Your tacoShopStaff object should have another method called fireEveryone. It should reassign the employees array to be an empty array.


// const tacoShopStaff = {
//     employees: [joe, carl],
//     hireEmployee: function(newEmployee){
// this.employees.push(newEmployee)
//     },
//     fireEmployee: function(){
//         for(i=0; i< this.employees.length; i++){
// this.employees.splice()
//         }
//             }
// }

// tacoShopStaff.hireEmployee(beth)
// console.log(tacoShopStaff.employees)

// tacoShopStaff.fireEmployee(joe)
// console.log(tacoShopStaff.employees)

// // practice excercises 
// // Create an object that represents your pet.

// // Name property with a string value.
// // Species property with a string value.
// // Nicknames property with an array value. Array contains strings.
// // Age property with an integer value

// const myPet = {
//     name: "Oreo",
//     species: "dog",
//     nicknames: ["fluff monster", "boo boo"],
//     age: 5,
//     favoriteToy: [],
//     play: function(toy){
//         if (toy.includes( "squeaky")) {
//            this.favoriteToy.push(toy)
//         }
//     },
    
//     bark: function (something) {
//             window.alert(`Oreo barks 'WOOF!' at ${something}`)},
//     scratch: function(bodyPart){
//         window.alert(`${myPet.name} scratches his ${bodyPart}`)
//     }, 
//     pukes:function(item) {
// window.alert(`${myPet.name} puked up ${item}`)
//     }       
// }

// // myPet.bark("neighbor")
// // myPet.scratch("leg")
// // myPet.pukes("grass")
// myPet.play("squeaky ball")
// console.log(myPet.favoriteToy)

// The object should have a property named orders that is an array. You will need to define this.
// Define a function to represent the behavior of placing an order. It should accept one argument named meal. This argument will be an object. There is starter code provided.
// Define a function to represent the behavior of getting all orders. It should return the order property (hint: this). You will need to define this.
// Each meal object should have three properties: sandwichType, fries (true or false), and drinkSize.

const restaurant = {
    name: "Bob's Burgers",
    orders: [],
    placeOrder: function (mealItem) {
        this.orders.push(mealItem)
    },
    getOrder: function () {
        console.log(this.orders)
    }
}

const chickenComboMeal = {
sandwichType: "chicken",
fries: true,
drinkSize: ["small", "medium", "large"]
}

const burgerComboMeal = {
    sandwichType: "burger",
    fries: false,
    drinkSize: ["small", "medium", "large"]
    }

// Place an order
restaurant.placeOrder(chickenComboMeal)
restaurant.placeOrder(burgerComboMeal)


// Invoke the function to return the list of all orders
restaurant.getOrder()
// Output all orders to the console using console.table()
console.table(restaurant.orders)

// DOM excercise
// Use document.querySelector to get a reference to the element with an id of "main-header"
// const heading = document.querySelector("#main-header")

// // Log the reference to the console

// console.log(heading)

// // Add a class of "blue-text" to the element

// heading.classList.add("blue-text")

// Add a style rule for the "blue-text" class to your style.css sheet

// excercise 2
// Use document.querySelectorAll to select all of the elements in your HTML file with a class of "body-text"
// const body = document.querySelectorAll(".body-text")

// // Log the reference to the console
// console.log(body)

// // Loop through the NodeList of elements and set the .innerHTML property of each element to "Hello, world!"

// for (let i=0; i< body.length; i++){
// body[i].innerHTML="Hello, world!"
// }
