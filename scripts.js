document.getElementById("StopWatch").onclick = function() {
  startRace();
}

function startRace() {
  var barry = document.getElementById("BarrySanders");
  var bo = document.getElementById("BoJackson");
  var stopWatch = document.getElementById("StopWatch");
  var field = document.getElementById("field");
  var barry_wins = document.getElementById("BarryWins");
  var bo_wins = document.getElementById("BoWins");

  var posBarry = 0;
  var posBo = 0;

  var hasWinner = false;
  barry.style.display = 'none';
  bo.style.display = 'none';

  var id = setInterval(frame, 500);
  function frame()
  {
    if(posBarry >= 350 && posBo >= 350)
    {
      clearInterval(id);
      return;
    }

    if(posBarry < 350)
    {
      posBarry += Math.round(Math.random()*10);
      barry.style.left = posBarry + 'px';

      if(posBarry >= 350)
      {
        posBarry = 350;
        if(!hasWinner){
          hasWinner = true;
          field.style.display = 'none';
          barry_wins.style.display = 'block';
        }
      }

    }

    if(posBo < 350)
    {
      posBo += Math.round(Math.round()*10);
      bo.style.left = posBo + 'px';

      if(posBo >= 350)
      {
        posBo = 350;
        if(!hasWinner){
          hasWinner = true;
          field.style.display = 'none';
           bo_wins.style.display = 'block';
        }
      }

    }
  }
}
