import {getRundomTimestamp} from "../modules/util";

export const movies = [
  {
    id: 1,
    title: `Черный клановец`,
    poster: [
      `accused.jpg`,
      `blackmail.jpg`,
      `blue-blazes.jpg`,
      `fuga-da-new-york.jpg`,
      `moonrise.jpg`,
      `three-friends.jpg`,
    ][Math.floor(Math.random() * 6)],
    description: [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      `Cras aliquet varius magna, non porta ligula feugiat eget.`,
      `Fusce tristique felis at fermentum pharetra.`,
      `Aliquam id orci ut lectus varius viverra.`,
      `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
      `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
      `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
      `Sed sed nisi sed augue convallis suscipit in sed felis.`,
      `Aliquam erat volutpat.`,
      `Nunc fermentum tortor ac porta dapibus.`,
      `In rutrum ac purus sit amet tempus`,
    ][Math.floor(Math.random() * 11)],
    rating: [
      9.8,
      1.2,
    ][Math.floor(Math.random() * 2)],
    date: getRundomTimestamp(),
    duration: [
      73,
      60,
    ][Math.floor(Math.random() * 2)],
    genre: [
      `Comedy`,
      `Horror`,
    ][Math.floor(Math.random() * 2)],
    comments: [
      {
        text: [
          `This is a great film`,
          `So long-long story, boring!`,
          `This is a bad film`
        ][Math.floor(Math.random() * 3)],
        author: [
          `Peter Piper`,
          `Mike Lokki`,
          `Tim Macoveev`
        ][Math.floor(Math.random() * 3)],
        reaction: [
          `😴`,
          `😐`,
          `😀`][Math.floor(Math.random() * 3)],
        date: [
          getRundomTimestamp(),
          getRundomTimestamp(),
          getRundomTimestamp()
        ][Math.floor(Math.random() * 3)],
      },
      {
        text: [
          `This is a great film`,
          `So long-long story, boring!`,
          `This is a bad film`
        ][Math.floor(Math.random() * 3)],
        author: [
          `Peter Piper`,
          `Mike Lokki`,
          `Tim Macoveev`
        ][Math.floor(Math.random() * 3)],
        reaction: [
          `😴`,
          `😐`,
          `😀`][Math.floor(Math.random() * 3)],
        date: [
          getRundomTimestamp(),
          getRundomTimestamp(),
          getRundomTimestamp()
        ][Math.floor(Math.random() * 3)],
      },
      {
        text: [
          `This is a great film`,
          `So long-long story, boring!`,
          `This is a bad film`
        ][Math.floor(Math.random() * 3)],
        author: [
          `Peter Piper`,
          `Mike Lokki`,
          `Tim Macoveev`
        ][Math.floor(Math.random() * 3)],
        reaction: [
          `😴`,
          `😐`,
          `😀`][Math.floor(Math.random() * 3)],
        date: [
          getRundomTimestamp(),
          getRundomTimestamp(),
          getRundomTimestamp()
        ][Math.floor(Math.random() * 3)],
      }
    ],
    isInWatchList: true,
    isWatched: false,
  },
  {
    id: 2,
    title: `Вдовы`,
    poster: [
      `accused.jpg`,
      `blackmail.jpg`,
      `blue-blazes.jpg`,
      `fuga-da-new-york.jpg`,
      `moonrise.jpg`,
      `three-friends.jpg`,
    ][Math.floor(Math.random() * 6)],
    description: [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      `Cras aliquet varius magna, non porta ligula feugiat eget.`,
      `Fusce tristique felis at fermentum pharetra.`,
      `Aliquam id orci ut lectus varius viverra.`,
      `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
      `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
      `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
      `Sed sed nisi sed augue convallis suscipit in sed felis.`,
      `Aliquam erat volutpat.`,
      `Nunc fermentum tortor ac porta dapibus.`,
      `In rutrum ac purus sit amet tempus`,
    ][Math.floor(Math.random() * 11)],
    rating: [
      9.8,
      1.2,
    ][Math.floor(Math.random() * 2)],
    date: getRundomTimestamp(),
    duration: [
      73,
      60,
    ][Math.floor(Math.random() * 2)],
    genre: [
      `Comedy`,
      `Horror`,
    ][Math.floor(Math.random() * 2)],
    comments: [
      {
        text: [
          `This is a great film`,
          `So long-long story, boring!`,
          `This is a bad film`
        ][Math.floor(Math.random() * 3)],
        author: [
          `Peter Piper`,
          `Mike Lokki`,
          `Tim Macoveev`
        ][Math.floor(Math.random() * 3)],
        reaction: [
          `😴`,
          `😐`,
          `😀`][Math.floor(Math.random() * 3)],
        date: [
          getRundomTimestamp(),
          getRundomTimestamp(),
          getRundomTimestamp()
        ][Math.floor(Math.random() * 3)],
      },
      {
        text: [
          `This is a great film`,
          `So long-long story, boring!`,
          `This is a bad film`
        ][Math.floor(Math.random() * 3)],
        author: [
          `Peter Piper`,
          `Mike Lokki`,
          `Tim Macoveev`
        ][Math.floor(Math.random() * 3)],
        reaction: [
          `😴`,
          `😐`,
          `😀`][Math.floor(Math.random() * 3)],
        date: [
          getRundomTimestamp(),
          getRundomTimestamp(),
          getRundomTimestamp()
        ][Math.floor(Math.random() * 3)],
      },
      {
        text: [
          `This is a great film`,
          `So long-long story, boring!`,
          `This is a bad film`
        ][Math.floor(Math.random() * 3)],
        author: [
          `Peter Piper`,
          `Mike Lokki`,
          `Tim Macoveev`
        ][Math.floor(Math.random() * 3)],
        reaction: [
          `😴`,
          `😐`,
          `😀`][Math.floor(Math.random() * 3)],
        date: [
          getRundomTimestamp(),
          getRundomTimestamp(),
          getRundomTimestamp()
        ][Math.floor(Math.random() * 3)],
      }
    ],
    isInWatchList: false,
    isWatched: true,
  },
  {
    id: 3,
    title: `История одного назначения`,
    poster: [
      `accused.jpg`,
      `blackmail.jpg`,
      `blue-blazes.jpg`,
      `fuga-da-new-york.jpg`,
      `moonrise.jpg`,
      `three-friends.jpg`,
    ][Math.floor(Math.random() * 6)],
    description: [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      `Cras aliquet varius magna, non porta ligula feugiat eget.`,
      `Fusce tristique felis at fermentum pharetra.`,
      `Aliquam id orci ut lectus varius viverra.`,
      `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
      `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
      `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
      `Sed sed nisi sed augue convallis suscipit in sed felis.`,
      `Aliquam erat volutpat.`,
      `Nunc fermentum tortor ac porta dapibus.`,
      `In rutrum ac purus sit amet tempus`,
    ][Math.floor(Math.random() * 11)],
    rating: [
      9.8,
      1.2,
    ][Math.floor(Math.random() * 2)],
    date: getRundomTimestamp(),
    duration: [
      73,
      60,
    ][Math.floor(Math.random() * 2)],
    genre: [
      `Comedy`,
      `Horror`,
    ][Math.floor(Math.random() * 2)],
    comments: [
      {
        text: [
          `This is a great film`,
          `So long-long story, boring!`,
          `This is a bad film`
        ][Math.floor(Math.random() * 3)],
        author: [
          `Peter Piper`,
          `Mike Lokki`,
          `Tim Macoveev`
        ][Math.floor(Math.random() * 3)],
        reaction: [
          `😴`,
          `😐`,
          `😀`][Math.floor(Math.random() * 3)],
        date: [
          getRundomTimestamp(),
          getRundomTimestamp(),
          getRundomTimestamp()
        ][Math.floor(Math.random() * 3)],
      },
      {
        text: [
          `This is a great film`,
          `So long-long story, boring!`,
          `This is a bad film`
        ][Math.floor(Math.random() * 3)],
        author: [
          `Peter Piper`,
          `Mike Lokki`,
          `Tim Macoveev`
        ][Math.floor(Math.random() * 3)],
        reaction: [
          `😴`,
          `😐`,
          `😀`][Math.floor(Math.random() * 3)],
        date: [
          getRundomTimestamp(),
          getRundomTimestamp(),
          getRundomTimestamp()
        ][Math.floor(Math.random() * 3)],
      },
      {
        text: [
          `This is a great film`,
          `So long-long story, boring!`,
          `This is a bad film`
        ][Math.floor(Math.random() * 3)],
        author: [
          `Peter Piper`,
          `Mike Lokki`,
          `Tim Macoveev`
        ][Math.floor(Math.random() * 3)],
        reaction: [
          `😴`,
          `😐`,
          `😀`][Math.floor(Math.random() * 3)],
        date: [
          getRundomTimestamp(),
          getRundomTimestamp(),
          getRundomTimestamp()
        ][Math.floor(Math.random() * 3)],
      }
    ],
    isInWatchList: false,
    isWatched: false,
  },
  {
    id: 4,
    title: `Дом, который построил Джек`,
    poster: [
      `accused.jpg`,
      `blackmail.jpg`,
      `blue-blazes.jpg`,
      `fuga-da-new-york.jpg`,
      `moonrise.jpg`,
      `three-friends.jpg`,
    ][Math.floor(Math.random() * 6)],
    description: [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      `Cras aliquet varius magna, non porta ligula feugiat eget.`,
      `Fusce tristique felis at fermentum pharetra.`,
      `Aliquam id orci ut lectus varius viverra.`,
      `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
      `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
      `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
      `Sed sed nisi sed augue convallis suscipit in sed felis.`,
      `Aliquam erat volutpat.`,
      `Nunc fermentum tortor ac porta dapibus.`,
      `In rutrum ac purus sit amet tempus`,
    ][Math.floor(Math.random() * 11)],
    rating: [
      9.8,
      1.2,
    ][Math.floor(Math.random() * 2)],
    date: getRundomTimestamp(),
    duration: [
      73,
      60,
    ][Math.floor(Math.random() * 2)],
    genre: [
      `Comedy`,
      `Horror`,
    ][Math.floor(Math.random() * 2)],
    comments: [
      {
        text: [
          `This is a great film`,
          `So long-long story, boring!`,
          `This is a bad film`
        ][Math.floor(Math.random() * 3)],
        author: [
          `Peter Piper`,
          `Mike Lokki`,
          `Tim Macoveev`
        ][Math.floor(Math.random() * 3)],
        reaction: [
          `😴`,
          `😐`,
          `😀`][Math.floor(Math.random() * 3)],
        date: [
          getRundomTimestamp(),
          getRundomTimestamp(),
          getRundomTimestamp()
        ][Math.floor(Math.random() * 3)],
      },
      {
        text: [
          `This is a great film`,
          `So long-long story, boring!`,
          `This is a bad film`
        ][Math.floor(Math.random() * 3)],
        author: [
          `Peter Piper`,
          `Mike Lokki`,
          `Tim Macoveev`
        ][Math.floor(Math.random() * 3)],
        reaction: [
          `😴`,
          `😐`,
          `😀`][Math.floor(Math.random() * 3)],
        date: [
          getRundomTimestamp(),
          getRundomTimestamp(),
          getRundomTimestamp()
        ][Math.floor(Math.random() * 3)],
      },
      {
        text: [
          `This is a great film`,
          `So long-long story, boring!`,
          `This is a bad film`
        ][Math.floor(Math.random() * 3)],
        author: [
          `Peter Piper`,
          `Mike Lokki`,
          `Tim Macoveev`
        ][Math.floor(Math.random() * 3)],
        reaction: [
          `😴`,
          `😐`,
          `😀`][Math.floor(Math.random() * 3)],
        date: [
          getRundomTimestamp(),
          getRundomTimestamp(),
          getRundomTimestamp()
        ][Math.floor(Math.random() * 3)],
      }
    ],
    isInWatchList: false,
    isWatched: false,
  },
  {
    id: 5,
    title: `Богемская рапсодия`,
    poster: [
      `accused.jpg`,
      `blackmail.jpg`,
      `blue-blazes.jpg`,
      `fuga-da-new-york.jpg`,
      `moonrise.jpg`,
      `three-friends.jpg`,
    ][Math.floor(Math.random() * 6)],
    description: [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      `Cras aliquet varius magna, non porta ligula feugiat eget.`,
      `Fusce tristique felis at fermentum pharetra.`,
      `Aliquam id orci ut lectus varius viverra.`,
      `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
      `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
      `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
      `Sed sed nisi sed augue convallis suscipit in sed felis.`,
      `Aliquam erat volutpat.`,
      `Nunc fermentum tortor ac porta dapibus.`,
      `In rutrum ac purus sit amet tempus`,
    ][Math.floor(Math.random() * 11)],
    rating: [
      9.8,
      1.2,
    ][Math.floor(Math.random() * 2)],
    date: getRundomTimestamp(),
    duration: [
      73,
      60,
    ][Math.floor(Math.random() * 2)],
    genre: [
      `Comedy`,
      `Horror`,
    ][Math.floor(Math.random() * 2)],
    comments: [
      {
        text: [
          `This is a great film`,
          `So long-long story, boring!`,
          `This is a bad film`
        ][Math.floor(Math.random() * 3)],
        author: [
          `Peter Piper`,
          `Mike Lokki`,
          `Tim Macoveev`
        ][Math.floor(Math.random() * 3)],
        reaction: [
          `😴`,
          `😐`,
          `😀`][Math.floor(Math.random() * 3)],
        date: [
          getRundomTimestamp(),
          getRundomTimestamp(),
          getRundomTimestamp()
        ][Math.floor(Math.random() * 3)],
      },
      {
        text: [
          `This is a great film`,
          `So long-long story, boring!`,
          `This is a bad film`
        ][Math.floor(Math.random() * 3)],
        author: [
          `Peter Piper`,
          `Mike Lokki`,
          `Tim Macoveev`
        ][Math.floor(Math.random() * 3)],
        reaction: [
          `😴`,
          `😐`,
          `😀`][Math.floor(Math.random() * 3)],
        date: [
          getRundomTimestamp(),
          getRundomTimestamp(),
          getRundomTimestamp()
        ][Math.floor(Math.random() * 3)],
      },
      {
        text: [
          `This is a great film`,
          `So long-long story, boring!`,
          `This is a bad film`
        ][Math.floor(Math.random() * 3)],
        author: [
          `Peter Piper`,
          `Mike Lokki`,
          `Tim Macoveev`
        ][Math.floor(Math.random() * 3)],
        reaction: [
          `😴`,
          `😐`,
          `😀`][Math.floor(Math.random() * 3)],
        date: [
          getRundomTimestamp(),
          getRundomTimestamp(),
          getRundomTimestamp()
        ][Math.floor(Math.random() * 3)],
      }
    ],
    isInWatchList: false,
    isWatched: false,
  },
  {
    id: 6,
    title: `Тихое место`,
    poster: [
      `accused.jpg`,
      `blackmail.jpg`,
      `blue-blazes.jpg`,
      `fuga-da-new-york.jpg`,
      `moonrise.jpg`,
      `three-friends.jpg`,
    ][Math.floor(Math.random() * 6)],
    description: [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      `Cras aliquet varius magna, non porta ligula feugiat eget.`,
      `Fusce tristique felis at fermentum pharetra.`,
      `Aliquam id orci ut lectus varius viverra.`,
      `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
      `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
      `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
      `Sed sed nisi sed augue convallis suscipit in sed felis.`,
      `Aliquam erat volutpat.`,
      `Nunc fermentum tortor ac porta dapibus.`,
      `In rutrum ac purus sit amet tempus`,
    ][Math.floor(Math.random() * 11)],
    rating: [
      9.8,
      1.2,
    ][Math.floor(Math.random() * 2)],
    date: getRundomTimestamp(),
    duration: [
      73,
      60,
    ][Math.floor(Math.random() * 2)],
    genre: [
      `Comedy`,
      `Horror`,
    ][Math.floor(Math.random() * 2)],
    comments: [
      {
        text: [
          `This is a great film`,
          `So long-long story, boring!`,
          `This is a bad film`
        ][Math.floor(Math.random() * 3)],
        author: [
          `Peter Piper`,
          `Mike Lokki`,
          `Tim Macoveev`
        ][Math.floor(Math.random() * 3)],
        reaction: [
          `😴`,
          `😐`,
          `😀`][Math.floor(Math.random() * 3)],
        date: [
          getRundomTimestamp(),
          getRundomTimestamp(),
          getRundomTimestamp()
        ][Math.floor(Math.random() * 3)],
      },
      {
        text: [
          `This is a great film`,
          `So long-long story, boring!`,
          `This is a bad film`
        ][Math.floor(Math.random() * 3)],
        author: [
          `Peter Piper`,
          `Mike Lokki`,
          `Tim Macoveev`
        ][Math.floor(Math.random() * 3)],
        reaction: [
          `😴`,
          `😐`,
          `😀`][Math.floor(Math.random() * 3)],
        date: [
          getRundomTimestamp(),
          getRundomTimestamp(),
          getRundomTimestamp()
        ][Math.floor(Math.random() * 3)],
      },
      {
        text: [
          `This is a great film`,
          `So long-long story, boring!`,
          `This is a bad film`
        ][Math.floor(Math.random() * 3)],
        author: [
          `Peter Piper`,
          `Mike Lokki`,
          `Tim Macoveev`
        ][Math.floor(Math.random() * 3)],
        reaction: [
          `😴`,
          `😐`,
          `😀`][Math.floor(Math.random() * 3)],
        date: [
          getRundomTimestamp(),
          getRundomTimestamp(),
          getRundomTimestamp()
        ][Math.floor(Math.random() * 3)],
      }
    ],
    isInWatchList: false,
    isWatched: false,
  },
  {
    id: 7,
    title: `Как разговаривать с девушками на вечеринках`,
    poster: [
      `accused.jpg`,
      `blackmail.jpg`,
      `blue-blazes.jpg`,
      `fuga-da-new-york.jpg`,
      `moonrise.jpg`,
      `three-friends.jpg`,
    ][Math.floor(Math.random() * 6)],
    description: [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      `Cras aliquet varius magna, non porta ligula feugiat eget.`,
      `Fusce tristique felis at fermentum pharetra.`,
      `Aliquam id orci ut lectus varius viverra.`,
      `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
      `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
      `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
      `Sed sed nisi sed augue convallis suscipit in sed felis.`,
      `Aliquam erat volutpat.`,
      `Nunc fermentum tortor ac porta dapibus.`,
      `In rutrum ac purus sit amet tempus`,
    ][Math.floor(Math.random() * 11)],
    rating: [
      9.8,
      1.2,
    ][Math.floor(Math.random() * 2)],
    date: getRundomTimestamp(),
    duration: [
      73,
      60,
    ][Math.floor(Math.random() * 2)],
    genre: [
      `Comedy`,
      `Horror`,
    ][Math.floor(Math.random() * 2)],
    comments: [
      {
        text: [
          `This is a great film`,
          `So long-long story, boring!`,
          `This is a bad film`
        ][Math.floor(Math.random() * 3)],
        author: [
          `Peter Piper`,
          `Mike Lokki`,
          `Tim Macoveev`
        ][Math.floor(Math.random() * 3)],
        reaction: [
          `😴`,
          `😐`,
          `😀`][Math.floor(Math.random() * 3)],
        date: [
          getRundomTimestamp(),
          getRundomTimestamp(),
          getRundomTimestamp()
        ][Math.floor(Math.random() * 3)],
      },
      {
        text: [
          `This is a great film`,
          `So long-long story, boring!`,
          `This is a bad film`
        ][Math.floor(Math.random() * 3)],
        author: [
          `Peter Piper`,
          `Mike Lokki`,
          `Tim Macoveev`
        ][Math.floor(Math.random() * 3)],
        reaction: [
          `😴`,
          `😐`,
          `😀`][Math.floor(Math.random() * 3)],
        date: [
          getRundomTimestamp(),
          getRundomTimestamp(),
          getRundomTimestamp()
        ][Math.floor(Math.random() * 3)],
      },
      {
        text: [
          `This is a great film`,
          `So long-long story, boring!`,
          `This is a bad film`
        ][Math.floor(Math.random() * 3)],
        author: [
          `Peter Piper`,
          `Mike Lokki`,
          `Tim Macoveev`
        ][Math.floor(Math.random() * 3)],
        reaction: [
          `😴`,
          `😐`,
          `😀`][Math.floor(Math.random() * 3)],
        date: [
          getRundomTimestamp(),
          getRundomTimestamp(),
          getRundomTimestamp()
        ][Math.floor(Math.random() * 3)],
      }
    ],
    isInWatchList: false,
    isWatched: false,
  },
  {
    id: 8,
    title: `Реинкарнация`,
    poster: [
      `accused.jpg`,
      `blackmail.jpg`,
      `blue-blazes.jpg`,
      `fuga-da-new-york.jpg`,
      `moonrise.jpg`,
      `three-friends.jpg`,
    ][Math.floor(Math.random() * 6)],
    description: [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      `Cras aliquet varius magna, non porta ligula feugiat eget.`,
      `Fusce tristique felis at fermentum pharetra.`,
      `Aliquam id orci ut lectus varius viverra.`,
      `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
      `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
      `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
      `Sed sed nisi sed augue convallis suscipit in sed felis.`,
      `Aliquam erat volutpat.`,
      `Nunc fermentum tortor ac porta dapibus.`,
      `In rutrum ac purus sit amet tempus`,
    ][Math.floor(Math.random() * 11)],
    rating: [
      9.8,
      1.2,
    ][Math.floor(Math.random() * 2)],
    date: getRundomTimestamp(),
    duration: [
      73,
      60,
    ][Math.floor(Math.random() * 2)],
    genre: [
      `Comedy`,
      `Horror`,
    ][Math.floor(Math.random() * 2)],
    comments: [
      {
        text: [
          `This is a great film`,
          `So long-long story, boring!`,
          `This is a bad film`
        ][Math.floor(Math.random() * 3)],
        author: [
          `Peter Piper`,
          `Mike Lokki`,
          `Tim Macoveev`
        ][Math.floor(Math.random() * 3)],
        reaction: [
          `😴`,
          `😐`,
          `😀`][Math.floor(Math.random() * 3)],
        date: [
          getRundomTimestamp(),
          getRundomTimestamp(),
          getRundomTimestamp()
        ][Math.floor(Math.random() * 3)],
      },
      {
        text: [
          `This is a great film`,
          `So long-long story, boring!`,
          `This is a bad film`
        ][Math.floor(Math.random() * 3)],
        author: [
          `Peter Piper`,
          `Mike Lokki`,
          `Tim Macoveev`
        ][Math.floor(Math.random() * 3)],
        reaction: [
          `😴`,
          `😐`,
          `😀`][Math.floor(Math.random() * 3)],
        date: [
          getRundomTimestamp(),
          getRundomTimestamp(),
          getRundomTimestamp()
        ][Math.floor(Math.random() * 3)],
      },
      {
        text: [
          `This is a great film`,
          `So long-long story, boring!`,
          `This is a bad film`
        ][Math.floor(Math.random() * 3)],
        author: [
          `Peter Piper`,
          `Mike Lokki`,
          `Tim Macoveev`
        ][Math.floor(Math.random() * 3)],
        reaction: [
          `😴`,
          `😐`,
          `😀`][Math.floor(Math.random() * 3)],
        date: [
          getRundomTimestamp(),
          getRundomTimestamp(),
          getRundomTimestamp()
        ][Math.floor(Math.random() * 3)],
      }
    ],
    isInWatchList: false,
    isWatched: false,
  },
  {
    id: 9,
    title: `Черная Пантера`,
    poster: [
      `accused.jpg`,
      `blackmail.jpg`,
      `blue-blazes.jpg`,
      `fuga-da-new-york.jpg`,
      `moonrise.jpg`,
      `three-friends.jpg`,
    ][Math.floor(Math.random() * 6)],
    description: [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      `Cras aliquet varius magna, non porta ligula feugiat eget.`,
      `Fusce tristique felis at fermentum pharetra.`,
      `Aliquam id orci ut lectus varius viverra.`,
      `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
      `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
      `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
      `Sed sed nisi sed augue convallis suscipit in sed felis.`,
      `Aliquam erat volutpat.`,
      `Nunc fermentum tortor ac porta dapibus.`,
      `In rutrum ac purus sit amet tempus`,
    ][Math.floor(Math.random() * 11)],
    rating: [
      9.8,
      1.2,
    ][Math.floor(Math.random() * 2)],
    date: getRundomTimestamp(),
    duration: [
      73,
      60,
    ][Math.floor(Math.random() * 2)],
    genre: [
      `Comedy`,
      `Horror`,
    ][Math.floor(Math.random() * 2)],
    comments: [
      {
        text: [
          `This is a great film`,
          `So long-long story, boring!`,
          `This is a bad film`
        ][Math.floor(Math.random() * 3)],
        author: [
          `Peter Piper`,
          `Mike Lokki`,
          `Tim Macoveev`
        ][Math.floor(Math.random() * 3)],
        reaction: [
          `😴`,
          `😐`,
          `😀`][Math.floor(Math.random() * 3)],
        date: [
          getRundomTimestamp(),
          getRundomTimestamp(),
          getRundomTimestamp()
        ][Math.floor(Math.random() * 3)],
      },
      {
        text: [
          `This is a great film`,
          `So long-long story, boring!`,
          `This is a bad film`
        ][Math.floor(Math.random() * 3)],
        author: [
          `Peter Piper`,
          `Mike Lokki`,
          `Tim Macoveev`
        ][Math.floor(Math.random() * 3)],
        reaction: [
          `😴`,
          `😐`,
          `😀`][Math.floor(Math.random() * 3)],
        date: [
          getRundomTimestamp(),
          getRundomTimestamp(),
          getRundomTimestamp()
        ][Math.floor(Math.random() * 3)],
      },
      {
        text: [
          `This is a great film`,
          `So long-long story, boring!`,
          `This is a bad film`
        ][Math.floor(Math.random() * 3)],
        author: [
          `Peter Piper`,
          `Mike Lokki`,
          `Tim Macoveev`
        ][Math.floor(Math.random() * 3)],
        reaction: [
          `😴`,
          `😐`,
          `😀`][Math.floor(Math.random() * 3)],
        date: [
          getRundomTimestamp(),
          getRundomTimestamp(),
          getRundomTimestamp()
        ][Math.floor(Math.random() * 3)],
      }
    ],
    isInWatchList: false,
    isWatched: false,
  },
  {
    id: 10,
    title: `Человек-паук: Через вселенные`,
    poster: [
      `accused.jpg`,
      `blackmail.jpg`,
      `blue-blazes.jpg`,
      `fuga-da-new-york.jpg`,
      `moonrise.jpg`,
      `three-friends.jpg`,
    ][Math.floor(Math.random() * 6)],
    description: [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      `Cras aliquet varius magna, non porta ligula feugiat eget.`,
      `Fusce tristique felis at fermentum pharetra.`,
      `Aliquam id orci ut lectus varius viverra.`,
      `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
      `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
      `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
      `Sed sed nisi sed augue convallis suscipit in sed felis.`,
      `Aliquam erat volutpat.`,
      `Nunc fermentum tortor ac porta dapibus.`,
      `In rutrum ac purus sit amet tempus`,
    ][Math.floor(Math.random() * 11)],
    rating: [
      9.8,
      1.2,
    ][Math.floor(Math.random() * 2)],
    date: getRundomTimestamp(),
    duration: [
      73,
      60,
    ][Math.floor(Math.random() * 2)],
    genre: [
      `Comedy`,
      `Horror`,
    ][Math.floor(Math.random() * 2)],
    comments: [
      {
        text: [
          `This is a great film`,
          `So long-long story, boring!`,
          `This is a bad film`
        ][Math.floor(Math.random() * 3)],
        author: [
          `Peter Piper`,
          `Mike Lokki`,
          `Tim Macoveev`
        ][Math.floor(Math.random() * 3)],
        reaction: [
          `😴`,
          `😐`,
          `😀`][Math.floor(Math.random() * 3)],
        date: [
          getRundomTimestamp(),
          getRundomTimestamp(),
          getRundomTimestamp()
        ][Math.floor(Math.random() * 3)],
      },
      {
        text: [
          `This is a great film`,
          `So long-long story, boring!`,
          `This is a bad film`
        ][Math.floor(Math.random() * 3)],
        author: [
          `Peter Piper`,
          `Mike Lokki`,
          `Tim Macoveev`
        ][Math.floor(Math.random() * 3)],
        reaction: [
          `😴`,
          `😐`,
          `😀`][Math.floor(Math.random() * 3)],
        date: [
          getRundomTimestamp(),
          getRundomTimestamp(),
          getRundomTimestamp()
        ][Math.floor(Math.random() * 3)],
      },
      {
        text: [
          `This is a great film`,
          `So long-long story, boring!`,
          `This is a bad film`
        ][Math.floor(Math.random() * 3)],
        author: [
          `Peter Piper`,
          `Mike Lokki`,
          `Tim Macoveev`
        ][Math.floor(Math.random() * 3)],
        reaction: [
          `😴`,
          `😐`,
          `😀`][Math.floor(Math.random() * 3)],
        date: [
          getRundomTimestamp(),
          getRundomTimestamp(),
          getRundomTimestamp()
        ][Math.floor(Math.random() * 3)],
      }
    ],
    isInWatchList: false,
    isWatched: false,
  },
  {
    id: 11,
    title: `Первому игроку приготовиться`,
    poster: [
      `accused.jpg`,
      `blackmail.jpg`,
      `blue-blazes.jpg`,
      `fuga-da-new-york.jpg`,
      `moonrise.jpg`,
      `three-friends.jpg`,
    ][Math.floor(Math.random() * 6)],
    description: [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      `Cras aliquet varius magna, non porta ligula feugiat eget.`,
      `Fusce tristique felis at fermentum pharetra.`,
      `Aliquam id orci ut lectus varius viverra.`,
      `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
      `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
      `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
      `Sed sed nisi sed augue convallis suscipit in sed felis.`,
      `Aliquam erat volutpat.`,
      `Nunc fermentum tortor ac porta dapibus.`,
      `In rutrum ac purus sit amet tempus`,
    ][Math.floor(Math.random() * 11)],
    rating: [
      9.8,
      1.2,
    ][Math.floor(Math.random() * 2)],
    date: getRundomTimestamp(),
    duration: [
      73,
      60,
    ][Math.floor(Math.random() * 2)],
    genre: [
      `Comedy`,
      `Horror`,
    ][Math.floor(Math.random() * 2)],
    comments: [
      {
        text: [
          `This is a great film`,
          `So long-long story, boring!`,
          `This is a bad film`
        ][Math.floor(Math.random() * 3)],
        author: [
          `Peter Piper`,
          `Mike Lokki`,
          `Tim Macoveev`
        ][Math.floor(Math.random() * 3)],
        reaction: [
          `😴`,
          `😐`,
          `😀`][Math.floor(Math.random() * 3)],
        date: [
          getRundomTimestamp(),
          getRundomTimestamp(),
          getRundomTimestamp()
        ][Math.floor(Math.random() * 3)],
      },
      {
        text: [
          `This is a great film`,
          `So long-long story, boring!`,
          `This is a bad film`
        ][Math.floor(Math.random() * 3)],
        author: [
          `Peter Piper`,
          `Mike Lokki`,
          `Tim Macoveev`
        ][Math.floor(Math.random() * 3)],
        reaction: [
          `😴`,
          `😐`,
          `😀`][Math.floor(Math.random() * 3)],
        date: [
          getRundomTimestamp(),
          getRundomTimestamp(),
          getRundomTimestamp()
        ][Math.floor(Math.random() * 3)],
      },
      {
        text: [
          `This is a great film`,
          `So long-long story, boring!`,
          `This is a bad film`
        ][Math.floor(Math.random() * 3)],
        author: [
          `Peter Piper`,
          `Mike Lokki`,
          `Tim Macoveev`
        ][Math.floor(Math.random() * 3)],
        reaction: [
          `😴`,
          `😐`,
          `😀`][Math.floor(Math.random() * 3)],
        date: [
          getRundomTimestamp(),
          getRundomTimestamp(),
          getRundomTimestamp()
        ][Math.floor(Math.random() * 3)],
      }
    ],
    isInWatchList: false,
    isWatched: false,
  },
  {
    id: 12,
    title: `Экстаз`,
    poster: [
      `accused.jpg`,
      `blackmail.jpg`,
      `blue-blazes.jpg`,
      `fuga-da-new-york.jpg`,
      `moonrise.jpg`,
      `three-friends.jpg`,
    ][Math.floor(Math.random() * 6)],
    description: [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      `Cras aliquet varius magna, non porta ligula feugiat eget.`,
      `Fusce tristique felis at fermentum pharetra.`,
      `Aliquam id orci ut lectus varius viverra.`,
      `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
      `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
      `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
      `Sed sed nisi sed augue convallis suscipit in sed felis.`,
      `Aliquam erat volutpat.`,
      `Nunc fermentum tortor ac porta dapibus.`,
      `In rutrum ac purus sit amet tempus`,
    ][Math.floor(Math.random() * 11)],
    rating: [
      9.8,
      1.2,
    ][Math.floor(Math.random() * 2)],
    date: getRundomTimestamp(),
    duration: [
      73,
      60,
    ][Math.floor(Math.random() * 2)],
    genre: [
      `Comedy`,
      `Horror`,
    ][Math.floor(Math.random() * 2)],
    comments: [
      {
        text: [
          `This is a great film`,
          `So long-long story, boring!`,
          `This is a bad film`
        ][Math.floor(Math.random() * 3)],
        author: [
          `Peter Piper`,
          `Mike Lokki`,
          `Tim Macoveev`
        ][Math.floor(Math.random() * 3)],
        reaction: [
          `😴`,
          `😐`,
          `😀`][Math.floor(Math.random() * 3)],
        date: [
          getRundomTimestamp(),
          getRundomTimestamp(),
          getRundomTimestamp()
        ][Math.floor(Math.random() * 3)],
      },
      {
        text: [
          `This is a great film`,
          `So long-long story, boring!`,
          `This is a bad film`
        ][Math.floor(Math.random() * 3)],
        author: [
          `Peter Piper`,
          `Mike Lokki`,
          `Tim Macoveev`
        ][Math.floor(Math.random() * 3)],
        reaction: [
          `😴`,
          `😐`,
          `😀`][Math.floor(Math.random() * 3)],
        date: [
          getRundomTimestamp(),
          getRundomTimestamp(),
          getRundomTimestamp()
        ][Math.floor(Math.random() * 3)],
      },
      {
        text: [
          `This is a great film`,
          `So long-long story, boring!`,
          `This is a bad film`
        ][Math.floor(Math.random() * 3)],
        author: [
          `Peter Piper`,
          `Mike Lokki`,
          `Tim Macoveev`
        ][Math.floor(Math.random() * 3)],
        reaction: [
          `😴`,
          `😐`,
          `😀`][Math.floor(Math.random() * 3)],
        date: [
          getRundomTimestamp(),
          getRundomTimestamp(),
          getRundomTimestamp()
        ][Math.floor(Math.random() * 3)],
      }
    ],
    isInWatchList: false,
    isWatched: false,
  },
  {
    id: 13,
    title: `Мстители: Война бесконечности`,
    poster: [
      `accused.jpg`,
      `blackmail.jpg`,
      `blue-blazes.jpg`,
      `fuga-da-new-york.jpg`,
      `moonrise.jpg`,
      `three-friends.jpg`,
    ][Math.floor(Math.random() * 6)],
    description: [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      `Cras aliquet varius magna, non porta ligula feugiat eget.`,
      `Fusce tristique felis at fermentum pharetra.`,
      `Aliquam id orci ut lectus varius viverra.`,
      `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
      `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
      `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
      `Sed sed nisi sed augue convallis suscipit in sed felis.`,
      `Aliquam erat volutpat.`,
      `Nunc fermentum tortor ac porta dapibus.`,
      `In rutrum ac purus sit amet tempus`,
    ][Math.floor(Math.random() * 11)],
    rating: [
      9.8,
      1.2,
    ][Math.floor(Math.random() * 2)],
    date: getRundomTimestamp(),
    duration: [
      73,
      60,
    ][Math.floor(Math.random() * 2)],
    genre: [
      `Comedy`,
      `Horror`,
    ][Math.floor(Math.random() * 2)],
    comments: [
      {
        text: [
          `This is a great film`,
          `So long-long story, boring!`,
          `This is a bad film`
        ][Math.floor(Math.random() * 3)],
        author: [
          `Peter Piper`,
          `Mike Lokki`,
          `Tim Macoveev`
        ][Math.floor(Math.random() * 3)],
        reaction: [
          `😴`,
          `😐`,
          `😀`][Math.floor(Math.random() * 3)],
        date: [
          getRundomTimestamp(),
          getRundomTimestamp(),
          getRundomTimestamp()
        ][Math.floor(Math.random() * 3)],
      },
      {
        text: [
          `This is a great film`,
          `So long-long story, boring!`,
          `This is a bad film`
        ][Math.floor(Math.random() * 3)],
        author: [
          `Peter Piper`,
          `Mike Lokki`,
          `Tim Macoveev`
        ][Math.floor(Math.random() * 3)],
        reaction: [
          `😴`,
          `😐`,
          `😀`][Math.floor(Math.random() * 3)],
        date: [
          getRundomTimestamp(),
          getRundomTimestamp(),
          getRundomTimestamp()
        ][Math.floor(Math.random() * 3)],
      },
      {
        text: [
          `This is a great film`,
          `So long-long story, boring!`,
          `This is a bad film`
        ][Math.floor(Math.random() * 3)],
        author: [
          `Peter Piper`,
          `Mike Lokki`,
          `Tim Macoveev`
        ][Math.floor(Math.random() * 3)],
        reaction: [
          `😴`,
          `😐`,
          `😀`][Math.floor(Math.random() * 3)],
        date: [
          getRundomTimestamp(),
          getRundomTimestamp(),
          getRundomTimestamp()
        ][Math.floor(Math.random() * 3)],
      }
    ],
    isInWatchList: false,
    isWatched: false,
  },
  {
    id: 14,
    title: `Лето`,
    poster: [
      `accused.jpg`,
      `blackmail.jpg`,
      `blue-blazes.jpg`,
      `fuga-da-new-york.jpg`,
      `moonrise.jpg`,
      `three-friends.jpg`,
    ][Math.floor(Math.random() * 6)],
    description: [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      `Cras aliquet varius magna, non porta ligula feugiat eget.`,
      `Fusce tristique felis at fermentum pharetra.`,
      `Aliquam id orci ut lectus varius viverra.`,
      `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
      `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
      `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
      `Sed sed nisi sed augue convallis suscipit in sed felis.`,
      `Aliquam erat volutpat.`,
      `Nunc fermentum tortor ac porta dapibus.`,
      `In rutrum ac purus sit amet tempus`,
    ][Math.floor(Math.random() * 11)],
    rating: [
      9.8,
      1.2,
    ][Math.floor(Math.random() * 2)],
    date: getRundomTimestamp(),
    duration: [
      73,
      60,
    ][Math.floor(Math.random() * 2)],
    genre: [
      `Comedy`,
      `Horror`,
    ][Math.floor(Math.random() * 2)],
    comments: [
      {
        text: [
          `This is a great film`,
          `So long-long story, boring!`,
          `This is a bad film`
        ][Math.floor(Math.random() * 3)],
        author: [
          `Peter Piper`,
          `Mike Lokki`,
          `Tim Macoveev`
        ][Math.floor(Math.random() * 3)],
        reaction: [
          `😴`,
          `😐`,
          `😀`][Math.floor(Math.random() * 3)],
        date: [
          getRundomTimestamp(),
          getRundomTimestamp(),
          getRundomTimestamp()
        ][Math.floor(Math.random() * 3)],
      },
      {
        text: [
          `This is a great film`,
          `So long-long story, boring!`,
          `This is a bad film`
        ][Math.floor(Math.random() * 3)],
        author: [
          `Peter Piper`,
          `Mike Lokki`,
          `Tim Macoveev`
        ][Math.floor(Math.random() * 3)],
        reaction: [
          `😴`,
          `😐`,
          `😀`][Math.floor(Math.random() * 3)],
        date: [
          getRundomTimestamp(),
          getRundomTimestamp(),
          getRundomTimestamp()
        ][Math.floor(Math.random() * 3)],
      },
      {
        text: [
          `This is a great film`,
          `So long-long story, boring!`,
          `This is a bad film`
        ][Math.floor(Math.random() * 3)],
        author: [
          `Peter Piper`,
          `Mike Lokki`,
          `Tim Macoveev`
        ][Math.floor(Math.random() * 3)],
        reaction: [
          `😴`,
          `😐`,
          `😀`][Math.floor(Math.random() * 3)],
        date: [
          getRundomTimestamp(),
          getRundomTimestamp(),
          getRundomTimestamp()
        ][Math.floor(Math.random() * 3)],
      }
    ],
    isInWatchList: false,
    isWatched: false,
  },
  {
    id: 15,
    title: `Остров собак`,
    poster: [
      `accused.jpg`,
      `blackmail.jpg`,
      `blue-blazes.jpg`,
      `fuga-da-new-york.jpg`,
      `moonrise.jpg`,
      `three-friends.jpg`,
    ][Math.floor(Math.random() * 6)],
    description: [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      `Cras aliquet varius magna, non porta ligula feugiat eget.`,
      `Fusce tristique felis at fermentum pharetra.`,
      `Aliquam id orci ut lectus varius viverra.`,
      `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
      `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
      `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
      `Sed sed nisi sed augue convallis suscipit in sed felis.`,
      `Aliquam erat volutpat.`,
      `Nunc fermentum tortor ac porta dapibus.`,
      `In rutrum ac purus sit amet tempus`,
    ][Math.floor(Math.random() * 11)],
    rating: [
      9.8,
      1.2,
    ][Math.floor(Math.random() * 2)],
    date: getRundomTimestamp(),
    duration: [
      73,
      60,
    ][Math.floor(Math.random() * 2)],
    genre: [
      `Comedy`,
      `Horror`,
    ][Math.floor(Math.random() * 2)],
    comments: [
      {
        text: [
          `This is a great film`,
          `So long-long story, boring!`,
          `This is a bad film`
        ][Math.floor(Math.random() * 3)],
        author: [
          `Peter Piper`,
          `Mike Lokki`,
          `Tim Macoveev`
        ][Math.floor(Math.random() * 3)],
        reaction: [
          `😴`,
          `😐`,
          `😀`][Math.floor(Math.random() * 3)],
        date: [
          getRundomTimestamp(),
          getRundomTimestamp(),
          getRundomTimestamp()
        ][Math.floor(Math.random() * 3)],
      },
      {
        text: [
          `This is a great film`,
          `So long-long story, boring!`,
          `This is a bad film`
        ][Math.floor(Math.random() * 3)],
        author: [
          `Peter Piper`,
          `Mike Lokki`,
          `Tim Macoveev`
        ][Math.floor(Math.random() * 3)],
        reaction: [
          `😴`,
          `😐`,
          `😀`][Math.floor(Math.random() * 3)],
        date: [
          getRundomTimestamp(),
          getRundomTimestamp(),
          getRundomTimestamp()
        ][Math.floor(Math.random() * 3)],
      },
      {
        text: [
          `This is a great film`,
          `So long-long story, boring!`,
          `This is a bad film`
        ][Math.floor(Math.random() * 3)],
        author: [
          `Peter Piper`,
          `Mike Lokki`,
          `Tim Macoveev`
        ][Math.floor(Math.random() * 3)],
        reaction: [
          `😴`,
          `😐`,
          `😀`][Math.floor(Math.random() * 3)],
        date: [
          getRundomTimestamp(),
          getRundomTimestamp(),
          getRundomTimestamp()
        ][Math.floor(Math.random() * 3)],
      }
    ],
    isInWatchList: false,
    isWatched: false,
  }
];
