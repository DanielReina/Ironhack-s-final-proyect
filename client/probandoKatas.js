function scramble(str1, str2) {
let arr=[] 
let lCStr1=str1.toLowerCase()
let lCStr2=str2.toLowerCase()

for (let i = 0; i < lCStr1.length; i++) {
if(lCStr1.includes(lCStr2[i])){arr.push(lCStr2[i])}
}
if (arr.length>=lCStr2.length){
return true}else{return false}
 }




 scramble('cedewaraaossoqqyt', 'codewars')