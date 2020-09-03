
function equacaosegundograu(){
	var a = document.getElementById("valora").value;
	var b = document.getElementById("valorb").value;
	var c = document.getElementById("valorc").value;
	var delta = b ** 2 -4 * a * c;
	var baixo = 2 * a;
	var sinal 
	if (-4 * a * c < 0){
		var sinal = ""
	}
	else{
		var sinal = "+"
	}
	var contadelta = "Δ = b² -4.a.c<br>Δ = "+b+"² -4."+a+"."+c+"<br>Δ = "+b ** 2+" "+sinal+ -4 * a * c+"<br><span class='backyellow'>Δ = "+delta+"</span>"
	if(delta < 0){
		document.getElementById("resultado").innerHTML = contadelta+"<br><span class='backred'>x1 = Não tem Raiz<br>x2 = Não tem Raiz</span>";
	}
	else{
		var x1cima = -b + Math.sqrt(delta);
		var x1 = x1cima / baixo;
		var x2cima = -b - Math.sqrt(delta);
		var x2 = x2cima / baixo;
		var contax1 = "x1 = (-b + √Δ) ÷ 2.a<br>x1 = (-("+b+") + √"+delta+") ÷ 2."+a+"<br>x1 = ("+ (-b) +" + "+Math.sqrt(delta)+") ÷ "+ 2*a +"<br>x1 = "+(-b + Math.sqrt(delta))+" ÷ "+2*a+"<br><span class='backyellow'>x1 = "+x1+"</span>";
		var contax2 = "x2 = (-b - √Δ) ÷ 2.a<br>x2 = (-("+b+") - √"+delta+") ÷ 2."+a+"<br>x2 = ("+ (-b) +" - "+Math.sqrt(delta)+") ÷ "+ 2*a +"<br>x2 = "+(-b - Math.sqrt(delta))+" ÷ "+2*a+"<br><span class='backyellow'>x2 = "+x2+"</span>";
		document.getElementById("resultado").innerHTML = contadelta+"<br>"+contax1+"<br>"+contax2;
	}
}

