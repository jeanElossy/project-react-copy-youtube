import React from "react";
// import Form from "./Formulaire";
// import "../style/Formulaire.css";
import VideoMain from "./VideoMain";
import SuggestionVideo from "./SuggestionVideo";
import NavBar from "./NavBar";
import Commentaire from "./Commentaire";

class App extends React.Component{

  render(){
      return(
        <div>
          <NavBar />
          <div className="row">
            <VideoMain />
            <SuggestionVideo />
          </div>
          <Commentaire />
        </div>
      );
    }
  }
export default App;

