const SUMA=()=>{
    try{
    let num1=parseInt(prompt("Numero 1: "));
    let num2=parseInt(prompt("Numero 2: "));
    let suma=num1+num2;
    alert("La suma es: "+suma);
    }catch(e){
        alert("Debes intoducir valores numericos");
    }
    }
    
    const RESTA=()=>{
        try{
        let num1=parseInt(prompt("Numero 1: "));
        let num2=parseInt(prompt("Numero 2: "));
        let r=num1-num2;
        alert("La resta es: "+r);
        }catch(e){
            alert("Debes intoducir valores numericos"); 
        }
        }
    
        const MULTIPLICACION=()=>{
            try{
            let num1=parseInt(prompt("Numero 1: "));
            let num2=parseInt(prompt("Numero 2: "));
            let m=num1*num2;
            alert("La division es: "+m);
            }catch(e){
                alert("Debes intoducir valores numericos"); 
            }
            }
    
            const DIVISION=()=>{
                try{
                let num1=parseInt(prompt("Numero 1: "));
                let num2=parseInt(prompt("Numero 2: "));
                let d=num1/num2;
                alert("La division es: "+d);
                }catch(e){
                    alert("Debes intoducir valores numericos"); 
                }
                }