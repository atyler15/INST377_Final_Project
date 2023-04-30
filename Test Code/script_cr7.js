const url = 'https://api-football-v1.p.rapidapi.com/v3/players?id=874&season=2020';
const options = {
  method: 'GET',
  headers: {
    'content-type': 'application/octet-stream',
    'X-RapidAPI-Key': 'bf24376c62msh6ba0d8cf5348847p1f212cjsn51d38164dcc0',
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
  }
};

async function getPlayerStats_cr7() {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result)
    const playerNameData_cr7 = result.response[0].player.name;
    const goalsData_cr7 = result.response[0].statistics[0].goals.total;
    const assistsData_cr7 = result.response[0].statistics[0].goals.assists;
    const playerNameElement_cr7 = document.getElementById('player-name_cr7');
    const goalsElement_cr7 = document.getElementById('goals_cr7');
    const assistsElement_cr7 = document.getElementById('assists_cr7');
    playerNameElement_cr7.innerHTML = `Player Name: ${playerNameData}`;
    goalsElement_cr7.innerHTML = `Goals: ${goalsData}`;
    assistsElement_cr7.innerHTML = `Assists: ${assistsData}`;
  } catch (error) {
    console.error(error);
  }
}

getPlayerStats_cr7();
