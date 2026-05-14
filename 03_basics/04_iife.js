//Immediately Invoked Function Expressions (IIFE)


(function Chai(){
    //named IIFE
    console.log(`DB Connected`);
})();

((name) => {
    //unknow iife
    console.log(`DB Connected two ${name}`);
    
})('Debojeet')

