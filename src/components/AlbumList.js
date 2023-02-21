import React from "react";
import AlbumCard from "./AlbumCard";
import { albums } from "../data/albums";

function AlbumList() {
   const appCards = albums.map((albumObj) => {
      return <AlbumCard key ={albumObj.id} name = {albumObj.name} image={albumObj.image} genre={albumObj.genre} />
   })
   

  return (
    <div className="albums">
      {appCards}  
    </div>
   
  );
  }
/// Aaron's Solution - renders correctly without using .map()
/* function AlbumList() {
  return (
    <section className="albums">
      {albums.map((album) => (
        <AlbumCard
          key={album.id}
          name={album.name}
          image={album.image}
          genre={album.genre}
        />
      ))}
    </section>
  );
} */
  

export default AlbumList
