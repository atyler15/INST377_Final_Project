/*Messi (154) URLs  (2004-2022)*/
/*Both chunks of code below calls the correct api link to get Messi and Ronaldo data for the correct year*/
const messi_04 = 'https://api-football-v1.p.rapidapi.com/v3/players?id=154&season=2004';
const messi_05 = 'https://api-football-v1.p.rapidapi.com/v3/players?id=154&season=2005';
const messi_06 = 'https://api-football-v1.p.rapidapi.com/v3/players?id=154&season=2006';
const messi_07 = 'https://api-football-v1.p.rapidapi.com/v3/players?id=154&season=2007';
const messi_08 = 'https://api-football-v1.p.rapidapi.com/v3/players?id=154&season=2008';
const messi_09 = 'https://api-football-v1.p.rapidapi.com/v3/players?id=154&season=2009';
const messi_10 = 'https://api-football-v1.p.rapidapi.com/v3/players?id=154&season=2010';
const messi_11 = 'https://api-football-v1.p.rapidapi.com/v3/players?id=154&season=2011';
const messi_12 = 'https://api-football-v1.p.rapidapi.com/v3/players?id=154&season=2012';
const messi_13 = 'https://api-football-v1.p.rapidapi.com/v3/players?id=154&season=2013';
const messi_14 = 'https://api-football-v1.p.rapidapi.com/v3/players?id=154&season=2014';
const messi_15 = 'https://api-football-v1.p.rapidapi.com/v3/players?id=154&season=2015';
const messi_16 = 'https://api-football-v1.p.rapidapi.com/v3/players?id=154&season=2016';
const messi_17 = 'https://api-football-v1.p.rapidapi.com/v3/players?id=154&season=2017';
const messi_18 = 'https://api-football-v1.p.rapidapi.com/v3/players?id=154&season=2018';
const messi_19 = 'https://api-football-v1.p.rapidapi.com/v3/players?id=154&season=2019';
const messi_20 = 'https://api-football-v1.p.rapidapi.com/v3/players?id=154&season=2020';
const messi_21 = 'https://api-football-v1.p.rapidapi.com/v3/players?id=154&season=2021';
const messi_22 = 'https://api-football-v1.p.rapidapi.com/v3/players?id=154&season=2022';

/*Ronaldo (874) URLs  2002-2022)*/
const ronaldo_02 = 'https://api-football-v1.p.rapidapi.com/v3/players?id=874&season=2002';
const ronaldo_03 = 'https://api-football-v1.p.rapidapi.com/v3/players?id=874&season=2003';
const ronaldo_04 = 'https://api-football-v1.p.rapidapi.com/v3/players?id=874&season=2004';
const ronaldo_05 = 'https://api-football-v1.p.rapidapi.com/v3/players?id=874&season=2005';
const ronaldo_06 = 'https://api-football-v1.p.rapidapi.com/v3/players?id=874&season=2006';
const ronaldo_07 = 'https://api-football-v1.p.rapidapi.com/v3/players?id=874&season=2007';
const ronaldo_08 = 'https://api-football-v1.p.rapidapi.com/v3/players?id=874&season=2008';
const ronaldo_09 = 'https://api-football-v1.p.rapidapi.com/v3/players?id=874&season=2009';
const ronaldo_10 = 'https://api-football-v1.p.rapidapi.com/v3/players?id=874&season=2010';
const ronaldo_11 = 'https://api-football-v1.p.rapidapi.com/v3/players?id=874&season=2011';
const ronaldo_12 = 'https://api-football-v1.p.rapidapi.com/v3/players?id=874&season=2012';
const ronaldo_13 = 'https://api-football-v1.p.rapidapi.com/v3/players?id=874&season=2013';
const ronaldo_14 = 'https://api-football-v1.p.rapidapi.com/v3/players?id=874&season=2014';
const ronaldo_15 = 'https://api-football-v1.p.rapidapi.com/v3/players?id=874&season=2015';
const ronaldo_16 = 'https://api-football-v1.p.rapidapi.com/v3/players?id=874&season=2016';
const ronaldo_17 = 'https://api-football-v1.p.rapidapi.com/v3/players?id=874&season=2017';
const ronaldo_18 = 'https://api-football-v1.p.rapidapi.com/v3/players?id=874&season=2018';
const ronaldo_19 = 'https://api-football-v1.p.rapidapi.com/v3/players?id=874&season=2019';
const ronaldo_20 = 'https://api-football-v1.p.rapidapi.com/v3/players?id=874&season=2020';
const ronaldo_21 = 'https://api-football-v1.p.rapidapi.com/v3/players?id=874&season=2021';
const ronaldo_22 = 'https://api-football-v1.p.rapidapi.com/v3/players?id=874&season=2022';

/* Ran out of api call it will cost money to use
const options = {
  method: 'GET',
  headers: {
    'content-type': 'application/octet-stream',
    'X-RapidAPI-Key': '24376c62msh6ba0d8cf5348847p1f212cjsn51d38164d0',
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
  }
};*/


