import React, { useEffect, useState } from 'react';
import PlaylistItem from './playlist-item';

const PlaylistItems = () => {
    const [status, setStatus] = useState<boolean>(true);
    useEffect(() => {
        const loadTimer = setTimeout(() => {
            setStatus(false);
        }, 5000);
        return () => {
            clearTimeout(loadTimer);
        };
    });

    return (
        <div className="content__playlist playlist">
            <PlaylistItem
                isLoading={status}

                trackTitleLink="http://"
                trackTitleText="Guilt"
                trackAuthorLink="http://"
                trackAuthorText="Nero"
                trackAlbumLink="http://"
                trackAlbumText="Welcome Reality"
                trackTime="4:44"
            />
            <PlaylistItem
                isLoading={status}

                trackTitleLink="http://"
                trackTitleText="Elektro"
                trackAuthorLink="http://"
                trackAuthorText="Dynoro, Outwork, Mr. Gee"
                trackAlbumLink="http://"
                trackAlbumText="Elektro"
                trackTime="2:22"
            />
			<PlaylistItem
                isLoading={status}

                trackTitleLink="http://"
                trackTitleText="I’m Fire"
                trackAuthorLink="http://"
                trackAuthorText="Ali Bakgor"
                trackAlbumLink="http://"
                trackAlbumText="I’m Fire"
                trackTime="2:22"
            />
			<PlaylistItem
                isLoading={status}

                trackTitleLink="http://"
                trackTitleText="Non Stop"
                trackAuthorLink="http://"
                trackAuthorText="Стоункат, Psychopath"
                trackAlbumLink="http://"
                trackAlbumText="Non Stop"
                trackTime="4:12"
            />
			<PlaylistItem
                isLoading={status}

                trackTitleLink="http://"
                trackTitleText="Run Run"
                trackAuthorLink="http://"
                trackAuthorText="Jaded, Will Clarke, AR/CO"
                trackAlbumLink="http://"
                trackAlbumText="Run Run"
                trackTime="2:54"
            />
			<PlaylistItem
                isLoading={status}

                trackTitleLink="http://"
                trackTitleText="Eyes on Fire"
                trackAuthorLink="http://"
                trackAuthorText="Blue Foundation, Zeds Dead"
                trackAlbumLink="http://"
                trackAlbumText="Eyes on Fire"
                trackTime="5:20"
            />
			<PlaylistItem
                isLoading={status}

                trackTitleLink="http://"
                trackTitleText="Mucho Bien"
                trackAuthorLink="http://"
                trackAuthorText="HYBIT, Mr. Black, Offer Nissim, Hi Profile"
                trackAlbumLink="http://"
                trackAlbumText="Mucho Bien"
                trackTime="3:41"
            />
			<PlaylistItem
                isLoading={status}

                trackTitleLink="http://"
                trackTitleText="Knives n Cherries"
                trackAuthorLink="http://"
                trackAuthorText="minthaze"
                trackAlbumLink="http://"
                trackAlbumText="Captivating"
                trackTime="1:48"
            />
			<PlaylistItem
                isLoading={status}

                trackTitleLink="http://"
                trackTitleText="How Deep Is Your Love"
                trackAuthorLink="http://"
                trackAuthorText="Calvin Harris, Disciples"
                trackAlbumLink="http://"
                trackAlbumText="How Deep Is Your Love"
                trackTime="3:32"
            />
			<PlaylistItem
                isLoading={status}

                trackTitleLink="http://"
                trackTitleText="Morena"
                trackAuthorLink="http://"
                trackAuthorText="Tom Boxer"
                trackAlbumLink="http://"
                trackAlbumText="Soundz Made in Romania"
                trackTime="3:36"
            />
        </div>
    );
}

export default PlaylistItems;
