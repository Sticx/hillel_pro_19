const arg = function (a='Error',b,c,...args) {
    console.log(a,'-',b,'-',c,args)

    let otherArgs = args.slice()
    console.log({...otherArgs})
    // console.log(...args)
    if (arguments.length<5){
        console.log('ERROR')
    }
    if (a !==undefined){
        return 'a'
    }


    // return a;

}
arg(...[undefined,'b','c',3,4,5])
