document.addEventListener('DOMContentLoaded', function() {
    console.log("In")
    fetch('https://mini-project-jiji.onrender.com/products',{
        method:'get',
    }).then((data)=>{
        return JSON.stringify(data);
    }).then((data)=>{
        console.log('====================================');
        console.log(data);
        console.log('====================================');
    }).catch((e)=>{
        console.log(e);
    });
});