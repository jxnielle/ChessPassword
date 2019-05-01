/*
	function : build
	purpose  : creates the password
	return	 : the chess pieces and their positions 
*/
function build(){
	var pieces = Array('blackQueen','whiteQueen','blackKing','whiteKing','blackPawn','whitePawn','whiteKnight',
		'blackKnight','whiteRook','blackRook','blackBishop','whiteBishop');
	var piece1 = pieces[Math.floor(Math.random()*pieces.length)];
	var piece2 = pieces[Math.floor(Math.random()*pieces.length)];
	var piece3 = pieces[Math.floor(Math.random()*pieces.length)];
	var pos = Array('r1c1','r1c2','r1c3','r1c4','r2c1','r2c2','r2c3','r2c4','r3c1','r3c2','r3c3','r3c4','r4c1','r4c2','r4c3','r4c4');	
	var pos1 = pos[Math.floor(Math.random()*pos.length)];

	//remove position of first piece..
	var indexToRemove = pos.indexOf(pos1);
	if (indexToRemove > -1) { pos.splice(indexToRemove, 1);}	

	var pos2 = pos[Math.floor(Math.random()*pos.length)];

	//remove position of second piece ..
	indexToRemove = pos.indexOf(pos2);
	if (indexToRemove > -1) { pos.splice(indexToRemove, 1);}	

	var pos3 = pos[Math.floor(Math.random()*pos.length)];
	var posNpiece = [pos1, pos2, pos3, getpieceID(piece1)
	, getpieceID(piece2), getpieceID(piece3)];

	//adds piece to its corresponding tile 
	$('#'+pos1).append("<img class='imgs' src='Pieces/" + piece1 + ".png' style='display:block;margin: 0 auto; padding-top:10px;'/>"); 
	$('#'+pos2).append("<img class='imgs' src='Pieces/" + piece2 + ".png' style='display:block;margin: 0 auto; padding-top:10px;'/>"); 
	$('#'+pos3).append("<img class='imgs' src='Pieces/" + piece3 + ".png' style='display:block;margin: 0 auto; padding-top:10px;'/>"); 

	return posNpiece;
}


/*
	function : getpieceID
	argument : piece name 
	purpose  : gets the id of the piece
	return	 : the id of the piece 
*/
function getpieceID(p1){
	var id;
	if(p1 == 'blackQueen'){ id = 'bq';}
	if(p1 == 'whiteQueen'){ id = 'wq';}
	if(p1 == 'blackKing'){ id = 'bk';}
	if(p1 == 'whiteKing'){ id = 'wk';}
	if(p1 == 'blackPawn'){ id = 'bp';}
	if(p1 == 'whitePawn'){ id = 'wp';}
	if(p1 == 'whiteKnight'){ id = 'wn';}
	if(p1 == 'blackKnight'){ id = 'bn';}
	if(p1 == 'whiteRook'){ id = 'wr';}
	if(p1 == 'blackRook'){ id = 'br';}
	if(p1 == 'blackBishop'){ id = 'bb';}
	if(p1 == 'whiteBishop'){ id = 'wb';} 
	return id;	
}


