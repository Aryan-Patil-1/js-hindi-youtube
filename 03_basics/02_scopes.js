//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}


/*
//Story of scopes begin with three keywords => let var const
var a = 1;
let b = 2;
const c = 3;
console.log(a);
console.log(b);
console.log(c);

// Curly braces {} => Scope

//Problems
if(true){
    let d = 10;
    const e = 20;
    var f = 30; //It can be redelcared plus re-initialized
}
console.log(d); //This will throw error as we are trying to access d outside block of if conditional
console.log(e); //This will also throw error are we are trying to access e outside block of if conditional
console.log(f); //This will print 30 => And that is a problem, it shouldn't be accessed the block

//Note! => code written in global scope can be accessed in the block scope but the vice-versa is not true

//Note! => Global Scope in console and node js environment (production code) is different
*/