// TODO find the next perfectSquare


function perfectSquare(sq) {
    console.log("value sq" + sq);
    if (sq % 2 == 0 && sq != 1) {
        v = sq / 2;
        console.log(v , square);
    } else {
      console.log("Value square : " + square);
      console.log("never get in");
        return -1;
    }

    perfectSquare(v);
}




function perfectSquareLoop(sq){
  while (sq % 2 == 0 && sq != 1) {
    v = sq / 2;
    sq = v;
    console.log(v);
    console.log("here");
  }
}

perfectSquareLoop(9);
