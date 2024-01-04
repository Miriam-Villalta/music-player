/* eslint-disable no-unused-vars */
import '../stylesheet/App.scss';
import Header from './Header';
import SongList from './SongList';
import MusicPlayer from './MusicPlayer';
import {useEffect, useState} from 'react';
import api from '../services/api';
import PropTypes from "prop-types";
import { Route, Routes } from "react-router-dom";
import ls from "../services/localstorage";


const App = () => {
  
  const [artist, setArtist] = useState(ls.get("artist", []));
  const [filterArtist, setFilterArtist] = useState('');

  useEffect(() => {
    if (artist.length === 0) {
      api().then((data) => {
        setArtist(data);
      });
    }
  }, []);

  useEffect(() => {
    ls.set("artist", artist);
  }, [artist]);

  const handleFilters = (data) => {
    if (data.key === "name") {
      setFilterArtist(data.value);
    }
  };

  const filteredArtist = artist
    .filter((artist) => {
      return artist.name
        .toLowerCase()
        .toUpperCase()
        .includes(filterArtist.toLowerCase().toUpperCase());
    });

    //render song list
    const renderSongList = (props) => {
      const artistId = props.id.match.params;
      const findArtist = artist.find((artist) => {
        return artist.id === parseInt(artistId);
      });
  
      if (findArtist !== undefined) {
        return; //<CharacterDetail artist={findArtist} />;
      }
    };

  return (
    <>
    <Header handleFilters={handleFilters}/>
    <SongList artist={(artist, filterArtist)}/>
    <MusicPlayer />

    <Routes path="/artist/:id" render={renderSongList} />
  
    </>
  );
};

App.propTypes = {
  id: PropTypes.match
}

export default App;
