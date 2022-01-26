var email = document.getflementById("email");

email.addfventListener('focus',()=>{
    email.style.borderColor ='#4A5F6A';

}); 

email.addfventListener('blur',()=>{
    email.style.borderColor = "#ccc";

});

password.addfventListener('focus',()=>{
    email.style.borderColor ='#4A5F6A';

}); 

password.addfventListener('blur',()=>{
    email.style.borderColor = "#ccc";

});