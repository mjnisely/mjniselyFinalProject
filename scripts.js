function startRace() {
  var barry = document.getElementById("BarrySanders");
  var bo = document.getElementById("BoJackson");
  var stopWatch = document.getElementById("StopWatch");

  var posBarry = 0;
  var posBo = 0;

  var hasWinner = false;
  elementBarryWin.style.display = 'none';
  elementBoWin.stylse.display = 'none';

  var id = setInterval(frame, 5);
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
      if(posBarry >= 350)
      {
        posBarry = 350;
        if(!hasWinner){
          hasWinner = true;
          elementBarryWin.style.display = 'unset';
        }
      }
      barry.style.left = posBarry + 'px';
    }

    if(posBo < 350)
    {
      posBo += Math.round(Math.round()*10);
      if(posBo >= 350)
      {
        posBo = 350;
        if(!hasWinner){
          hasWinner = true;
          elementBoWin.style.display = 'unset';
        }
      }
      bo.style.left = posBo + 'px';
    }
  }
}
