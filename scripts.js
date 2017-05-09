document.getElementById("StartButton").onclick = function() {
  startRace();
}

document.getElementById("BarryWins").onclick = function() {
  document.getElementById("BarryWins").style.display = 'none';
  document.getElementById("StopWatch").style.display = 'none';
  document.getElementById("StartButton").style.display = 'block';
  document.getElementById("field").style.display = 'block';
  document.getElementById("BoJackson").style.left = '30px';
  document.getElementById("BarrySanders").style.left = '30px';
}

document.getElementById("BoWins").onclick = function() {
  document.getElementById("BoWins").style.display = 'none';
  document.getElementById("StopWatch").style.display = 'none';
  document.getElementById("StartButton").style.display = 'block';
  document.getElementById("field").style.display = 'block';
  document.getElementById("BoJackson").style.left = '30px';
  document.getElementById("BarrySanders").style.left = '30px';
}

function startRace() {
  var barry = document.getElementById("BarrySanders");
  var bo = document.getElementById("BoJackson");
  var startButton = document.getElementById("StartButton");
  var stopWatch = document.getElementById("StopWatch");
  var field = document.getElementById("field");
  var barry_wins = document.getElementById("BarryWins");
  var bo_wins = document.getElementById("BoWins");
  var finish = document.getElementById("footballfield").clientWidth - 85;

  var posBarry = 30;
  var posBo = 30;

  var hasWinner = false;
  startButton.style.display = 'none';
  stopWatch.style.display = 'block';

  var id = setInterval(frame, 60);
  function frame()
  {
    if(posBarry >= finish && posBo >= finish)
    {
      clearInterval(id);
      return;
    }

    if(posBarry < finish)
    {
      posBarry += Math.round(Math.random()*10);
      barry.style.left = posBarry + 'px';

      if(posBarry >= finish)
      {
        posBarry = finish;
        if(!hasWinner){
          hasWinner = true;
          field.style.display = 'none';
          barry_wins.style.display = 'block';
        }
      }

    }

    if(posBo < finish)
    {
      posBo += Math.round(Math.random()*10);
      bo.style.left = posBo + 'px';

      if(posBo >= finish)
      {
        posBo = finish;
        if(!hasWinner){
          hasWinner = true;
          field.style.display = 'none';
           bo_wins.style.display = 'block';
        }
      }

    }
  }
}