async function getPlayerStats() {
  const ctx = document.getElementById('myChart');
  /*List of Goal Values  */
  let goals_messi = [0, 0];
  let goals_cr7 = [];

  /*Getting Messi Goal Values from JSON from API calls*/
  const messi_response1 = await fetch(messi_04, options);
  const messi_response2 = await fetch(messi_05, options);
  const messi_response3 = await fetch(messi_06, options);
  const messi_response4 = await fetch(messi_07, options);
  const messi_response5 = await fetch(messi_08, options);
  const messi_response6 = await fetch(messi_09, options);
  const messi_response7 = await fetch(messi_10, options);
  const messi_response8 = await fetch(messi_11, options);
  const messi_response9 = await fetch(messi_12, options);
  const messi_response10 = await fetch(messi_13, options);
  const messi_response11 = await fetch(messi_14, options);
  const messi_response12 = await fetch(messi_15, options);
  const messi_response13 = await fetch(messi_16, options);
  const messi_response14 = await fetch(messi_17, options);
  const messi_response15 = await fetch(messi_18, options);
  const messi_response16 = await fetch(messi_19, options);
  const messi_response17 = await fetch(messi_20, options);
  const messi_response18 = await fetch(messi_21, options);
  const messi_response19 = await fetch(messi_22, options);

  const messi_result1 = await messi_response1.json();
  const messi_result2 = await messi_response2.json();
  const messi_result3 = await messi_response3.json();
  const messi_result4 = await messi_response4.json();
  const messi_result5 = await messi_response5.json();
  const messi_result6 = await messi_response6.json();
  const messi_result7 = await messi_response7.json();
  const messi_result8 = await messi_response8.json();
  const messi_result9 = await messi_response9.json();
  const messi_result10 = await messi_response10.json();
  const messi_result11 = await messi_response11.json();
  const messi_result12 = await messi_response12.json();
  const messi_result13 = await messi_response13.json();
  const messi_result14 = await messi_response14.json();
  const messi_result15 = await messi_response15.json();
  const messi_result16 = await messi_response16.json();
  const messi_result17 = await messi_response17.json();
  const messi_result18 = await messi_response18.json();
  const messi_result19 = await messi_response19.json();

  /* Might not need
  console.log(result1);
  console.log(result2);
*/

  /*Pushing Goals to List to generate graphs*/
  const messi_goalsData1 = messi_result1.response[0].statistics[0].goals.total;
  goals_messi.push(messi_goalsData1);
  const messi_goalsData2 = messi_result2.response[0].statistics[0].goals.total;
  goals_messi.push(messi_goalsData2);
  const messi_goalsData3 = messi_result3.response[0].statistics[0].goals.total;
  goals_messi.push(messi_goalsData3);
  const messi_goalsData4 = messi_result4.response[0].statistics[0].goals.total;
  goals_messi.push(messi_goalsData4);
  const messi_goalsData5 = messi_result5.response[0].statistics[0].goals.total;
  goals_messi.push(messi_goalsData5);
  const messi_goalsData6 = messi_result6.response[0].statistics[0].goals.total;
  goals_messi.push(messi_goalsData6);
  const messi_goalsData7 = messi_result7.response[0].statistics[0].goals.total;
  goals_messi.push(messi_goalsData7);
  const messi_goalsData8 = messi_result8.response[0].statistics[0].goals.total;
  goals_messi.push(messi_goalsData8);
  const messi_goalsData9 = messi_result9.response[0].statistics[0].goals.total;
  goals_messi.push(messi_goalsData9);
  const messi_goalsData10 = messi_result10.response[0].statistics[0].goals.total;
  goals_messi.push(messi_goalsData10);
  const messi_goalsData11 = messi_result11.response[0].statistics[0].goals.total;
  goals_messi.push(messi_goalsData11);
  const messi_goalsData12 = messi_result12.response[0].statistics[0].goals.total;
  goals_messi.push(messi_goalsData12);
  const messi_goalsData13 = messi_result13.response[0].statistics[0].goals.total;
  goals_messi.push(messi_goalsData13);
  const messi_goalsData14 = messi_result14.response[0].statistics[0].goals.total;
  goals_messi.push(messi_goalsData14);
  const messi_goalsData15 = messi_result15.response[0].statistics[0].goals.total;
  goals_messi.push(messi_goalsData15);
  const messi_goalsData16 = messi_result16.response[0].statistics[0].goals.total;
  goals_messi.push(messi_goalsData16);
  const messi_goalsData17 = messi_result17.response[0].statistics[0].goals.total;
  goals_messi.push(messi_goalsData17);
  const messi_goalsData18 = messi_result18.response[0].statistics[0].goals.total;
  goals_messi.push(messi_goalsData18);
  const messi_goalsData19 = messi_result19.response[0].statistics[0].goals.total;
  goals_messi.push(messi_goalsData19);

  console.log(goals_messi);
  /*console.log(goals_cr7); 874*/


/*Create chart to display on webiste*/
  new myChart(ctx, {
    type: 'line',
    data: {
      labels: ['2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
      datasets: [
        {
          label: 'Lionel Messi Goals',
          data: goals_messi,
          borderWidth: 1,
        }]
    },
    options : {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }

  });
}
getPlayerStats();

/*The above code can be duplicated and changed to get any players stats and different stats such
as matchs players and assists*/
