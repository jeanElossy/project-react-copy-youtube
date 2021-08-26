import React from 'react';

const Commentaire = () => {
  // const date = new Date();
  const comment = [
    {
      name: "KKDev",
      commentaire: "Je suis fier de vous mes gars, sachez que vous iriez tres loin dans votre de carriere de dev",
      heure: "10:25:00",
      lieu: "Abidjan",
      key: 1
    },
    {
      name: "Manu",
      commentaire: "Ta mère va râler en découvrant ce texte Elle dira qu'c'est trop cru, j'la comprends, tu seras toujours bébé dans sa tête C\'est l\'genre de choses que j\'dois te dire depuis",
      heure: "10:40:20",
      lieu: "France",
      key: 2
    },
    {
      name: "Al hadj",
      commentaire: "Merci a vous les gars",
      heure: "09:15:00",
      lieu: "Tunisie",
      key: 3
    },
    {
      name: "M'baye",
      commentaire: "Je suis fier de vous mes gars, sachez que vous iriez tres loin dans votre de carriere de dev",
      heure: "08:25:23",
      lieu: "Senegal",
      key: 4
    },
    {
      name: "Jhon",
      commentaire: "Do you want a License for the Beat at the End? 💫🔥🔥",
      heure: "12:25:30",
      lieu: "New York",
      key: 5
    }
  ];

  return (
    <div className="row mt-3 w-50">
      {comment.map((elt) => (
        <div key={elt.key}>
          <h1 className="h6">{elt.name}</h1>
          <p>{elt.commentaire}</p>
          <div>
            <span>{elt.lieu} </span>
            <span>{elt.heure}</span>
          </div>
          <hr />
        </div>
      ))}
    </div>
  )
}
export default Commentaire;