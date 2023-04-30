const url1 = 'https://api-football-v1.p.rapidapi.com/v3/players?id=874&season=2020';
const url2 = 'https://api-football-v1.p.rapidapi.com/v3/players?id=154&season=2020';
const options = {
  method: 'GET',
  headers: {
    'content-type': 'application/octet-stream',
    'X-RapidAPI-Key': 'bf24376c62msh6ba0d8cf5348847p1f212cjsn51d38164dcc0',
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
  }
};

async function getPlayerStats() {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result)
    const playersData = result.response;
    for (let i = 0; i < playersData.length; i++) {
      const playerNameData = playersData[i].player.name;
      const goalsData = playersData[i].statistics[0].goals.total;
      const assistsData = playersData[i].statistics[0].goals.assists;
      const playerNameElement = document.createElement('div');
      const goalsElement = document.createElement('div');
      const assistsElement = document.createElement('div');
      playerNameElement.innerHTML = `Player Name: ${playerNameData}`;
      goalsElement.innerHTML = `Goals: ${goalsData}`;
      assistsElement.innerHTML = `Assists: ${assistsData}`;
      document.body.appendChild(playerNameElement);
      document.body.appendChild(goalsElement);
      document.body.appendChild(assistsElement);
    }
  } catch (error) {
    console.error(error);
  }
}

getPlayerStats();
