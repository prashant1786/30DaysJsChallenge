// ------------------------------------------------------------------------Activity-1------------------------------------------------------------------------

var no_1=512;
console.log(no_1);

let str_1="hello Js";
console.log(str_1);


// ------------------------------------------------------------------------Activity-2------------------------------------------------------------------------

const bool_1=true;
console.log(bool_1);


// ------------------------------------------------------------------------Activity-3------------------------------------------------------------------------

//Primary - (bbnnssu) -callbyvalue

let no = 123; //number
console.log(typeof no);

let empty = null; //null
console.log(typeof empty);//type of null is object

let str = "String"; //string
console.log(typeof str);

let symbl = Symbol(123); //symbol
console.log(typeof symbl);

let bool = false; //true
console.log(typeof bool);

let bigint = BigInt(121); //121n
console.log(typeof bigint);

let undef ; //undef=undefined
console.log(typeof undef);

//non-primary-(object, array, function) --callbyreference
let obj1={
    a:"apple",
    b:"ball"
};
console.log(typeof obj1);//object

let arr1=['a',1,"apple",{a:5,b:6},()=>{}];
console.log(typeof arr1);//object

function fun1(){};
console.log(typeof fun1);//function Object


// ------------------------------------------------------------------------Activity-4------------------------------------------------------------------------

let value=150;
console.log(`initial value : ${value}`);
{
    let value='a';
    console.log(`inside block  : ${value}`);
    
}
console.log(`outside block  : ${value}`);

value="one hundred fifty";// reassigning value
console.log(`reassigned value : ${value}`);


// ------------------------------------------------------------------------Activity-5------------------------------------------------------------------------

const pi=22/7;
console.log(pi);
// pi=3.14; show error :(TypeError: Assignment to constant variable.)
// console.log(pi); 

