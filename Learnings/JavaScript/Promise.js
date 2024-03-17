const arr = [];

const getData = (arr=[]) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            arr.push({name: "Zain"});
            if(arr.length > 0) resolve("data fetched!");
            else reject("Some error has been occured!");
        }, 2000)
    });
};

getData(arr).then((message)=> console.log(message)).catch((message) => console.log(message)).finally(()=> console.log("Will Work in both cases"))