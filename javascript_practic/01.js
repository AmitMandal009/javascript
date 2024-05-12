console.log("Practicing Javascript 01");

let call = new Promise((solve,riseerror)=>{
    let randomcreater = Math.random();
    if(randomcreater >= 0.6){
        // console.log('Code Has Succefully Compiled')
        solve({hogaya : 'Hogaya Party kar', randomcreater})
    }
    else{
        riseerror({dakhlay : 'randomcrater nay thoda chotaa number generate kiya hai next time dekhtay hain',randomcreater});
    }})

call.then((codecompiled)=>{
    console.log('yaaaaaa hogaya',codecompiled.hogaya,codecompiled.randomcreater)
}).catch((tuaapnadekhlay)=>{
    console.log('Bekar hai bhai',tuaapnadekhlay.dakhlay,tuaapnadekhlay.randomcreater)
})