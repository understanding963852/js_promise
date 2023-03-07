
const pr=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("OK");
        reject(new Error("err...."))
    },1000);
})

console.log("시작")
pr.then((result)=>{  //제대로 실행되었을때
    console.log(result);
})
.catch((err)=>{   //제대로 실행되지 않았을때
    console.log(err);
})
.finally(()=>{    //실행또는 거부뒤에 실행됨
    console.log("끝");
})