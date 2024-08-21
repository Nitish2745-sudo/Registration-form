<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <meta http-equiv="X-UA-Compatible" content="IE=edge">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <link rel="stylesheet" href="style.css">
 <script src="app.js" defer></script>
 <title>Register</title>
</head>
<body>
<script>
       function nitish()
{
var a=document.getElementById("n1").value;
var b=document.getElementById("n2").value;
var c=document.getElementById("n3").value;
var d=document.getElementById("n4").value;
var e=document.getElementById("n5").value;
        if(a==""||b==""||c==""|| d==""||e=="")
        {
            alert(" please all fields are  mendatory");
            return false;
        }
        else if(b.indexOf('@')<=0)
        {
            alert("please! mistake '@' enter vailid email" );
            return false;
        }
        else if(c.length<10||c.length>10)
        {
            alert(" Number should be of 10 digit! plese enter valid mobile number" );
            return false;
        }
        else if(d!=e)
        {
            alert("wrong password please! enter same password");
        return false;
    }
    else{
        true;
    }
}
</script>
    
 <div class="container">
    <style>
    body{
        background: rgb(34,193,195);
        background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(121,32,153,1) 86%);
        background-attachment: fixed;
        margin:0;
        font-family: 'Poppins', sans-serif; 
    }
    
    #form{
        width:400px;
        margin:20vh auto 0 auto;
        background-color: whitesmoke;
        border-radius: 5px;
        padding:30px;
    }
    
    h1{
        text-align: center;
        color:#792099;
    }
    
    #form button{
        background-color: #792099;
        color:white;
        border: 1px solid #792099;
        border-radius: 5px;
        padding:10px;
        margin:20px 0px;
        cursor:pointer;
        font-size:20px;
        width:100%;
    }
    
    .input-group{
        display:flex;
        flex-direction: column;
        margin-bottom: 15px;
    }
    
    .input-group input{
        border-radius: 5px;
        font-size:20px;
        margin-top:5px;
        padding:10px;
        border:1px solid rgb(34,193,195) ;
    }
    
    .input-group input:focus{
        outline:0;
    }
    
    .input-group .error{
        color:rgb(242, 18, 18);
        font-size:16px;
        margin-top: 5px;
    }
    
    .input-group.success input{
        border-color: #0cc477;
    }
    
    .input-group.error input{
        border-color:rgb(206, 67, 67);
    }
    
    </style>

    <form onsubmit="return nitish()" action="abc.html" id="form">
    <h1>Registration form</h1>
    <div class="input-group">
    <label for="username">Username</label>
    <input type="text" id="n1" name="username">
    <div class="error"></div>
    </div>
    <div class="input-group">
    <label for="email">Email</label>
    <input type="text" id="n2" name="email" >
    <div class="error"></div>
    </div>
    <div class="input-group">
    <label for="phone_no">Contacts_no</label>
    <input type="text" id="n3" name="Phone_no" >
    <div class="error"></div>
    </div>
    <div class="input-group">
    <label for="password">Password</label>
    <input type="password" id="n4" name="password">
    <div class="error"></div>
    </div>
    <div class="input-group">
    <label for="cpassword">Confirm_Password</label>
    <input type="password" id="n5" name="cpassword">
    <div class="error"></div>
    </div>
    <input type="submit" value="submit">
    </form>
    </div>
    </body>
</html>
