import React from 'react';
import { FaMusic } from "react-icons/fa";
import Suggestion from "../style/SuggestionVideo.css";


const  SuggestionVideo = () => {
  const urlList = [
    {
      src:"https://www.youtube.com/embed/HaXfvrFI4Mk",
      title: "Negritude, youssoupha",
      description: "Chaine youss ",
      key: 1
    },
    {
      src: "https://www.youtube.com/embed/UbBqyqXepTM",
      title: "IKI qu'est content ?",
      description: "Merci coach",
      key: 2
    },
    {
      src: "https://www.youtube.com/embed/80UD-8-O2dw",
      title: "L'enfer du sport à l'école",
      description: "je t'aime",
      key: 3
    },
    {
      src: "https://www.youtube.com/embed/rSHO1zMtWDg",
      title: "Thomas Ntop, nouvelle ",
      description: "Alelouhaaaa",
      key: 4
    },
    {
      src: "https://www.youtube.com/embed/o1diW_2W-cM",
      title: "Messi met fin",
      description: "Merci a Gomycode",
      key: 5
    },
  ];

  return (
    <div className="col-md-4">
      <div>
        <button type="button" className="btn btn-light rounded-pill border boder-1 m-1"x>Tout</button>
        <button type="button" className="btn btn-light rounded-pill border boder-1 m-1">D'apres votre recherche</button>
        <button type="button" className="btn btn-light rounded-pill border boder-1 m-1">Videos similaires</button>
      </div>
      {urlList.map((elt) => (
        <div className="mt-2" key={elt.key}>
          <div className="row ">
            <div className="col-md-7">
              <iframe 
                width="100%"
                height="100%" 
                src={elt.src}
                title={elt.title}
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
              </iframe>
            </div>
            <div className="col-md-5">
              <h1 className="h6">{elt.title}</h1>
              <div>{elt.description}<span className="text-danger"><FaMusic /></span></div>
              <div>5.3M de vue * il y a 5 ans.</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
export default SuggestionVideo;
