/*
	function : confirmPass
	aPass 	 : actual password
	uPass 	 : user choices to confirm password
	return 	 : true/false, based on whether the user entered the password
			   correctly or not   
*/
function confirmPass(aPass, uPass){
	//Test if user choice correct or not
	if((uPass.drop1.substr(1) == aPass[0] && uPass.drag1 == aPass[3]) || (uPass.drop1.substr(1) == aPass[1] && uPass.drag1 == aPass[4]) || (uPass.drop1.substr(1) == aPass[2] && uPass.drag1 == aPass[5])){

		if((uPass.drop2.substr(1) == aPass[0] && uPass.drag2 == aPass[3]) || (uPass.drop2.substr(1) == aPass[1] && uPass.drag2 == aPass[4]) || (uPass.drop2.substr(1) == aPass[2] && uPass.drag2 == aPass[5])){

			if((uPass.drop3.substr(1) == aPass[0] && uPass.drag3 == aPass[3]) || (uPass.drop3.substr(1) == aPass[1] && uPass.drag3 == aPass[4]) || (uPass.drop3.substr(1) == aPass[2] && uPass.drag3 == aPass[5])){}
				else{return false;}
		}else{return false;}
	}else{return false;}
	return true;
}