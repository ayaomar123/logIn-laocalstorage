var myArr=[];
var myObj={ name: "", password:""}    
    function pushData(e){
        e.preventDefault();
        var name = document.getElementById('name').value;
        var password = document.getElementById('password').value;
        myObj.name=name;
        myObj.password=password;
        myArr.push(myObj);
        var pval = "";
        for(i = 0; i < myArr.length; i++){
            pval = pval + myArr[i] + "<br/>";
            }
            console.log(myArr);
            location.href='mypage.html';
        }  
        const submitbtn = document.getElementById('submit');
        if(submitbtn){
        submitbtn.addEventListener('click',pushData);
        }
        if(submitbtn){
        submitbtn.addEventListener('click',(e)=>{
            e.preventDefault();
            if(localStorage.getItem(password.value)){
                alert('this item is used');
            }
            else{
                localStorage.setItem(password.value,JSON.stringify(myObj) );
            }
            });
        }
        