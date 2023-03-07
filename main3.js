const f1=()=>{
    return new Promise((res,rej)=>{
        setTimeout(function(){
            res("1번 주문 완료")
        },1000)
    })
}

const f2=(message)=>{
    console.log(message)
    return new Promise((res,rej)=>{
    setTimeout(function(){
        res("2번 주문 완료")
        //rej("XXX")
    },3000)
})
}

const f3=(message)=>{
    console.log(message)
    return new Promise((res,rej)=>{
    setTimeout(function(){
        res("3번 주문 완료")
    },2000)
})
}

console.log("시작")
// f1()
//  .then((res)=>f2(res))
//  .then((res)=>f3(res))
//  .then((res)=>{console.log(res)})
//  .catch(console.log)
//  .finally(()=>{
//     console.log("끝")
//  })

//Promise.all
// console.time("x")
// Promise.all([f1(),f2(),f3()])
// .then(res=>{  //배열안에 부분이 모두 완료되어야 then이 실행된다
//     console.log(res)
//     console.timeEnd("xx")
// })
// .catch(console.log("error..."))



//Promise.race
console.time("x")
Promise.race([f1(),f2(),f3()])
.then(res=>{  //배열안에 부분이 하나라도 완료되면 then이 실행된다
    console.log(res)
    console.timeEnd("xx")
})
.catch(console.log("error..."))