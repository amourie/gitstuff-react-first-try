/*import React from 'react';
import ReactDOM from 'react-dom';*/

var playersArr = [
    {
     name: "Bob IsYourUncle",
     score: 50,
     id: 1
    },
    {
     name: "Snoopdog HasSchnitzel",
     score: 30,
     id: 2,
    },
    {
     name: "Humpty HadAFall",
     score: 13,
     id: 3
    }
]
function Header(props){
  return (
    <div className="header">
      <h1>{props.title}</h1>
    </div>
  );
}


function ScoreBoardApp(props) {

return (

  <div className="scoreboard">

    <Header title={props.title} />
    <div className="players">
    {props.playersArray.map(function(player)
    {
     return <Player name={player.name} score={player.score} key={player.id}/>
    })}


    </div>
  </div>

);
}
Header.propTypes = {
  title: React.PropTypes.string.isRequired,
};


// Counter component class starts---------------------------------------
var Counter = React.createClass({
  propTypes: {

  },
  getInitialState: function(){
     return {
     score: 0,
     }
  },
 render: function() {
       return (
           <div className="counter">
             <button className="counter-action decrement"> - </button>
             <div className="counter-score"> {this.state.score}</div>
             <button className="counter-action increment"> + </button>
           </div>
       );

 }


});

// Counter component class ends ---------------------------------------

Counter.propTypes = {

};

function Player(props)
{
  return (
    <div className="player">
            <div className="player-name">
              {props.name}
            </div>
           <div className="player-score">
           <Counter  />
          </div>
    </div>
  );
}

Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired,
};

Application.propTypes = {
  title: React.PropTypes.string,
  playersArray: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired,
    id: React.PropTypes.number.isRequired,
  })).isRequired,
};

Application.defaultProps = {
  title: "Scoreboard"
}

ReactDOM.render(<ScoreBoardApp title="My Scoreboard Application" playersArray={playersArr} />, document.getElementById('container'));
