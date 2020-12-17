let getPet = function(){
    petKind = prompt("Please Enter the pet you want: cat, dog or bird:");
    let pet = '';

    while (petKind !== 'cat' && petKind !== 'dog' && petKind !== 'bird'){
        petKind = prompt("Please Enter one of the three kind cat, dog, or bird :");
    }

    if (petKind === 'cat'){
        pet = '<img src="images/cat.png" />';
    }else if (petKind === 'dog'){
        pet = '<img src="images/dog.png" />';
    }else if (petKind === 'bird'){
        pet = '<img src="images/bird.png" />';
    }

    return pet;

}

let howMany = function(){
    let count = prompt('How many pet do you want to order?');

    while (count === '' || isNaN(count)){
        count = prompt('Please enter a number!!');
    }
    return count;
}

let showOrder = function() {
    let pet = getPet();
    let total = howMany();
    let result = '';

    for (let i = 0; i < total; i++){
        result = result + '<p>Pet #' + i + ' ' + pet + '</p>';

    }
    return result;
}