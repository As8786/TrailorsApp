let moviesList = [
    {
        name: "The Godfather", genre: "Drama", stars: ["Marlon Brando", "Al Pacino", "James Caan"], director: "Francis Ford Coppola",
        description: `Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.`,
        img: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,704,1000_AL_.jpg", rate: 9.2, year: 1972
    },
    {
        name: "Pulp Fiction", stars: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"], director: "Quentin Tarantino",
        description: `A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.`,
        genre: "Thriller", year: 1994, rate: 8.9, img: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,686,1000_AL_.jpg"
    },
    {
        name: "Forrest Gump", stars: ["Tom Hanks", "Robin Wright", "Gary Sinise"], director: "Robert Zemeckis",
        description: `A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.`,
        genre: "Drama Comdey Romance", year: 1994, rate: 8.8, img: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
    },
    {
        name: "Inception", stars: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"], director: "Christopher Nolan",
        description: `Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: "inception", the implantation of another person's idea into a target's subconscious.`,
        genre: "Science-Fiction Adventure Action", year: 2010, rate: 8.7, img: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg"
    },
    {
        name: "Joker", year: 2019, stars: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"], director: "Todd Phillips",
        description: `During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.`,
        genre: "Thriller Drama", rate: 8.6, img: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
    },
    {
        name: "Interstellar", genre: "Drama Advanture",
        description: `A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.`,
        img: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg", rate: 8.6, year: 2014,
        stars: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"], director: "Christopher Nolan"
    },
    {
        name: "Goodfellas", genre: "Drama Advanture",
        description: `The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito.`,
        img: "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX667_CR0,0,667,999_AL_.jpg", rate: 8.7, year: 1994,
        stars: ["Robert De Niro", "Ray Liotta", "Joe Pesci"], director: "Martin Scorsese"
    },
    {
        name: "Django Unchained", genre: "Drama Advanture",
        description: `With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner..`,
        img: "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_SY1000_CR0,0,674,1000_AL_.jpg", rate: 8.4, year: 2012,
        stars: ["Jamie Foxx", "Christoph Waltz", "Leonardo DiCaprio"], director: "Quentin Tarantino"
    },
    {
        name: "Deadpool", genre: "Action Adventure Comedy",
        description: `A wisecracking gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks.`,
        img: "https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,666,1000_AL_.jpg", rate: 8, year: 2016,
        Stars: ["Ryan Reynolds", "Morena Baccarin", "T.J. Miller"], Director: "Tim Miller"
    },

    {
        name: "The Hateful Eight", stars: ["Samuel L. Jackson", "Kurt Russell", "Jennifer Jason Leigh"], director: "Quentin Tarantino",
        description: `In the dead of a Wyoming winter, a bounty hunter and his prisoner find shelter in a cabin currently inhabited by a collection of nefarious characters.`,
        genre: "Drama, Mystery", year: 2015, rate: 7.8, img: "https://m.media-amazon.com/images/M/MV5BMjA1MTc1NTg5NV5BMl5BanBnXkFtZTgwOTM2MDEzNzE@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
    },
    {
        name: "The Wolf of Wall Street", stars: ["Leonardo DiCaprio", "Jonah Hill", "Margot Robbie"], director: "Martin Scorsese",
        description: `Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.`,
        genre: "Biography Crime Drama ", year: 2013, rate: 8.2, img: "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
    },
    {
        name: "Shutter Island", stars: ["Leonardo DiCaprio", "Emily Mortimer", "Mark Ruffalo"], director: "Martin Scorsese",
        description: `In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.`,
        genre: "Mystery Thriller ", year: 2010, rate: 8.1, img: "https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_CR0,0,675,1000_AL_.jpg"
    },
    {
        name: "Good Will Hunting", stars: ["Robin Williams", "Matt Damon", "Ben Affleck"], director: "Gus Van Sant",
        description: `Will Hunting, a janitor at M.I.T., has a gift for mathematics, but needs help from a psychologist to find direction in his life.`,
        genre: "Drama Romance", year: 1997, rate: 8.3, img: "https://m.media-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,655,1000_AL_.jpg"
    },
    {
        name: "The Martian", stars: ["Matt Damon", "Jessica Chastain", "Kristen Wiig"], director: "Ridley Scott",
        description: `An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive.`,
        genre: "Adventure Drama Sci-Fi", year: 2015, rate: 8.0, img: "https://m.media-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_SY1000_CR0,0,675,1000_AL_.jpg"
    },
    {
        name: "The Revenant", stars: ["Leonardo DiCaprio", "Tom Hardy", "Will Poulter"], director: "Alejandro G. Iñárritu",
        description: `A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.`,
        genre: "Action Adventure Biography", year: 2015, rate: 8.0, img: "https://m.media-amazon.com/images/M/MV5BMDE5OWMzM2QtOTU2ZS00NzAyLWI2MDEtOTRlYjIxZGM0OWRjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX672_CR0,0,672,999_AL_.jpg"
    },
    {
        name: "Mad Max: Fury Road", stars: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"], director: "",
        description: `In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.`,
        genre: "Action, Adventure, Sci-Fi ", year: 2015, rate: 8.1, img: "https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
    },
    {
        name: "Logan", stars: ["Hugh Jackman", "Patrick Stewart", "Dafne Keen"], director: "",
        description: `In a future where mutants are nearly extinct, an elderly and weary Logan leads a quiet life. But when Laura, a mutant child pursued by scientists, comes to him for help, he must get her to safety.`,
        genre: "Action Drama Sci-Fi", year: 2017, rate: 7.9, img: "https://m.media-amazon.com/images/M/MV5BYzc5MTU4N2EtYTkyMi00NjdhLTg3NWEtMTY4OTEyMzJhZTAzXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg"
    },
    {
        name: "Venom", stars: ["Tom Hardy", "Michelle Williams", "Riz Ahmed"], director: "Ruben Fleischer",
        description: `A failed reporter is bonded to an alien entity, one of many symbiotes who have invaded Earth. But the being takes a liking to Earth and decides to protect it.`,
        genre: "Action Sci-Fi Thriller", year: 2018, rate: 6.7, img: "https://m.media-amazon.com/images/M/MV5BNzAwNzUzNjY4MV5BMl5BanBnXkFtZTgwMTQ5MzM0NjM@._V1_.jpg"
    },
    {
        name: "Avengers: Infinity War", stars: ["Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"], director: "Anthony Russo",
        description: `The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.`,
        genre: "Action Adventure Sci-Fi", year: 2018, rate: 8.5, img: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
    },
    {
        name: "The Rainmaker", stars: ["Matt Damon", "Danny DeVito", "Claire Danes"], director: "Francis Ford Coppola",
        description: `An underdog lawyer takes on a fraudulent insurance company.`,
        genre: "Crime Drama Thriller", year: 1997, rate: 7.2, img: "https://m.media-amazon.com/images/M/MV5BMjdlMjI2ZjgtN2ViOS00ZmI0LWE0ZTMtZjg1ZjczYWYzOGZjL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg"
    },
    {
        name: "Casino", stars: ["Robert De Niro", "Sharon Stone", "Joe Pesci"], director: "Martin Scorsese",
        description: `A tale of greed, deception, money, power, and murder occur between two best friends: a mafia enforcer and a casino executive, compete against each other over a gambling empire, and over a fast living and fast loving socialite.`,
        genre: "Crime Drama", year: 1994, rate: 8.2, img: "https://m.media-amazon.com/images/M/MV5BMTcxOWYzNDYtYmM4YS00N2NkLTk0NTAtNjg1ODgwZjAxYzI3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY1000_CR0,0,666,1000_AL_.jpg"
    },
    {
        name: "Snatch ", stars: ["Jason Statham", "Brad Pitt", "Benicio Del Toro"], director: "Guy Ritchie",
        description: `Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond.`,
        genre: "Comedy Crime", year: 2000, rate: 8.3, img: "https://m.media-amazon.com/images/M/MV5BMTA2NDYxOGYtYjU1Mi00Y2QzLTgxMTQtMWI1MGI0ZGQ5MmU4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SY1000_SX684_AL_.jpg"
    },
    {
        name: "Sherlock Holmes", stars: ["Robert Downey Jr.", "Jude Law", "Rachel McAdams"], director: "Guy Ritchie",
        description: `Detective Sherlock Holmes and his stalwart partner Watson engage in a battle of wits and brawn with a nemesis whose plot is a threat.`,
        genre: "Action Adventure Crime", year: 2009, rate: 7.6, img: "https://m.media-amazon.com/images/M/MV5BMTg0NjEwNjUxM15BMl5BanBnXkFtZTcwMzk0MjQ5Mg@@._V1_SY1000_CR0,0,669,1000_AL_.jpg"
    },
    {
        name: "Batman Begins", stars: ["Christian Bale", "Michael Caine", "Ken Watanabe"], director: "Christopher Nolan",
        description: `After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.`,
        genre: "Action Adventure", year: 2005, rate: 8.2, img: "https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SY1000_SX750_AL_.jpg"
    },
    {
        name: "Iron Man 3", stars: ["Robert Downey Jr.", "Guy Pearce", "Gwyneth Paltrow"], director: "Shane Black",
        description: `When Tony Stark's world is torn apart by a formidable called the Mandarin, he starts an odyssey of rebuilding and retribution.`,
        genre: "Action Adventure Sci-Fi", year: 2013, rate: 7.2, img: "https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_SY1000_SX700_AL_.jpg"
    },

]


export default moviesList