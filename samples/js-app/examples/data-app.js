let data = {
  playlists: [
    {
      playlistInfo: {
        id: 1,
        title: "Hip-hop hits",
        coverImgUrl: "img/cardImage/image1.jpeg",
        tracksCount: 4,
      },
      tracks: [
        {
          trackId: 1,
          artistName: "Eminem",
          trackTitle: "Rap God",
          isHot: true,
          trackFileUrl: "audio/Eminem - Rap God.mp3",
          trackCoverImgUrl: "img/cardImage/trackList/track1.jpeg",
        },
        {
          trackId: 2,
          artistName: "50cent",
          trackTitle: "In da Club",
          isHot: false,
          trackFileUrl: "audio/50cent - In da club.mp3",
          trackCoverImgUrl: "img/cardImage/trackList/track2.jpeg",
        },
        {
          trackId: 3,
          artistName: "DMX",
          trackTitle: "X Gon' Give It To Ya",
          isHot: true,
          trackFileUrl: "audio/DMX - X Gon' Give It To Ya.mp3",
          trackCoverImgUrl: "img/cardImage/trackList/track2.jpeg",
        },
        {
          trackId: 4,
          artistName: "Eminem feat 50 Cent, Cashis, Lloyd Banks",
          trackTitle: "You Don't Know",
          isHot: true,
          trackFileUrl:
            "audio/Eminem - You Don't Know (feat. 50 cent, Lloyd Banks and Cashis).mp3",
          trackCoverImgUrl: "img/cardImage/trackList/track3.jpeg",
        },
      ],
    },
    {
      playlistInfo: {
        id: 2,
        title: "Rap Hits 1990s",
        coverImgUrl: "img/cardImage/image2.jpeg",
        tracksCount: 4,
      },
      tracks: [
        {
          trackId: 5,
          artistName: "Public Enemy",
          trackTitle: "Fight The Power",
          isHot: true,
          trackFileUrl: "audio/Public Enemy - Fight The Power.mp3",
          trackCoverImgUrl: "img/cardImage/trackList/track5.jpeg",
        },
        {
          trackId: 6,
          artistName: "Vanila Ice",
          trackTitle: "Ice Ice Baby",
          isHot: false,
          trackFileUrl: "audio/Vanila Ice - Ice Baby.mp3",
          trackCoverImgUrl: "img/cardImage/trackList/track6.jpeg",
        },
        {
          trackId: 7,
          artistName: "MC Hammer",
          trackTitle: "You Can’t Touch This",
          isHot: false,
          trackFileUrl: "audio/Mc Hammer - You Can't Touch This.mp3",
          trackCoverImgUrl: "img/cardImage/trackList/track7.jpeg",
        },
        {
          trackId: 8,
          artistName: "Brand Nubian",
          trackTitle: "Brand Nubian",
          isHot: true,
          trackFileUrl: "audio/Brand Nubian - Brand Nubian.mp3",
          trackCoverImgUrl: "img/cardImage/trackList/track8.jpeg",
        },
      ],
    },
  ],
};

const deletePlaylist = (id) => {
  data.playlists = data.playlists.filter((p) => p.playlistInfo.id !== id);
};

const deleteTrack = (id) => {
  data.playlists = data.playlists.map((el) => {
    el.tracks = el.tracks.filter((t) => t.trackId !== id);
    console.log(el, "\n");
    return el;
  });
};

// deletePlaylist(1);

// console.log(JSON.stringify(data), "\n");

deleteTrack(3);

console.log(JSON.stringify(data), "\n");
