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
//iterate through player objs in players array using the .map function
  //key is a React thing / iterator to indicate position in the array
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
    console.log("getting state for player");
     return {
     score: this.props.initialScore,
     }
  },
  incrementScore: function(e) {
    this.setState({
      score: (this.state.score + 1),
    })
  },
  decrementScore: function(e) {
    console.log("in decrement");
    this.setState({
      score: (this.state.score - 1),
    })
  },
 render: function() {
       return (
           <div className="counter">
             <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
             <div className="counter-score"> {this.state.score}</div>
             <button className="counter-action increment" onClick={this.incrementScore}> + </button>
           </div>
       );

 }


});

// Counter component class ends ---------------------------------------


//receives player.name player.score and player.id as props
function Player(props)
{
   console.log(props.name);
  return (
    <div className="player">
            <div className="player-name">
              {props.name}
            </div>
           <div className="player-score">

           <Counter initialScore={props.score}/>
          </div>
    </div>
  );
}

Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired
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
