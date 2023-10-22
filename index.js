// const circle = {
//     radius : 1,
//     location : {
//         x : 1,
//         y : 1,
//     },
// };

// const circle2 = {
//     radius : 2,
//     location : {
//         x : 2,
//         y : 2,
//     },

// };

// Factory Function

function createCircle(radius){
    return {
        radius,
        draw: function(){
            console.log('draw')
        }
    }
}

const circle = createCircle(1)

// Constructor Function

function Circle(radius){
    this.radius = radius
    this.draw = function(){
        console.log('draw')
    }
}

const circle2 = new Circle(1)

console.log(Circle.length)

console.log(Circle.costructor)