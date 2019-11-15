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
        name: "Iron Man 3 22", language: ["French", "English"], stars: ["Robert Downey Jr.", "Guy Pearce", "Gwyneth Paltrow"], director: "Shane Black", yot: "BoohRoVA9WQ",
        description: `When Tony Stark's world is torn apart by a formidable called the Mandarin, he starts an odyssey of rebuilding and retribution.`,
        genre: ["Action", "Adventure", "Sci-Fi"], year: 2013, rate: 7.2, img: "https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_SY1000_SX700_AL_.jpg"
    },
    {
        name: "The Dark Knight", language: ["French", "English"],
        stars: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
        director: "Christopher Nolan", yot: "EXeTwQWrcwY",
        description: `When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.`,
        genre: ["Action", "Crime", "Drama"], year: 2008, rate: 9,
        img: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg"
    },
    {
        name: "Hancock", language: ["French", "English"],
        stars: ["Will Smith", "Charlize Theron", "Jason Bateman"],
        director: "Peter Berg", yot: "KS5E8r82l2g",
        description: `Hancock is a superhero whose ill-considered behavior regularly causes damage in the millions. He changes when the person he saves helps him improve his public image.`,
        genre: ["Action", "Fantasy"], year: 2008, rate: 6.4,
        img: "https://m.media-amazon.com/images/M/MV5BMTgyMzc4ODU3NV5BMl5BanBnXkFtZTcwNjk5Mzc1MQ@@._V1_.jpg"
    }, {
        name: "Seven Years in Tibet", language: ["French", "English"],
        stars: ["Brad Pitt", "David Thewlis", "BD Wong"],
        director: "Jean-Jacques Annaud", yot: "m9a_7WFcPlI",
        description: `True story of Heinrich Harrer, an Austrian mountain climber who became friends with the Dalai Lama at the time of China's takeover of Tibet.`,
        genre: ["Adventure", "Biography", "Drama"], year: 1997, rate: 7.1,
        img: "https://m.media-amazon.com/images/M/MV5BYmM4ZDhhNmItMDEyZi00NDUyLTk3MzUtMzE5NTE1ZWM0N2UyXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg"
    }, {
        name: "Dr. Dolittle", language: ["French", "English"],
        stars: ["Eddie Murphy", "Peter Boyle", "Ossie Davis"],
        director: "Betty Thomas", yot: "LWbtxG-jXMY",
        description: `A doctor discovers that he can communicate with animals.`,
        genre: ["Comedy", "Family", "Fantasy"], year: 1998, rate: 5.4,
        img: "https://m.media-amazon.com/images/M/MV5BNGVmYjI4ZjktMjVkNi00ZTRlLWJlYTMtNzMxYjQ0ZDIyZWNmXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_.jpg"
    }, {
        name: "The Devil Wears Prada", language: ["French", "English"],
        stars: ["Anne Hathaway", "Meryl Streep", "Adrian Grenier"],
        director: "David Frankel", yot: "6ZOZwUQKu3E",
        description: `A smart but sensible new graduate lands a job as an assistant to Miranda Priestly, the demanding editor-in-chief of a high fashion magazine.`,
        genre: ["Comedy", "Drama"], year: 2006, rate: 6.9,
        img: "https://m.media-amazon.com/images/M/MV5BZjQ3ZTIzOTItMGNjNC00MWRmLWJlMGEtMjJmMDM5ZDIzZGM3XkEyXkFqcGdeQXVyMTkzODUwNzk@._V1_SY1000_CR0,0,677,1000_AL_.jpg"
    }, {
        name: "Avatar", language: ["French", "English"],
        stars: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
        director: "James Cameron", yot: "Qu4PdEaiXKg",
        description: `A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.`,
        genre: ["Action", "Adventure", "Fantasy"], year: 2009, rate: 7.8,
        img: "https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_.jpg"
    }, {
        name: "Ice Age", language: ["French", "English"],
        stars: ["Denis Leary", "John Leguizamo", "Ray Romano"],
        director: "Chris Wedge", yot: "i4noiCRJRoE",
        description: `Set during the Ice Age, a sabertooth tiger, a sloth, and a wooly mammoth find a lost human infant, and they try to return him to his tribe.`,
        genre: ["Animation", "Adventure", "Comedy"], year: 2002, rate: 7.2,
        img: "https://m.media-amazon.com/images/M/MV5BMmYxZWY2NzgtYzJjZC00MDFmLTgxZTctMjRiYjdjY2FhODg3XkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_.jpg"
    }, {
        name: "Unbreakable", language: ["French", "English"],
        stars: ["Bruce Willis", "Samuel L. Jackson", "Robin Wright"],
        director: "Night Shyamalan", yot: "fNeCB2ALNoA",
        description: `A man learns something extraordinary about himself after a devastating accident.`,
        genre: ["Drama", "Mystery", "Sci-Fi"], year: 2000, rate: 7.3,
        img: "https://m.media-amazon.com/images/M/MV5BMDIwMjAxNzktNmEzYS00ZDY5LWEyZjktM2Y0MmUzZDkyYmZkXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX676_CR0,0,676,999_AL_.jpg"
    }, {
        name: "Zombieland", language: ["French", "English"],
        stars: ["Jesse Eisenberg", "Emma Stone", "Woody Harrelson"],
        director: "Ruben Fleischer", yot: "k_WqNiWFrQY",
        description: `A shy student trying to reach his family in Ohio, a gun-toting tough guy trying to find the last Twinkie, and a pair of sisters trying to get to an amusement park join forces to travel across a zombie-filled America.`,
        genre: ["Adventure", "Comedy", "Horror"], year: 2009, rate: 7.6,
        img: "https://m.media-amazon.com/images/M/MV5BMTU5MDg0NTQ1N15BMl5BanBnXkFtZTcwMjA4Mjg3Mg@@._V1_SY1000_CR0,0,717,1000_AL_.jpg"
    }, {
        name: "Saturday Night Fever", language: ["French", "English"],
        stars: ["John Travolta", "Karen Lynn Gorney", "Barry Miller"],
        director: "John Badham", yot: "RZTP586-Y9E",
        description: `Anxious about his future after high school, a 19-year-old Italian-American from Brooklyn tries to escape the harsh reality of his bleak family life by dominating the dance floor at the local disco.`,
        genre: ["Drama", "Music"], year: 1977, rate: 6.8,
        img: "https://m.media-amazon.com/images/M/MV5BOWU0NjZhMWEtMWU2Zi00NTgwLWI1OTQtNDJlNDAyNzdlZjljXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
    }, {
        name: "Blades of Glory", language: ["French", "English"],
        stars: ["Will Ferrell", "Jon Heder", "Amy Poehler"],
        director: "Josh Gordon", yot: "UrZb-dZKCIQ",
        description: `In 2002, two rival Olympic ice skaters were stripped of their gold medals and permanently banned from men's single competition. Presently, however, they've found a loophole that will allow them to qualify as a pairs team.`,
        genre: ["Comedy", "Sport"], year: 2007, rate: 6.3,
        img: "https://m.media-amazon.com/images/M/MV5BMTY3MDMyMTYxMl5BMl5BanBnXkFtZTcwMjk0NzI0MQ@@._V1_.jpg"
    }, {
        name: "Transformers", language: ["French", "English"],
        stars: ["Shia LaBeouf", "Megan Fox", "Josh Duhamel"],
        director: "Michael Bay", yot: "v8ItGrI-Ou0",
        description: `An ancient struggle between two Cybertronian races, the heroic Autobots and the evil Decepticons, comes to Earth, with a clue to the ultimate power held by a teenager.`,
        genre: ["Action", "Adventure", "Sci-Fi"], year: 2007, rate: 7,
        img: "https://m.media-amazon.com/images/M/MV5BNDg1NTU2OWEtM2UzYi00ZWRmLWEwMTktZWNjYWQ1NWM1OThjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
    }, {
        name: "Madagascar ", language: ["French", "English"],
        stars: ["Chris Rock", "Ben Stiller", "David Schwimmer"],
        director: "Eric Darnell", yot: "orAqhC-Hp_o",
        description: `A group of animals who have spent all their life in a New York zoo end up in the jungles of Madagascar, and must adjust to living in the wild.`,
        genre: ["Animation", "Adventure", "Comedy"], year: 2005, rate: 6.9,
        img: "https://m.media-amazon.com/images/M/MV5BN2I5YzFlYWEtZjRhNy00ZmQzLWJhNTktZGIwYjFjODdmNDgxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,666,1000_AL_.jpg"
    }, {
        name: "Kung Fu Panda", language: ["French", "English"],
        stars: ["Jack Black", "Ian McShane", "Angelina Jolie"],
        director: "Mark Osborne", yot: "siLm9q4WIjI",
        description: `The Dragon Warrior has to clash against the savage Tai Lung as China's fate hangs in the balance. However, the Dragon Warrior mantle is supposedly mistaken to be bestowed upon an obese panda who is a novice in martial arts.`,
        genre: ["Animation", "Action", "Adventure"], year: 2008, rate: 7.5,
        img: "https://m.media-amazon.com/images/M/MV5BODJkZTZhMWItMDI3Yy00ZWZlLTk4NjQtOTI1ZjU5NjBjZTVjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SY1000_CR0,0,689,1000_AL_.jpg"
    }, {
        name: "Kung Fu Panda 2", language: ["French", "English"],
        stars: ["Jack Black", "Ian McShane", "Angelina Jolie"],
        director: "Mark Osborne", yot: "siLm9q4WIjI",
        description: `Po and his friends fight to stop a peacock villain from conquering China with a deadly new weapon, but first the Dragon Warrior must come to terms with his past.`,
        genre: ["Animation", "Action", "Adventure"], year: 2008, rate: 7.5,
        img: "https://m.media-amazon.com/images/M/MV5BYzQ0ZWIxZjAtYWI3Yy00MGM0LWFjOGYtNzcyYThiOTA3ODI1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg"

    }, {
        name: "Star Trek", language: ["French", "English"],
        stars: ["Chris Pine", "Zachary Quinto", "Simon Pegg"],
        director: "J.J. Abrams", yot: "oJJZy2niPvY",
        description: `The brash James T. Kirk tries to live up to his father's legacy with Mr. Spock keeping him in check as a vengeful Romulan from the future creates black holes to destroy the Federation one planet at a time.`,
        genre: ["Action", "Adventure", "Sci-Fi"], year: 2009, rate: 7.9,
        img: "https://m.media-amazon.com/images/M/MV5BMjE5NDQ5OTE4Ml5BMl5BanBnXkFtZTcwOTE3NDIzMw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
    }, {
        name: "Anchorman: The Legend of Ron Burgundy", language: ["French", "English"],
        stars: ["Will Ferrell", "Christina Applegate", "Steve Carell"],
        director: "Adam McKay", yot: "QvJ1K0_JzFI",
        description: `Ron Burgundy is San Diego's top-rated newsman in the male-dominated broadcasting of the 1970s, but that's all about to change for Ron and his cronies when an ambitious woman is hired as a new anchor.`,
        genre: ["Comedy"], year: 2004, rate: 7.5,
        img: "https://m.media-amazon.com/images/M/MV5BMTQ2MzYwMzk5Ml5BMl5BanBnXkFtZTcwOTI4NzUyMw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
    }, {
        name: "Thor", language: ["French", "English"],
        stars: ["Action", "Adventure", "Fantasy"],
        director: "Kenneth Branagh", yot: "w1k59SJ_-Uo",
        description: `The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.`,
        genre: ["Chris Hemsworth", "Anthony Hopkins", "Natalie Portman"], year: 2011, rate: 7,
        img: "https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
    }, {
        name: "The Proposal", language: ["French", "English"],
        stars: ["Sandra Bullock", "Ryan Reynolds", "Mary Steenburgen"],
        description: "A pushy boss forces her young assistant to marry her in order to keep her visa status and avoid deportation.", yot: "jHraHCjK094",
        director: `Anne Fletcher`,
        genre: ["Comedy", "Drama", "Romance"], year: 2009, rate: 6.7,
        img: "https://m.media-amazon.com/images/M/MV5BOGM5YTNiYzktNmEwZC00ZjE5LWIyNzEtOTUwNDE0NmVkYzE3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_CR0,0,676,1000_AL_.jpg"
    }, {
        name: "Shrek", language: ["French", "English"],
        stars: ["Mike Myers", "Eddie Murphy", "Cameron Diaz"],
        director: "Andrew Adamson", yot: "CwXOrWvPBPk",
        description: `A mean lord exiles fairytale creatures to the swamp of a grumpy ogre, who must go on a quest and rescue a princess for the lord in order to get his land back.`,
        genre: ["Animation", "Adventure", "Comedy"], year: 2001, rate: 7.8,
        img: "https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,671,1000_AL_.jpg"
    }, {
        name: "Shrek 2", language: ["French", "English"],
        stars: ["Mike Myers", "Eddie Murphy", "Cameron Diaz"],
        director: "Andrew Adamson", yot: "xBgSfhp5Fxo",
        description: `Fiona's parents invite her and Shrek to dinner to celebrate her marriage. If only they knew the newlyweds were both ogres.`,
        genre: ["Animation", "Adventure", "Comedy"], year: 2004, rate: 7.2,
        img: "https://m.media-amazon.com/images/M/MV5BMDJhMGRjN2QtNDUxYy00NGM3LThjNGQtMmZiZTRhNjM4YzUxL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_SX677_AL_.jpg"
    }, {
        name: "Into the Wild", language: ["French", "English"],
        stars: ["Emile Hirsch", "Vince Vaughn", "Catherine Keener"],
        director: "Sean Penn", yot: "XZG1FzyB8DI",
        description: `After graduating from Emory University, top student and athlete Christopher McCandless abandons his possessions, gives his entire $24,000 savings account to charity and hitchhikes to Alaska to live in the wilderness. Along the way, Christopher encounters a series of characters that shape his life.`,
        genre: ["Adventure", "Biography", "Drama"], year: 2007, rate: 8.1,
        img: "https://m.media-amazon.com/images/M/MV5BMTAwNDEyODU1MjheQTJeQWpwZ15BbWU2MDc3NDQwNw@@._V1_.jpg"
    },
    {
        name: "Fight Club", language: ["French", "English"],
        stars: ["Brad Pitt", "Edward Norton", "Meat Loaf"],
        director: "David Fincher", yot: "qtRKdVHc-cE",
        description: `An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.`,
        genre: ["Drama"], year: 1999, rate: 8.8,
        img: "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,666,1000_AL_.jpg"
    },
    /*  {
          name: "", language: ["French", "English"],
          stars: [""],
          director: "", yot: "",
          description: ``,
          genre: [""], year: 0, rate: 0,
          img: ""
      },*/
]

let movies1 = [{
    name: "Batman Begins", stars: ["Christian Bale", "Michael Caine", "Ken Watanabe"], director: "Christopher Nolan",
    description: `After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.`,
    genre: ["Action", "Adventure"], year: 2005, rate: 8.2, img: "https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SY1000_SX750_AL_.jpg"
},]

export default moviesList