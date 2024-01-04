const api = () => {
    return fetch("https://api.deezer.com/track") 
      .then((response) => response.json())
      .then((data) => {
        return data.results.map((track) => {
          return {
            name: track.artist.name,
            song: track.link,
            songName: track.title,
            album: track.album.title,
            image: track.album.cover,
          };
        });
      });
  };
  
  export default api;
