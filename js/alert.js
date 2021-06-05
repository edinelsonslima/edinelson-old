function CustomAlert(){
    this.render = function(dialog){
        document.getElementById('dialogoverlay').style.display = 'flex'
        document.getElementById('dialogbox').style.display = 'flex'
        document.querySelector('#dialogbox').innerHTML = dialog + '<button onclick="Alert.ok()" class="button">OK</button>';
    }

    this.ok = function(){
        document.getElementById('dialogoverlay').style.display = 'none'
    }
}
let Alert = new CustomAlert();

addEventListener('load',()=>{
    document.getElementById('dialogoverlay').style.display = 'none'
    document.getElementById('dialogbox').style.display = 'none'
})