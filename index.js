function receivesAFunction(return_func) {
    return return_func()
};
const return_func = () => 10+10;
const returnsANamedFunction=()=>{
    return function NamedFunction(){
        10+10
    }
}
const returnsAnAnonymousFunction =()=>{
    return (function(){return 10+10});
}