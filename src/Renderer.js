import React, { Component } from 'react';
import C3Chart from 'react-c3js';
import 'c3/c3.css';
var fire = function (item) {
  var year = ['year'];
  var fires = ['fires'];
  var deaths = ['deaths'];
  var affected = ['affected']
  for (var v in item.info) {
    var myVar = item.info[v];
    year.push(Number(myVar.year));
    fires.push(Number(myVar.eventCount));
    deaths.push(Number(myVar.totalDeaths));
    affected.push(Number(myVar.totalAffected));
  }
  var data = {
    xs: {
      fires: 'year',
      deaths: 'year',
      affected: 'year',
    },
    columns: [
      fires, year, deaths, affected
    ],
    type: 'scatter'
  }

  return <div>
    <img src="./fire.png" alt="fire" />
    <C3Chart data={data} />
    <div dangerouslySetInnerHTML={{
      __html:
        `<map name="continents_map">
          <area shape="rect" coords="85, 130, 300, 375" href="https://www.britannica.com/event/Indian-Ocean-tsunami-of-2004">
          <area shape="rect" coords="300, 130, 450, 250" href="https://www.acog.org/Clinical-Guidance-and-Publications/Committee-Opinions/Committee-on-Health-Care-for-Underserved-Women/Preparing-for-Disasters-Perspectives-on-Women">
          <area shape="rect" coords="400, 260, 600, 400" href="https://www.fema.gov/blog/2014-11-21/leadership-qa-diversity-and-womens-role-emergency-management">
          <area shape="rect" coords="210, 400, 420, 600" href="https://www.nist.gov/el/earthquake-kobe-japan-1995">
          <area shape="rect" coords="420, 670, 510, 560" href="https://www.futureswithoutviolence.org/hurricane-victims-domestic-sexual-violence/">
          <area shape="rect" coords="75,540,180,700" href="https://www.cepal.org/mujer/reuniones/conferencia_regional/manual.pdf">
        </map>

        <figure style="text-align:center;">
          <img usemap="#continents_map" src= gender.png width= "600px" />
        </figure>
      `
    }}></div>
  </div>
}

var hurricanes = function (item) {
  return <div>
    <img src="./hurricaneS.png" alt="hurricaneS" />
    <img src="./hurricaneHistory.png" alt="hurricaneHistory" height="1024" width="796" />
    <img src="./hurricaneMed.png" alt="hurricaneMed" height="1024" width="796" />
  </div>;
}
var Renderer = [
  fire, hurricanes
];

export default Renderer;