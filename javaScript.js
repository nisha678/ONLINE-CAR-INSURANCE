

    function valid()
    {
   let u=document.getElementById("un").value;
   let p=document.getElementById("pw").value;
   
   if(u.trim()==""||p.trim=="")
   {
       alert("username and password shouldn't be empty")
       return false;
   }
   else
   {
      return pattern()
     
    }
    }
//username pattern
    function pattern(){
        let u=document.getElementById("un").value;
        let reg=/[A-Za-z]$/;
        let res=reg.test(u)
    if(res)
    {
        
        return len()
    }
    else
    {
        alert("Username not accepted")
        return false;
    }
	}
//password length
   function len()
   {
       let p=document.getElementById("pw").value;
       if(p.length>6)
       {
           
           return true;
       }
       else{
           alert("Password should be more than 6 characters")
           return false;
       }
   }
  