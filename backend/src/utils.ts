
export function random(len:number){
    let options="qwertyuiopasdfghjklzxcvbnm123456789";
    let ans="";
    for(let i=0;i<len;i++){
        ans+=options[Math.floor(options.length*Math.random())]
    }
    return ans
}