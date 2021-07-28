/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
    function validarDados(){
        var nome = document.getElementById("nome").value;
        var login = document.getElementById("login").value;
        var senha = document.getElementById("senha").value;
        
        if(nome === ''){
            alert("Informe o nome!");
            return false;
        } else if(login === ''){
            alert("Informe o login!");
            return false;
        } else if(senha === ''){
            alert("Informe a senha!");
            return false;
        }
        return true;
    }
    

