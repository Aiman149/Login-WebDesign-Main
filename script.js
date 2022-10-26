function login(){
    let psw = document.getElementById('psw').value;
    var upper = psw.match(/[A-Z]/);
    var lower = psw.match(/[a-z]/);
    var num = psw.match(/[1-9]/);
    var symbol = psw.match(/^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/g);

    if (psw.length >= 12){
        a = true;
    }    

    else{

        alert ('harap maaf, kata laluan anda kurang daripada 12 huruf');
    }

    if (upper){
        b = true;
    }    

    else{

        alert ('harap maaf, kata laluan anda tidak mengandungi huruf besar');
    }

        
    if (lower){
        c = true;
    }    
    else{
        alert ('harap maaf, kata laluan anda tidak mengandungi huruf kecil');
    }
   
    if (num){
        d = true;
    }    
    else{
        alert ('harap maaf, kata laluan anda tidak mengandungi nombor');
    }

    if (symbol){
        e = true;
    }    
    else{
        alert ('harap maaf, kata laluan anda tidak mengandungi simbol');
    }


    if(a == true && b == true && c == true && d == true && e ==true){
        alert('Tahniah')
    }
    else if(a != true && b != true && c != true && d != true && e !=true){
       
    }
    else{
       
    }
}