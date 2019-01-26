// 1. Copy and paste your prototype in here and refactor into class syntax.
//function CubodidMaker(props){
//    this.length = props.length;
//    this.width = props.width;
//    this.height = props.height;
////    this.vol = function(l,w,h){
////        return l*w*h
////    }
////
//}

class CubodidMaker{
    constructor(properties){
        this.length = properties.length;
        this.width = properties.width;
        this.height = properties.height;
    }
    volume(){
        return this.length*this.width*this.height
    }
    surfaceArea(){
        return 2*(this.length * this.width + this.length * this.height + this.width * this.height)
    }
}

//
//
//CubodidMaker.prototype.volume = function(l,w,h){
//    return this.length*this.width*this.height
//}
//CubodidMaker.prototype.surfaceArea = function(doINeedValueHere){
//    return 2*(this.length * this.width + this.length * this.height + this.width * this.height)
//}
//
const CUBE2 = new CubodidMaker({
    length: 4,
    width: 5,
    height: 5
});



// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(CUBE2.volume()); // 100
console.log(CUBE2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
