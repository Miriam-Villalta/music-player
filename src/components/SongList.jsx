import SongCard from "./SongCard";
import PropTypes from "prop-types";

function SongList({artist}){
    let artistElement = "";
    if (artist.length === 0) {
      return (
        <h2 className="not-found">
          No artist match.
        </h2>
      );
    } else {
        artistElement = artist.map((artist) => {
        return <SongCard key={artist.id} artist={artist} />;
      });
    }

    
    return (
        <section className="main-section">
            <div className="search-title">
                <h2 className="search-title--result">Search results for:</h2>
                <h2 className="search-title--name">Adam Beyer</h2>
            </div>
            <ul className="song-list">
                {artistElement}
            </ul>
        </section>
    );
  }

  SongList.propTypes = {
    artist: PropTypes.string.isRequired 
}

export default SongList;