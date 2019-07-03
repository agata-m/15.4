function Phone(brand, price, color) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.customerChoice = function() {
        console.log('You have chosen ' + this.brand + ', ' + this.color + ', for ' + this.price + '.');
    }
}

Phone.prototype.printInfo = function() {
    console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ', and the price is ' + this.price + '.');
}

var samsungGalaxyS6 = new Phone('Samsung', 2000, 'black');
var iPhone6S = new Phone('Apple', 2250, 'silver');
var onePlusOne = new Phone('OnePlus', 2100, 'white');

samsungGalaxyS6.printInfo();
samsungGalaxyS6.customerChoice();

iPhone6S.printInfo();
iPhone6S.customerChoice();


onePlusOne.printInfo();
onePlusOne.customerChoice();