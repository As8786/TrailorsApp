import * as actions from "../Actions"

const SelectedMovieReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SELECT_MOVIE:
            return moviesList.filter(el => el.name === action.payload)[0]
        default:
            return state
    }
}


export default SelectedMovieReducer

let initialState = {
    name: "",
    director: "",
    description: "",
    genre: [],
    year: "",
    rate: "",
    stars: []
}

let moviesList = [
    {
        name: "The Godfather", language: ["French", "English"], genre: ["Drama", "Crime"], stars: ["Marlon Brando", "Al Pacino", "James Caan"], director: "Francis Ford Coppola", yot: "1x0GpEZnwa8",
        description: `Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.`,
        img: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,704,1000_AL_.jpg", rate: 9.2, year: 1972
    },
    {
        name: "Pulp Fiction", language: ["French", "English"], stars: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"], director: "Quentin Tarantino", yot: "5ZAhzsi1ybM",
        description: `A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.`,
        genre: ["Thriller", "Comedy"], year: 1994, rate: 8.9, img: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,686,1000_AL_.jpg"
    },
    {
        name: "Forrest Gump", language: ["French", "English"], stars: ["Tom Hanks", "Robin Wright", "Gary Sinise"], director: "Robert Zemeckis", yot: "XHhAG-YLdk8",
        description: `A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.`,
        genre: ["Drama", "Comdey", "Romance"], year: 1994, rate: 8.8, img: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
    },
    {
        name: "Inception", language: ["French", "English"], stars: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"], director: "Christopher Nolan", yot: "YoHD9XEInc0",
        description: `Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: "inception", the implantation of another person's idea into a target's subconscious.`,
        genre: ["Adventure", "Action"], year: 2010, rate: 8.7, img: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg"
    },
    {
        name: "Joker", year: 2019, language: ["French", "English"], stars: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"], director: "Todd Phillips", yot: "t433PEQGErc",
        description: `During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.`,
        genre: ["Thriller", "Drama"], rate: 8.6, img: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
    },
    {
        name: "Interstellar", language: ["French", "English"], genre: ["Adventure", "Drama"], yot: "Lm8p5rlrSkY",
        description: `A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.`,
        img: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg", rate: 8.6, year: 2014,
        stars: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"], director: "Christopher Nolan"
    },
    {
        name: "Goodfellas", language: ["French", "English"], genre: ["Adventure", "Drama"], yot: "2ilzidi_J8Q",
        description: `The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito.`,
        img: "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX667_CR0,0,667,999_AL_.jpg", rate: 8.7, year: 1994,
        stars: ["Robert De Niro", "Ray Liotta", "Joe Pesci"], director: "Martin Scorsese"
    },
    {
        name: "Django Unchained", language: ["French", "Espagnol"], genre: ["Adventure", "Drama"], yot: "0fUCuvNlOCg",
        description: `With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner..`,
        img: "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_SY1000_CR0,0,674,1000_AL_.jpg", rate: 8.4, year: 2012,
        stars: ["Jamie Foxx", "Christoph Waltz", "Leonardo DiCaprio"], director: "Quentin Tarantino"
    },
    {
        name: "Deadpool", language: ["French", "English"], genre: ["Action", "Adventure", "Comedy"], yot: "gtTfd6tISfw",
        description: `A wisecracking gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks.`,
        img: "https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,666,1000_AL_.jpg", rate: 8, year: 2016,
        stars: ["Ryan Reynolds", "Morena Baccarin", "T.J. Miller"], director: "Tim Miller"
    },

    {
        name: "The Hateful Eight", language: ["French", "English"], stars: ["Samuel L. Jackson", "Kurt Russell", "Jennifer Jason Leigh"], director: "Quentin Tarantino", yot: "nIOmotayDMY",
        description: `In the dead of a Wyoming winter, a bounty hunter and his prisoner find shelter in a cabin currently inhabited by a collection of nefarious characters.`,
        genre: ["Drama", "Mystery"], year: 2015, rate: 7.8, img: "https://m.media-amazon.com/images/M/MV5BMjA1MTc1NTg5NV5BMl5BanBnXkFtZTgwOTM2MDEzNzE@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
    },
    {
        name: "The Wolf of Wall Street", language: ["French", "English"], stars: ["Leonardo DiCaprio", "Jonah Hill", "Margot Robbie"], director: "Martin Scorsese", yot: "pabEtIERlic",
        description: `Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.`,
        genre: ["Biography", "Thriller"], year: 2013, rate: 8.2, img: "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
    },
    {
        name: "Shutter Island", language: ["French", "English"], stars: ["Leonardo DiCaprio", "Emily Mortimer", "Mark Ruffalo"], director: "Martin Scorsese", yot: "v8yrZSkKxTA",
        description: `In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.`,
        genre: ["Mystery", "Thriller"], year: 2010, rate: 8.1, img: "https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_CR0,0,675,1000_AL_.jpg"
    },
    {
        name: "Good Will Hunting", language: ["French", "English"], stars: ["Robin Williams", "Matt Damon", "Ben Affleck"], director: "Gus Van Sant", yot: "PaZVjZEFkRs",
        description: `Will Hunting, a janitor at M.I.T., has a gift for mathematics, but needs help from a psychologist to find direction in his life.`,
        genre: ["Romance", "Drama"], year: 1997, rate: 8.3, img: "https://m.media-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,655,1000_AL_.jpg"
    },
    {
        name: "The Martian", language: ["French", "English"], stars: ["Matt Damon", "Jessica Chastain", "Kristen Wiig"], director: "Ridley Scott", yot: 'ErkgC-8BfnE',
        description: `An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive.`,
        genre: ["Action", "Drama", "Sci-Fi"], year: 2015, rate: 8.0, img: "https://m.media-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_SY1000_CR0,0,675,1000_AL_.jpg"
    },
    {
        name: "The Revenant", language: ["French", "English"], stars: ["Leonardo DiCaprio", "Tom Hardy", "Will Poulter"], director: "Alejandro G. Iñárritu", yot: "Wg72UQCJFEM",
        description: `A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.`,
        genre: ["Action", "Adventure", "Biography"], year: 2015, rate: 8.0, img: "https://m.media-amazon.com/images/M/MV5BMDE5OWMzM2QtOTU2ZS00NzAyLWI2MDEtOTRlYjIxZGM0OWRjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX672_CR0,0,672,999_AL_.jpg"
    },
    {
        name: "Mad Max: Fury Road", language: ["French", "English"], stars: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"], director: "George Miller", yot: "woHTUsl66BY",
        description: `In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.`,
        genre: ["Action", "Adventure", "Sci-Fi"], year: 2015, rate: 8.1, img: "https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
    },
    {
        name: "Logan", language: ["French", "English"], stars: ["Hugh Jackman", "Patrick Stewart", "Dafne Keen"], director: "James Mangold", yot: "gbug3zTm3Ws",
        description: `In a future where mutants are nearly extinct, an elderly and weary Logan leads a quiet life. But when Laura, a mutant child pursued by scientists, comes to him for help, he must get her to safety.`,
        genre: ["Action", "Drama", "Sci-Fi"], year: 2017, rate: 7.9, img: "https://m.media-amazon.com/images/M/MV5BYzc5MTU4N2EtYTkyMi00NjdhLTg3NWEtMTY4OTEyMzJhZTAzXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg"
    },
    {
        name: "Venom", language: ["French", "English"], stars: ["Tom Hardy", "Michelle Williams", "Riz Ahmed"], director: "Ruben Fleischer", yot: "UfChVGHZhDQ",
        description: `A failed reporter is bonded to an alien entity, one of many symbiotes who have invaded Earth. But the being takes a liking to Earth and decides to protect it.`,
        genre: ["Action", "Adventure", "Thriller"], year: 2018, rate: 6.7, img: "https://m.media-amazon.com/images/M/MV5BNzAwNzUzNjY4MV5BMl5BanBnXkFtZTgwMTQ5MzM0NjM@._V1_.jpg"
    },
    {
        name: "Avengers: Infinity War", language: ["French", "English"], stars: ["Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"], director: "Anthony Russo", yot: "B65hW9YYY5A",
        description: `The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.`,
        genre: ["Action", "Adventure", "Sci-Fi"], year: 2018, rate: 8.5, img: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
    },
    {
        name: "The Rainmaker", language: ["French", "English"], stars: ["Matt Damon", "Danny DeVito", "Claire Danes"], director: "Francis Ford Coppola", yot: "TpOPvupzWow",
        description: `An underdog lawyer takes on a fraudulent insurance company.`,
        genre: ["Crime", "Drama", "Thriller"], year: 1997, rate: 7.2, img: "https://m.media-amazon.com/images/M/MV5BMjdlMjI2ZjgtN2ViOS00ZmI0LWE0ZTMtZjg1ZjczYWYzOGZjL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg"
    },
    {
        name: "Casino", language: ["French", "English"], stars: ["Robert De Niro", "Sharon Stone", "Joe Pesci"], director: "Martin Scorsese", yot: "EJXDMwGWhoA",
        description: `A tale of greed, deception, money, power, and murder occur between two best friends: a mafia enforcer and a casino executive, compete against each other over a gambling empire, and over a fast living and fast loving socialite.`,
        genre: ["Action", "Adventure", "Sci-Fi"], year: 1994, rate: 8.2, img: "https://m.media-amazon.com/images/M/MV5BMTcxOWYzNDYtYmM4YS00N2NkLTk0NTAtNjg1ODgwZjAxYzI3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY1000_CR0,0,666,1000_AL_.jpg"
    },
    {
        name: "Snatch ", language: ["French", "English"], stars: ["Jason Statham", "Brad Pitt", "Benicio Del Toro"], director: "Guy Ritchie", yot: "9Jar2XkBboo",
        description: `Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond.`,
        genre: ["Comedy", "Sci-Fi"], year: 2000, rate: 8.3, img: "https://m.media-amazon.com/images/M/MV5BMTA2NDYxOGYtYjU1Mi00Y2QzLTgxMTQtMWI1MGI0ZGQ5MmU4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SY1000_SX684_AL_.jpg"
    },
    {
        name: "Sherlock Holmes", language: ["French", "English"], stars: ["Robert Downey Jr.", "Jude Law", "Rachel McAdams"], director: "Guy Ritchie", yot: "J7nJksXDBWc",
        description: `Detective Sherlock Holmes and his stalwart partner Watson engage in a battle of wits and brawn with a nemesis whose plot is a threat.`,
        genre: ["Action", "Adventure", "Crime"], year: 2009, rate: 7.6, img: "https://m.media-amazon.com/images/M/MV5BMTg0NjEwNjUxM15BMl5BanBnXkFtZTcwMzk0MjQ5Mg@@._V1_SY1000_CR0,0,669,1000_AL_.jpg"
    },

    {
        name: "Iron Man 3", language: ["French", "English"], stars: ["Robert Downey Jr.", "Guy Pearce", "Gwyneth Paltrow"], director: "Shane Black", yot: "BoohRoVA9WQ",
        description: `When Tony Stark's world is torn apart by a formidable called the Mandarin, he starts an odyssey of rebuilding and retribution.`,
        genre: ["Action", "Adventure", "Sci-Fi"], year: 2013, rate: 7.2, img: "https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_SY1000_SX700_AL_.jpg"
    },
    {
        name: "The Godfather 11111", language: ["French", "English"], genre: ["Drama", "Crime"], stars: ["Marlon Brando", "Al Pacino", "James Caan"], director: "Francis Ford Coppola", yot: "1x0GpEZnwa8",
        description: `Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.`,
        img: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,704,1000_AL_.jpg", rate: 9.2, year: 1972
    },
    {
        name: "Pulp Fiction 11111", language: ["French", "English"], stars: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"], director: "Quentin Tarantino", yot: "5ZAhzsi1ybM",
        description: `A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.`,
        genre: ["Thriller", "Comedy"], year: 1994, rate: 8.9, img: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,686,1000_AL_.jpg"
    },
    {
        name: "Forrest Gump 11111", language: ["French", "English"], stars: ["Tom Hanks", "Robin Wright", "Gary Sinise"], director: "Robert Zemeckis", yot: "XHhAG-YLdk8",
        description: `A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.`,
        genre: ["Drama", "Comdey", "Romance"], year: 1994, rate: 8.8, img: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
    },
    {
        name: "Inception 11111", language: ["French", "English"], stars: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"], director: "Christopher Nolan", yot: "YoHD9XEInc0",
        description: `Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: "inception", the implantation of another person's idea into a target's subconscious.`,
        genre: ["Adventure", "Action"], year: 2010, rate: 8.7, img: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg"
    },
    {
        name: "Joker 11111", year: 2019, language: ["French", "English"], stars: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"], director: "Todd Phillips", yot: "t433PEQGErc",
        description: `During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.`,
        genre: ["Thriller", "Drama"], rate: 8.6, img: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
    },
    {
        name: "Interstellar 11111", language: ["French", "English"], genre: ["Adventure", "Drama"], yot: "Lm8p5rlrSkY",
        description: `A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.`,
        img: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg", rate: 8.6, year: 2014,
        stars: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"], director: "Christopher Nolan"
    },
    {
        name: "Goodfellas 11111", language: ["French", "English"], genre: ["Adventure", "Drama"], yot: "2ilzidi_J8Q",
        description: `The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito.`,
        img: "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX667_CR0,0,667,999_AL_.jpg", rate: 8.7, year: 1994,
        stars: ["Robert De Niro", "Ray Liotta", "Joe Pesci"], director: "Martin Scorsese"
    },
    {
        name: "Django Unchained 11111", language: ["French", "Espagnol"], genre: ["Adventure", "Drama"], yot: "0fUCuvNlOCg",
        description: `With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner..`,
        img: "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_SY1000_CR0,0,674,1000_AL_.jpg", rate: 8.4, year: 2012,
        stars: ["Jamie Foxx", "Christoph Waltz", "Leonardo DiCaprio"], director: "Quentin Tarantino"
    },
    {
        name: "Deadpool 11111", language: ["French", "English"], genre: ["Action", "Adventure", "Comedy"], yot: "gtTfd6tISfw",
        description: `A wisecracking gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks.`,
        img: "https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,666,1000_AL_.jpg", rate: 8, year: 2016,
        stars: ["Ryan Reynolds", "Morena Baccarin", "T.J. Miller"], director: "Tim Miller"
    },

    {
        name: "The Hateful Eight 11111", language: ["French", "English"], stars: ["Samuel L. Jackson", "Kurt Russell", "Jennifer Jason Leigh"], director: "Quentin Tarantino", yot: "nIOmotayDMY",
        description: `In the dead of a Wyoming winter, a bounty hunter and his prisoner find shelter in a cabin currently inhabited by a collection of nefarious characters.`,
        genre: ["Drama", "Mystery"], year: 2015, rate: 7.8, img: "https://m.media-amazon.com/images/M/MV5BMjA1MTc1NTg5NV5BMl5BanBnXkFtZTgwOTM2MDEzNzE@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
    },
    {
        name: "The Wolf of Wall Street 11111", language: ["French", "English"], stars: ["Leonardo DiCaprio", "Jonah Hill", "Margot Robbie"], director: "Martin Scorsese", yot: "pabEtIERlic",
        description: `Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.`,
        genre: ["Biography", "Thriller"], year: 2013, rate: 8.2, img: "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
    },
    {
        name: "Shutter Island 11111", language: ["French", "English"], stars: ["Leonardo DiCaprio", "Emily Mortimer", "Mark Ruffalo"], director: "Martin Scorsese", yot: "v8yrZSkKxTA",
        description: `In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.`,
        genre: ["Mystery", "Thriller"], year: 2010, rate: 8.1, img: "https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_CR0,0,675,1000_AL_.jpg"
    },
    {
        name: "Good Will Hunting 11111", language: ["French", "English"], stars: ["Robin Williams", "Matt Damon", "Ben Affleck"], director: "Gus Van Sant", yot: "PaZVjZEFkRs",
        description: `Will Hunting, a janitor at M.I.T., has a gift for mathematics, but needs help from a psychologist to find direction in his life.`,
        genre: ["Romance", "Drama"], year: 1997, rate: 8.3, img: "https://m.media-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,655,1000_AL_.jpg"
    },
    {
        name: "The Martian 11111", language: ["French", "English"], stars: ["Matt Damon", "Jessica Chastain", "Kristen Wiig"], director: "Ridley Scott", yot: 'ErkgC-8BfnE',
        description: `An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive.`,
        genre: ["Action", "Drama", "Sci-Fi"], year: 2015, rate: 8.0, img: "https://m.media-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_SY1000_CR0,0,675,1000_AL_.jpg"
    },
    {
        name: "The Revenant 11111", language: ["French", "English"], stars: ["Leonardo DiCaprio", "Tom Hardy", "Will Poulter"], director: "Alejandro G. Iñárritu", yot: "Wg72UQCJFEM",
        description: `A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.`,
        genre: ["Action", "Adventure", "Biography"], year: 2015, rate: 8.0, img: "https://m.media-amazon.com/images/M/MV5BMDE5OWMzM2QtOTU2ZS00NzAyLWI2MDEtOTRlYjIxZGM0OWRjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX672_CR0,0,672,999_AL_.jpg"
    },
    {
        name: "Mad Max: Fury Road 11111", language: ["French", "English"], stars: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"], director: "George Miller", yot: "woHTUsl66BY",
        description: `In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.`,
        genre: ["Action", "Adventure", "Sci-Fi"], year: 2015, rate: 8.1, img: "https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
    },
    {
        name: "Logan 11111", language: ["French", "English"], stars: ["Hugh Jackman", "Patrick Stewart", "Dafne Keen"], director: "James Mangold", yot: "gbug3zTm3Ws",
        description: `In a future where mutants are nearly extinct, an elderly and weary Logan leads a quiet life. But when Laura, a mutant child pursued by scientists, comes to him for help, he must get her to safety.`,
        genre: ["Action", "Drama", "Sci-Fi"], year: 2017, rate: 7.9, img: "https://m.media-amazon.com/images/M/MV5BYzc5MTU4N2EtYTkyMi00NjdhLTg3NWEtMTY4OTEyMzJhZTAzXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg"
    },
    {
        name: "Venom 11111", language: ["French", "English"], stars: ["Tom Hardy", "Michelle Williams", "Riz Ahmed"], director: "Ruben Fleischer", yot: "UfChVGHZhDQ",
        description: `A failed reporter is bonded to an alien entity, one of many symbiotes who have invaded Earth. But the being takes a liking to Earth and decides to protect it.`,
        genre: ["Action", "Adventure", "Thriller"], year: 2018, rate: 6.7, img: "https://m.media-amazon.com/images/M/MV5BNzAwNzUzNjY4MV5BMl5BanBnXkFtZTgwMTQ5MzM0NjM@._V1_.jpg"
    },
    {
        name: "Avengers: Infinity War 11111", language: ["French", "English"], stars: ["Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"], director: "Anthony Russo", yot: "B65hW9YYY5A",
        description: `The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.`,
        genre: ["Action", "Adventure", "Sci-Fi"], year: 2018, rate: 8.5, img: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
    },
    {
        name: "The Rainmaker 11111", language: ["French", "English"], stars: ["Matt Damon", "Danny DeVito", "Claire Danes"], director: "Francis Ford Coppola", yot: "TpOPvupzWow",
        description: `An underdog lawyer takes on a fraudulent insurance company.`,
        genre: ["Crime", "Drama", "Thriller"], year: 1997, rate: 7.2, img: "https://m.media-amazon.com/images/M/MV5BMjdlMjI2ZjgtN2ViOS00ZmI0LWE0ZTMtZjg1ZjczYWYzOGZjL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg"
    },
    {
        name: "Casino 11111", language: ["French", "English"], stars: ["Robert De Niro", "Sharon Stone", "Joe Pesci"], director: "Martin Scorsese", yot: "EJXDMwGWhoA",
        description: `A tale of greed, deception, money, power, and murder occur between two best friends: a mafia enforcer and a casino executive, compete against each other over a gambling empire, and over a fast living and fast loving socialite.`,
        genre: ["Action", "Adventure", "Sci-Fi"], year: 1994, rate: 8.2, img: "https://m.media-amazon.com/images/M/MV5BMTcxOWYzNDYtYmM4YS00N2NkLTk0NTAtNjg1ODgwZjAxYzI3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY1000_CR0,0,666,1000_AL_.jpg"
    },
    {
        name: "Snatch 11111", language: ["French", "English"], stars: ["Jason Statham", "Brad Pitt", "Benicio Del Toro"], director: "Guy Ritchie", yot: "9Jar2XkBboo",
        description: `Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond.`,
        genre: ["Comedy", "Sci-Fi"], year: 2000, rate: 8.3, img: "https://m.media-amazon.com/images/M/MV5BMTA2NDYxOGYtYjU1Mi00Y2QzLTgxMTQtMWI1MGI0ZGQ5MmU4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SY1000_SX684_AL_.jpg"
    },
    {
        name: "Sherlock Holmes 11111", language: ["French", "English"], stars: ["Robert Downey Jr.", "Jude Law", "Rachel McAdams"], director: "Guy Ritchie", yot: "J7nJksXDBWc",
        description: `Detective Sherlock Holmes and his stalwart partner Watson engage in a battle of wits and brawn with a nemesis whose plot is a threat.`,
        genre: ["Action", "Adventure", "Crime"], year: 2009, rate: 7.6, img: "https://m.media-amazon.com/images/M/MV5BMTg0NjEwNjUxM15BMl5BanBnXkFtZTcwMzk0MjQ5Mg@@._V1_SY1000_CR0,0,669,1000_AL_.jpg"
    },

    {
        name: "Iron Man 3 11111", language: ["French", "English"], stars: ["Robert Downey Jr.", "Guy Pearce", "Gwyneth Paltrow"], director: "Shane Black", yot: "BoohRoVA9WQ",
        description: `When Tony Stark's world is torn apart by a formidable called the Mandarin, he starts an odyssey of rebuilding and retribution.`,
        genre: ["Action", "Adventure", "Sci-Fi"], year: 2013, rate: 7.2, img: "https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_SY1000_SX700_AL_.jpg"
    },
    {
        name: "Sherlock Holmes 22", language: ["French", "English"], stars: ["Robert Downey Jr.", "Jude Law", "Rachel McAdams"], director: "Guy Ritchie", yot: "J7nJksXDBWc",
        description: `Detective Sherlock Holmes and his stalwart partner Watson engage in a battle of wits and brawn with a nemesis whose plot is a threat.`,
        genre: ["Action", "Adventure", "Crime"], year: 2009, rate: 7.6, img: "https://m.media-amazon.com/images/M/MV5BMTg0NjEwNjUxM15BMl5BanBnXkFtZTcwMzk0MjQ5Mg@@._V1_SY1000_CR0,0,669,1000_AL_.jpg"
    },

    {
        name: "Iron Man 3 22", language: ["French", "English"], stars: ["Robert Downey Jr.", "Guy Pearce", "Gwyneth Paltrow"], director: "Shane Black", yot: "BoohRoVA9WQ",
        description: `When Tony Stark's world is torn apart by a formidable called the Mandarin, he starts an odyssey of rebuilding and retribution.`,
        genre: ["Action", "Adventure", "Sci-Fi"], year: 2013, rate: 7.2, img: "https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_SY1000_SX700_AL_.jpg"
    },
]
