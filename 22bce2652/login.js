document.addEventListener('DOMContentLoaded',function () {
    const accountForm=document.getElementById('accountForm');
    const field=document.getElementById('field');
    const radioBtn=document.getElementById('signin_radio');
    setInterval(() => {
        if(radioBtn.checked){
            field.classList.add('hidden');
        }
        else{
            field.classList.remove('hidden');
        }
    },100);
    accountForm.addEventListener('submit',function(event){
        event.preventDefault();
        let accounts=[['tanishq9386','Tanishq@2004','Tanishq']];
        if(radioBtn.checked){
            const usernameinp=document.getElementById('username').value;
            const passwordinp=document.getElementById('password').value;
            for(let i=0;i<accounts.length;i++){
                if(usernameinp===accounts[i][0]&&passwordinp===accounts[i][1]){
                    alert("Welcome back "+accounts[i][2]);
                    window.open("homepage.html",'_self');
                }
                else if(i==accounts.length-1){
                    alert("Invalid username or password");
                }
            }
        }
        else{
            const nameinp=document.getElementById('name').value;
            const usernameinp=document.getElementById('username').value;
            const passwordinp=document.getElementById('password').value;
            const temp= [usernameinp,passwordinp,nameinp];
            accounts.push(temp);
            alert('account was created');
        }
    });
});
// accountForm.addEventListener('submit',function(event){
    //     event.preventDefault();

    //     const action=document.querySelector('input[name="action"]:checked').value;
    //         if(action==='signin'){
    //             field.classList.add('hidden');
    //             // const usernameinp=getElementById('username');
    //             // const passwordinp=getElementById('password');
    //         }
    //         else if(action==='signup'){
    //             field.classList.remove('hidden');
    //         }
    // });