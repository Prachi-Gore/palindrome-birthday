const date=document.querySelector("#date");
const btn=document.querySelector(".see");
const output=document.querySelector(".output");


//reverse string
const reverseString=(str)=>{
    //split
    var charList=str.split("");
    //reverse
    var reverseList=charList.reverse();
    //join
    var reverseString=reverseList.join("");
    return reverseString;

}
//reverseString("abc")

//check palindrome
const checkPalindrome=(str)=>{
    return str===reverseString(str)? true:false ;
}
btn.addEventListener('click',()=>{
    
var dob=new Date(date.value);//YYYY-MM-DD
var day=dob.getDate();
var month=dob.getMonth();
var year=dob.getFullYear();

// // check validity of input
if(date.value===""){
    output.innerHTML="Please Enter Date Correctly";
}
if(year<1000){
    output.innerHTML="Please Enter Birth Year Correctly";  
}else{

    day=day<=9?'0'+day:String(day);
    month=month<=9?'0'+month:String(month);
   dob=date+month+year; //DD-MM-YYYY
    // //remove hyphens from string
    //  dob=dob.replaceAll('-','');
     
    if(checkPalindrome(dob)){
        
        output.innerHTML="Yeah!! your Birthdate is palindrome";
    }else{
        output.innerHTML="😞!! your Birthdate is not palindrome";
    }
}
}
)
