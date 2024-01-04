function SongCard (artist){

    return (
        <li className="song-list--el">
            <div className="song-list--el__text">
                <img src={artist.picture} alt="" />
                <p>{artist.tracklist}</p>
                <p>{artist.name}</p>
                <p>{artist.album}</p>
            </div>
        </li>
    )
}

export default SongCard;