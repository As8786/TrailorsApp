let moviesList = [
    {
        name: "The Godfather", language: ["French", "English"], genre: ["Drama", "Crime"], stars: ["Marlon Brando", "Al Pacino", "James Caan"], director: "Francis Ford Coppola", yot: "1x0GpEZnwa8",
        description: `Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.`,
        img: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,704,1000_AL_.jpg", rate: 9.2, year: 1972
    }, {
        name: "Westworld", language: ["French", "English"], type: "tvshows",
        stars: ["Evan Rachel Wood", "Jeffrey Wright", "Ed Harris", "Anthony Hopkins"],
        director: "Lisa Joy",
        description: `Set at the intersection of the near future and the reimagined past, explore a world in which every human appetite can be indulged without consequence.`,
        genre: ["Drama", "Mystery", "Sci-Fi"], year: 2016, rate: 8.8,
        img: "https://m.media-amazon.com/images/M/MV5BNThjM2Y3MDUtYTIyNC00ZDliLWJlMmItNWY1N2E5NjhmMGM4XkEyXkFqcGdeQXVyNjU2ODM5MjU@._V1_SY1000_CR0,0,673,1000_AL_.jpg",
        yot: "qSFZW5efo6M",
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
        name: "How I Met Your Mother", language: ["French", "English"], type: "tvshows",
        stars: ["Josh Radnor", "Jason Segel", "Cobie Smulders"],
        director: "Carter Bays",
        description: `A father recounts to his children, through a series of flashbacks, the journey he and his four best friends took leading up to him meeting their mother.`,
        genre: ["Comedy", "Romance"], year: 2005, rate: 8.3,
        img: "https://m.media-amazon.com/images/M/MV5BZWJjMDEzZjUtYWE1Yy00M2ZiLThlMmItODljNTAzODFiMzc2XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
        yot: "J4vY3LB5R1M",
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
    }, {
        name: "Mr. Robot", language: ["French", "English"], type: "tvshows",
        stars: ["Rami Malek", "Christian Slater", "Carly Chaikin"],
        director: "Sam Esmail",
        description: `Elliot, a brilliant but highly unstable young cyber-security engineer and vigilante hacker, becomes a key figure in a complex game of global dominance when he and his shadowy allies try to take down the corrupt corporation he works for.`,
        genre: ["Crime", "Drama", "Thriller"], year: 2015, rate: 8.5,
        img: "https://m.media-amazon.com/images/M/MV5BMzgxMmQxZjQtNDdmMC00MjRlLTk1MDEtZDcwNTdmOTg0YzA2XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
        yot: "8IEQpfA528M",
    },
    {
        name: "Venom", language: ["French", "English"], stars: ["Tom Hardy", "Michelle Williams", "Riz Ahmed"], director: "Ruben Fleischer", yot: "UfChVGHZhDQ",
        description: `A failed reporter is bonded to an alien entity, one of many symbiotes who have invaded Earth. But the being takes a liking to Earth and decides to protect it.`,
        genre: ["Action", "Adventure", "Thriller"], year: 2018, rate: 6.7, img: "https://m.media-amazon.com/images/M/MV5BNzAwNzUzNjY4MV5BMl5BanBnXkFtZTgwMTQ5MzM0NjM@._V1_.jpg"
    }, {
        name: "Peaky Blinders", language: ["French", "English"], type: "tvshows",
        stars: ["Cillian Murphy", "Paul Anderson", "Helen McCrory"],
        director: "Steven Knight",
        description: `A gangster family epic set in 1919 Birmingham, England; centered on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.`,
        genre: ["Crime", "Drama"], year: 2013, rate: 8.8,
        img: "https://m.media-amazon.com/images/M/MV5BMTQxODYzNTQzOV5BMl5BanBnXkFtZTgwMTI2MDYwMDE@._V1_.jpg",
        yot: "Ruyl8_PT_y8",
    },
    {
        name: "Avengers: Infinity War", language: ["French", "English"], stars: ["Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"], director: "Anthony Russo", yot: "B65hW9YYY5A",
        description: `The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.`,
        genre: ["Action", "Adventure", "Sci-Fi"], year: 2018, rate: 8.6, img: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
    },
    {
        name: "The Rainmaker", language: ["French", "English"], stars: ["Matt Damon", "Danny DeVito", "Claire Danes"], director: "Francis Ford Coppola", yot: "TpOPvupzWow",
        description: `An underdog lawyer takes on a fraudulent insurance company.`,
        genre: ["Crime", "Drama", "Thriller"], year: 1997, rate: 7.2, img: "https://m.media-amazon.com/images/M/MV5BMjdlMjI2ZjgtN2ViOS00ZmI0LWE0ZTMtZjg1ZjczYWYzOGZjL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg"
    }, {
        name: "Sons of Anarchy", language: ["French", "English"], type: "tvshows",
        stars: ["Charlie Hunnam", "Katey Sagal", "Mark Boone Junior"],
        director: "Kurt Sutter",
        description: `A biker struggles to balance being a father and being involved in an outlaw motorcycle club.`,
        genre: ["Crime", "Drama", "Thriller"], year: 2008, rate: 8.6,
        img: "https://m.media-amazon.com/images/M/MV5BMTEyODg2NzkwMDBeQTJeQWpwZ15BbWU4MDQwODI3MzIx._V1_.jpg",
        yot: "5nDknlYoxRs",
    },
    {
        name: "Casino", language: ["French", "English"], stars: ["Robert De Niro", "Sharon Stone", "Joe Pesci"], director: "Martin Scorsese", yot: "EJXDMwGWhoA",
        description: `A tale of greed, deception, money, power, and murder occur between two best friends: a mafia enforcer and a casino executive, compete against each other over a gambling empire, and over a fast living and fast loving socialite.`,
        genre: ["Action", "Adventure", "Sci-Fi"], year: 1994, rate: 8.6, img: "https://m.media-amazon.com/images/M/MV5BMTcxOWYzNDYtYmM4YS00N2NkLTk0NTAtNjg1ODgwZjAxYzI3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY1000_CR0,0,666,1000_AL_.jpg"
    }, {
        name: "Game of Thrones", language: ["French", "English"], type: "tvshows",
        stars: ["Emilia Clarke", "Peter Dinklage", "Kit Harington"],
        director: "David Benioff",
        description: `Nine noble families fight for control over the mythical lands of Westeros, while an ancient enemy returns after being dormant for thousands of years.`,
        genre: ["Action", "Adventure", "Drama"], year: 2011, rate: 9.4,
        img: "https://m.media-amazon.com/images/M/MV5BMjA5NzA5NjMwNl5BMl5BanBnXkFtZTgwNjg2OTk2NzM@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        yot: "rlR4PJn8b8I",
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
        name: "The Walking Dead", language: ["French", "English"], type: "tvshows",
        stars: ["Andrew Lincoln", "Norman Reedus", "Melissa McBride"],
        director: "Frank Darabont",
        description: `Sheriff Deputy Rick Grimes wakes up from a coma to learn the world is in ruins, and must lead a group of survivors to stay alive.`,
        genre: ["Drama", "Horror", "Thriller"], year: 2010, rate: 8.3,
        img: "https://m.media-amazon.com/images/M/MV5BYWY4ODJiZjMtNWMxYi00ZmM5LWIwZmQtZWY0MjJmZGU5MjcxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
        yot: "MWSF9RZiUos",
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
        name: "Brooklyn Nine-Nine", language: ["French", "English"], type: "tvshows",
        stars: ["Andy Samberg", "Stephanie Beatriz", "Terry Crews"],
        director: "Daniel J. Goor",
        description: `Jake Peralta, an immature, but talented N.Y.P.D. detective in Brooklyn's 99th Precinct, comes into immediate conflict with his new commanding officer, the serious and stern Captain Ray Holt.`,
        genre: ["Comedy", "Crime"], year: 2013, rate: 8.4,
        img: "https://m.media-amazon.com/images/M/MV5BMGU3NGYyYTYtYjIzMS00ZmUwLTlmMjAtZDhhMzFiNWI0NzNkXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_SY1000_CR0,0,701,1000_AL_.jpg",
        yot: "HblwLcAR4r4",
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
        name: "The Simpsons", language: ["French", "English"], type: "tvshows",
        stars: ["Dan Castellaneta", "Nancy Cartwright", "Harry Shearer"],
        director: "James L. Brooks",
        description: `The satiric adventures of a working-class family in the misfit city of Springfield.`,
        genre: ["Animation", "Comedy"], year: 1989, rate: 8.7,
        img: "https://m.media-amazon.com/images/M/MV5BYjFkMTlkYWUtZWFhNy00M2FmLThiOTYtYTRiYjVlZWYxNmJkXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
        yot: "XPG0MqIcby8",
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
        name: "BoJack Horseman", language: ["French", "English"], type: "tvshows",
        stars: ["Will Arnett", "Amy Sedaris", "Alison Brie"],
        director: "Raphael Bob-Waksberg",
        description: `BoJack Horseman was the star of the hit television show "Horsin' Around" in the '80s and '90s, now he's washed up, living in Hollywood, complaining about everything, and wearing colorful sweaters.`,
        genre: ["Animation", "Comedy", "Drama"], year: 2014, rate: 8.6,
        img: "https://m.media-amazon.com/images/M/MV5BYWQwMDNkM2MtODU4OS00OTY3LTgwOTItNjE2Yzc0MzRkMDllXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
        yot: "ZOGxOQxXjdo",
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
    {
        name: "The Lion King", language: ["French", "English"],
        stars: ["Matthew Broderick", "Jeremy Irons", "James Earl Jones"],
        director: "Roger Allers", yot: "eHcZlPpNt0Q",
        description: `A Lion cub crown prince is tricked by a treacherous uncle into thinking he caused his father's death and flees into exile in despair, only to learn in adulthood his identity and his responsibilities.`,
        genre: ["Animation", "Adventure", "Drama"], year: 1994, rate: 8.5,
        img: "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SY1000_CR0,0,673,1000_AL_.jpg"
    }, {
        name: "Gladiator", language: ["French", "English"],
        stars: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
        director: "Ridley Scott", yot: "uvbavW31adA",
        description: `A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.`,
        genre: ["Action", "Adventure", "Drama "], year: 2000, rate: 8.5,
        img: "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,675,1000_AL_.jpg"
    }, {
        name: "The Usual Suspects", language: ["French", "English"],
        stars: ["Kevin Spacey", "Gabriel Byrne", "Chazz Palminteri"],
        director: "Bryan Singer", yot: "Q0eCiCinc4E",
        description: `A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which began when five criminals met at a seemingly random police lineup.`,
        genre: ["Crime", "Mystery", "Thriller"], year: 1995, rate: 8.5,
        img: "https://m.media-amazon.com/images/M/MV5BYTViNjMyNmUtNDFkNC00ZDRlLThmMDUtZDU2YWE4NGI2ZjVmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,670,1000_AL_.jpg"
    }, {
        name: "Just Friends", language: ["French", "English"],
        stars: ["Ryan Reynolds", "Amy Smart", "Anna Faris"],
        director: "Roger Kumble", yot: "vIBBVzy5UoQ",
        description: `While visiting his hometown during Christmas, a man comes face-to-face with his old high school crush whom he was best friends with -- a woman whose rejection of him turned him into a ferocious womanizer.`,
        genre: ["Comedy", "Romance"], year: 2005, rate: 6.2,
        img: "https://m.media-amazon.com/images/M/MV5BMjA0Mzg2NjUzMl5BMl5BanBnXkFtZTcwNDg2ODUzMQ@@._V1_.jpg"
    }, {
        name: "The Intouchables", language: ["French", "English"],
        stars: ["François Cluzet", "Omar Sy", "Anne Le Ny"],
        director: "Olivier Nakache", yot: "oK5hMNxqsFA",
        description: `After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.`,
        genre: ["Biography", "Comedy", "Drama"], year: 2011, rate: 8.5,
        img: "https://m.media-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
    }, {
        name: "Vikings", language: ["French", "English"], type: "tvshows",
        stars: ["Gustaf Skarsgård", "Katheryn Winnick", "Alexander Ludwig"],
        director: "Michael Hirst",
        description: `Vikings transports us to the brutal and mysterious world of Ragnar Lothbrok, a Viking warrior and farmer who yearns to explore - and raid - the distant shores across the ocean.`,
        genre: ["Action", "Adventure", "Drama "], year: 2013, rate: 8.6,
        img: "https://m.media-amazon.com/images/M/MV5BZWNlZmNiNzItYWMwNC00ODYxLThlNjYtMjU3NzlmNDQxMTY2XkEyXkFqcGdeQXVyMTA3MzQ4MTc0._V1_SY1000_CR0,0,666,1000_AL_.jpg",
        yot: "Y7d0A5re7-0",
    }, {
        name: "Amélie", language: ["French", "English"],
        stars: ["Audrey Tautou", "Mathieu Kassovitz", "Rufus"],
        director: "Jean-Pierre Jeunet", yot: "HUECWi5pX7o",
        description: `Amélie is naive girl in Paris with her own sense of justice. She decides to help those around her and, along the way, discovers love.`,
        genre: ["Comedy", "Romance"], year: 2001, rate: 8.3,
        img: "https://m.media-amazon.com/images/M/MV5BNDg4NjM1YjMtYmNhZC00MjM0LWFiZmYtNGY1YjA3MzZmODc5XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SY1000_CR0,0,666,1000_AL_.jpg"
    }, {
        name: "Rounders", language: ["French", "English"],
        stars: ["Matt Damon", "Edward Norton", "Gretchen Mol"],
        director: "John Dahl", yot: "9r-K5dmt0Rc",
        description: `A young, reformed gambler must return to playing big stakes poker to help a friend pay off loan sharks, while balancing his relationship with his girlfriend and his commitments to law school.`,
        genre: ["Crime", "Drama"], year: 1998, rate: 7.3,
        img: "https://m.media-amazon.com/images/M/MV5BMzViMmMxMzItYmYyYi00NGU3LWI2MDMtNjcwOWFmZTZkOTcwXkEyXkFqcGdeQXVyNDkzNTM2ODg@._V1_SY1000_CR0,0,675,1000_AL_.jpg"
    }, {
        name: "Green Book", language: ["French", "English"],
        stars: ["Viggo Mortensen", "Mahershala Ali", "Linda Cardellini"],
        director: "Peter Farrelly", yot: "9ZS5d9l8XL0",
        description: `A working-class Italian-American bouncer becomes the driver of an African-American classical pianist on a tour of venues through the 1960s American South.`,
        genre: ["Biography", "Comedy", "Drama"], year: 0, rate: 0,
        img: "https://m.media-amazon.com/images/M/MV5BYzIzYmJlYTYtNGNiYy00N2EwLTk4ZjItMGYyZTJiOTVkM2RlXkEyXkFqcGdeQXVyODY1NDk1NjE@._V1_SY1000_CR0,0,666,1000_AL_.jpg"
    }, {
        name: "Robin Hood", language: ["French", "English"],
        stars: ["Russell Crowe", "Cate Blanchett", "Matthew Macfadyen"],
        director: "Ridley Scott", yot: "fQ6zXDSgwIY",
        description: `In 12th century England, Robin and his band of marauders confront corruption in a local village and lead an uprising against the crown that will forever alter the balance of world power.`,
        genre: ["Action", "Drama", "History"], year: 2010, rate: 6.6,
        img: "https://m.media-amazon.com/images/M/MV5BMTM5NzcwMzEwOF5BMl5BanBnXkFtZTcwNjg5MTgwMw@@._V1_.jpg"
    }, {
        name: "The Book of Eli", language: ["French", "English"],
        stars: ["Denzel Washington", "Mila Kunis", "Ray Stevenson"],
        director: "Albert Hughes", yot: "zSMHmtaoXtI",
        description: `A post-apocalyptic tale, in which a lone man fights his way across in order to protect a sacred book that holds the secrets to saving humankind.`,
        genre: ["Action", "Adventure", "Drama"], year: 2010, rate: 6.9,
        img: "https://m.media-amazon.com/images/M/MV5BNTE1OWI1YzgtZjEyMy00MjQ4LWE0NWMtYTNhYjc0ZDQ3ZGRkXkEyXkFqcGdeQXVyNDQ2MTMzODA@._V1_SY1000_CR0,0,666,1000_AL_.jpg"
    }, {
        name: "FORD V FERRARI", language: ["French", "English"],
        stars: ["Matt Damon", "Christian Bale", "Jon Bernthal"],
        director: "James Mangold", yot: "6hWrPtUxO2M",
        description: `American car designer Carroll Shelby and driver Ken Miles battle corporate interference, the laws of physics and their own personal demons to build a revolutionary race car for Ford and challenge Ferrari at the 24 Hours of Le Mans in 1966.`,
        genre: ["Action", "Biography", "Drama"], year: 2019, rate: 8.2,
        img: "https://m.media-amazon.com/images/M/MV5BYzcyZDNlNDktOWRhYy00ODQ5LTg1ODQtZmFmZTIyMjg2Yjk5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_SX675_AL_.jpg"
    }, {
        name: "The Irishman", language: ["French", "English"],
        stars: ["Robert De Niro", "Al Pacino", "Jesse Plemons"],
        director: "Martin Scorsese", yot: "77mWuhWrFlI",
        description: `A mob hitman recalls his possible involvement with the slaying of Jimmy Hoffa`,
        genre: ["Biography", "Crime", "Drama"], year: 2019, rate: 8.7,
        img: "https://m.media-amazon.com/images/M/MV5BMGUyM2ZiZmUtMWY0OC00NTQ4LThkOGUtNjY2NjkzMDJiMWMwXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SY1000_CR0,0,682,1000_AL_.jpg"
    }, {
        name: "Being Flynn", language: ["French", "English"],
        stars: ["Paul Dano", "Robert De Niro", "Julianne Moore"],
        director: "Paul Weitz", yot: "NHZfQDgkqiM",
        description: `Working in a Boston homeless shelter, Nick Flynn re-encounters his father, a con man and self-proclaimed poet. Sensing trouble in his own life, Nick wrestles with the notion of reaching out yet again to his dad.`,
        genre: ["Drama"], year: 2012, rate: 6.4,
        img: "https://m.media-amazon.com/images/M/MV5BMjI1OTI1MzU0NF5BMl5BanBnXkFtZTcwNDI2ODkwNw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg"
    }, {
        name: "Avengers: Endgame", language: ["French", "English"],
        stars: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo"],
        director: "Anthony Russo", yot: "ee1172yeqyE",
        description: `After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.`,
        genre: ["Action", "Adventure", "Drama"], year: 8.5, rate: 2019,
        img: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
    }, {
        name: "47 METERS DOWN", language: ["French", "English"],
        stars: ["Sophie Nélisse", "Corinne Foxx", "Brianne Tju"],
        director: "Johannes Roberts", yot: "-28uQ7rse98",
        description: `Four girls diving in a ruined underwater city quickly learn they've entered the territory of the deadliest shark species in the claustrophobic labyrinth of submerged caves.`,
        genre: ["Adventure", "Drama", "Horror"], year: 2019, rate: 5,
        img: "https://m.media-amazon.com/images/M/MV5BMDc1MmVjMDQtOGU3OS00OTJkLWJmOGQtNDMzMWRjNDAzY2Y2XkEyXkFqcGdeQXVyMTk5MzE1MTY@._V1_SY1000_SX675_AL_.jpg"
    }, {
        name: "Batman & Robin", language: ["French", "English"],
        stars: ["Arnold Schwarzenegger", "George Clooney", "Chris O'Donnell"],
        director: "Joel Schumacher", yot: "4RBXypX4qWI",
        description: `Batman and Robin try to keep their relationship together even as they must stop Mr. Freeze and Poison Ivy from freezing Gotham City.`,
        genre: ["Action", "Sci-Fi"], year: 1997, rate: 3.7,
        img: "https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SY1000_CR0,0,671,1000_AL_.jpg"
    }, {
        name: "Little Fockers", language: ["French", "English"],
        stars: ["Ben Stiller", "Teri Polo", "Robert De Niro"],
        director: "Paul Weitz", yot: "CIUpb2aQ5rM",
        description: `Family-patriarch Jack Byrnes wants to appoint a successor. Does his son-in-law, the male nurse Greg Focker, have what it takes?`,
        genre: ["Comedy", "Romance"], year: 2010, rate: 5.5,
        img: "https://m.media-amazon.com/images/M/MV5BMTkwNjE3NjQwOV5BMl5BanBnXkFtZTcwNzAyNTMwNA@@._V1_SY1000_CR0,0,675,1000_AL_.jpg"
    }, {
        name: "Finding Nemo", language: ["French", "English"],
        stars: ["Albert Brooks", "Ellen DeGeneres", "Alexander Gould"],
        director: "Andrew Stanton", yot: "2zLkasScy7A",
        description: `After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home.`,
        genre: ["Animation", "Adventure", "Comedy"], year: 2003, rate: 8.1,
        img: "https://m.media-amazon.com/images/M/MV5BZTAzNWZlNmUtZDEzYi00ZjA5LWIwYjEtZGM1NWE1MjE4YWRhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,671,1000_AL_.jpg"
    }, {
        name: "The Grand Budapest Hotel", language: ["French", "English"],
        stars: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
        director: "Wes Anderson", yot: "mXRztrOK47I",
        description: `The adventures of Gustave H, a legendary concierge at a famous hotel from the fictional Republic of Zubrowka between the first and second World Wars, and Zero Moustafa, the lobby boy who becomes his most trusted friend.`,
        genre: ["Adventure", "Comedy", "Crime"], year: 2014, rate: 8.1,
        img: "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_SY1000_SX675_AL_.jpg"
    }, {
        name: "Gran Torino", language: ["French", "English"],
        stars: ["Clint Eastwood", "Bee Vang", "Christopher Carley"],
        director: "Clint Eastwood", yot: "RMhbr2XQblk",
        description: `Disgruntled veteran Walt Kowalski (Clint Eastwood) sets out to reform his neighbor, Thao Lor (Bee Vang), a Hmong teenager who tried to steal Kowalski's prized possession: a 1972 Gran Torino.`,
        genre: ["Drama"], year: 2008, rate: 8.1,
        img: "https://m.media-amazon.com/images/M/MV5BMTc5NTk2OTU1Nl5BMl5BanBnXkFtZTcwMDc3NjAwMg@@._V1_.jpg"
    }, {
        name: "Million Dollar Baby", language: ["French", "English"],
        stars: ["Drama", "Sport"],
        director: "Clint Eastwood", yot: "5_RsHRmIRBY",
        description: `A determined woman works with a hardened boxing trainer to become a professional.`,
        genre: ["Hilary Swank", "Clint Eastwood", "Morgan Freeman"], year: 2004, rate: 8.1,
        img: "https://m.media-amazon.com/images/M/MV5BMTkxNzA1NDQxOV5BMl5BanBnXkFtZTcwNTkyMTIzMw@@._V1_SY1000_CR0,0,678,1000_AL_.jpg"
    }, {
        name: "The Good, the Bad and the Ugly", language: ["French", "English"],
        stars: ["Clint Eastwood", "Eli Wallach", "Lee Van Cleef"],
        director: "Sergio Leone", yot: "WCN5JJY_wiA",
        description: `A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.`,
        genre: ["Western"], year: 1966, rate: 8.8,
        img: "https://m.media-amazon.com/images/M/MV5BOTQ5NDI3MTI4MF5BMl5BanBnXkFtZTgwNDQ4ODE5MDE@._V1_SY1000_CR0,0,656,1000_AL_.jpg"
    }, {
        name: "The Pursuit of Happyness", language: ["French", "English"],
        stars: ["Will Smith", "Thandie Newton", "Jaden Smith"],
        director: "Gabriele Muccino", yot: "DMOBlEcRuw8",
        description: `A struggling salesman takes custody of his son as he's poised to begin a life-changing professional career.`,
        genre: ["Biography", "Drama"], year: 2006, rate: 8,
        img: "https://m.media-amazon.com/images/M/MV5BMTQ5NjQ0NDI3NF5BMl5BanBnXkFtZTcwNDI0MjEzMw@@._V1_SY1000_CR0,0,672,1000_AL_.jpg"
    }, {
        name: "Focus", language: ["French", "English"],
        stars: ["Will Smith", "Margot Robbie", "Rodrigo Santoro"],
        director: "Glenn Ficarra", yot: "MxCRgtdAuBo",
        description: `In the midst of veteran con man Nicky's latest scheme, a woman from his past - now an accomplished femme fatale - shows up and throws his plans for a loop.`,
        genre: ["Comedy", "Crime", "Drama"], year: 2015, rate: 6.6,
        img: "https://m.media-amazon.com/images/M/MV5BMTUwODg2OTA4OF5BMl5BanBnXkFtZTgwOTE5MTE4MzE@._V1_.jpg"
    }, {
        name: "Anchorman 2", language: ["French", "English"],
        stars: ["Will Ferrell", "Christina Applegate", "Paul Rudd"],
        director: "Adam McKay", yot: "UhC_tuO68Q0",
        description: `With the 1970s behind them, San Diego's top-rated newsman, Ron Burgundy, returns to take New York City's first twenty-four-hour news channel by storm.`,
        genre: ["Comedy"], year: 2013, rate: 6.3,
        img: "https://m.media-amazon.com/images/M/MV5BMjE5ODk0NjQzNV5BMl5BanBnXkFtZTgwODk4MDA1MDE@._V1_.jpg"
    }, {
        name: "Men in Black", language: ["French", "English"],
        stars: ["Will Smith", "Jamie Foxx", "Jon Voight"],
        director: "Michael Mann", yot: "4HooryZXjcE",
        description: `A biography of sports legend Muhammad Ali, focusing on his triumphs and controversies between 1964 and 1974.`,
        genre: ["Biography", "Drama", "Sport"], year: 2001, rate: 6.8,
        img: "https://m.media-amazon.com/images/M/MV5BZjA3OTUxNTktN2FlNC00NGUyLWI1NDktY2FlZTc5MDlmOGFhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
    }, {
        name: "Rain Man", language: ["French", "English"],
        stars: ["Dustin Hoffman", "Tom Cruise", "Valeria Golino"],
        director: "Barry Levinson", yot: "mlNwXuHUA8I",
        description: `Selfish yuppie Charlie Babbitt's father left a fortune to his savant brother Raymond and a pittance to Charlie; they travel cross-country.`,
        genre: ["Drama"], year: 1988, rate: 8,
        img: "https://m.media-amazon.com/images/M/MV5BMzVjNzI4NzYtMjE4NS00M2IzLWFkOWMtOTYwMWUzN2ZlNGVjL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
    }, {
        name: "The Last Samurai", language: ["French", "English"],
        stars: ["Tom Cruise", "Ken Watanabe", "Billy Connolly"],
        director: "Edward Zwick", yot: "YX265wacZcY",
        description: `An American advisor embraces the Samurai culture he was hired to destroy after he is captured in battle.`,
        genre: ["Action", "Drama", "War"], year: 2003, rate: 7.7,
        img: "https://m.media-amazon.com/images/M/MV5BMzkyNzQ1Mzc0NV5BMl5BanBnXkFtZTcwODg3MzUzMw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg"
    }, {
        name: "Blood Diamond", language: ["French", "English"],
        stars: ["Leonardo DiCaprio", "Djimon Hounsou", "Jennifer Connelly"],
        director: "Edward Zwick", yot: "r0iDAjXWU4Q",
        description: `A fisherman, a smuggler, and a syndicate of businessmen match wits over the possession of a priceless diamond.`,
        genre: ["Adventure", "Drama", "Thriller"], year: 2006, rate: 8,
        img: "https://m.media-amazon.com/images/M/MV5BZDMxOGZhNWYtMzRlYy00Mzk5LWJjMjEtNmQ4NDU4M2QxM2UzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY1000_CR0,0,675,1000_AL_.jpg"
    }, {
        name: "Once Upon a Time in Hollywood", language: ["French", "English"],
        stars: ["Leonardo DiCaprio", "Brad Pitt", "Margot Robbie"],
        director: "Quentin Tarantino", yot: "TMrIOUQKXCM",
        description: `A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles.`,
        genre: ["Comedy", "Drama"], year: 2019, rate: 9,
        img: "https://m.media-amazon.com/images/M/MV5BOTg4ZTNkZmUtMzNlZi00YmFjLTk1MmUtNWQwNTM0YjcyNTNkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
    }, {
        name: "The Great Gatsby", language: ["French", "English"],
        stars: ["Leonardo DiCaprio", "Carey Mulligan", "Joel Edgerton"],
        director: "Baz Luhrmann", yot: "sN183rJltNM",
        description: `A writer and wall street trader, Nick, finds himself drawn to the past and lifestyle of his millionaire neighbor, Jay Gatsby.`,
        genre: ["Drama", "Romance"], year: 2013, rate: 7.3,
        img: "https://m.media-amazon.com/images/M/MV5BMTkxNTk1ODcxNl5BMl5BanBnXkFtZTcwMDI1OTMzOQ@@._V1_SY1000_SX666_AL_.jpg"
    }, {
        name: "Downsizing", language: ["French", "English"],
        stars: ["Matt Damon", "Christoph Waltz", "Hong Chau"],
        director: "Alexander Payne", yot: "JoBLLqlI3tQ",
        description: `A social satire in which a man realizes he would have a better life if he were to shrink himself to five inches tall, allowing him to live in wealth and splendor.`,
        genre: ["Drama", "Sci-Fi"], year: 2017, rate: 5.7,
        img: "https://m.media-amazon.com/images/M/MV5BNDYxNDQ5OTYxOV5BMl5BanBnXkFtZTgwOTcyODkxNDM@._V1_SY1000_CR0,0,640,1000_AL_.jpg"
    }, {
        name: "Due Date", language: ["French", "English"],
        stars: ["Robert Downey Jr.", "Zach Galifianakis", "Michelle Monaghan"],
        director: "Todd Phillips", yot: "1p3NnJ_oiE0",
        description: `High-strung father-to-be Peter Highman is forced to hitch a ride with aspiring actor Ethan Tremblay on a road trip in order to make it to his child's birth on time.`,
        genre: ["Adventure", "Comedy"], year: 2010, rate: 6.5,
        img: "https://m.media-amazon.com/images/M/MV5BMTU5MTgxODM3Nl5BMl5BanBnXkFtZTcwMjMxNDEwNA@@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
    }, {
        name: "Narcos", language: ["French", "English"], type: "tvshows",
        stars: ["Pedro Pascal", "Wagner Moura", "Boyd Holbrook"],
        director: "Carlo Bernard",
        description: `A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country through the years.`,
        genre: ["Biography", "Crime", "Drama"], year: 2015, rate: 8.8,
        img: "https://m.media-amazon.com/images/M/MV5BMjIwNDQ0Mzg4Ml5BMl5BanBnXkFtZTgwMTI1Mzc3OTE@._V1_SY1000_SX1500_AL_.jpg",
        yot: "YZSXeGqXb_w",
    }, {
        name: "Chef", language: ["French", "English"],
        stars: ["Jon Favreau", "Robert Downey Jr.", "Scarlett Johansson"],
        director: "", yot: "FF_rYNupPwg",
        description: `A head chef quits his restaurant job and buys a food truck in an effort to reclaim his creative promise, while piecing back together his estranged family.`,
        genre: ["Adventure", "Comedy", "Drama"], year: 2013, rate: 7.3,
        img: "https://m.media-amazon.com/images/M/MV5BMTY5NTYzNTA1M15BMl5BanBnXkFtZTgwODIwODU1MTE@._V1_SY1000_CR0,0,680,1000_AL_.jpg"
    }, {
        name: "Larry Crowne", language: ["French", "English"],
        stars: ["Tom Hanks", "Julia Roberts", "Sarah Mahoney"],
        director: "", yot: "1UNtrqRG7GA",
        description: `After losing his job, a middle-aged man reinvents himself by going back to college.`,
        genre: ["Comedy", "Drama", "Romance"], year: 2011, rate: 6.1,
        img: "https://m.media-amazon.com/images/M/MV5BYjQ4MzlmZDUtN2ViMi00ZTAwLWFkMmItNGRlZmM1NjQ1ZmJjXkEyXkFqcGdeQXVyMzI0NDc4ODY@._V1_SY1000_CR0,0,627,1000_AL_.jpg"
    }, {
        name: "Drive", language: ["French", "English"],
        stars: ["Ryan Gosling", "Carey Mulligan", "Bryan Cranston"],
        director: "Nicolas Winding Refn", yot: "KBiOF3y1W0Y",
        description: `A mysterious Hollywood stuntman and mechanic moonlights as a getaway driver and finds himself in trouble when he helps out his neighbor in this action drama.`,
        genre: ["Crime", "Drama"], year: 2011, rate: 7.8,
        img: "https://m.media-amazon.com/images/M/MV5BZjY5ZjQyMjMtMmEwOC00Nzc2LTllYTItMmU2MzJjNTg1NjY0XkEyXkFqcGdeQXVyNjQ1MTMzMDQ@._V1_SY1000_SX675_AL_.jpg"
    }, {
        name: "The Nice Guys", language: ["French", "English"],
        stars: ["Russell Crowe", "Ryan Gosling", "Angourie Rice"],
        director: "Shane Black", yot: "TGic0zh8LA4",
        description: `In 1970s Los Angeles, a mismatched pair of private eyes investigate a missing girl and the mysterious death of a porn star.`,
        genre: ["Action", "Comedy", "Crime"], year: 2016, rate: 7.4,
        img: "https://m.media-amazon.com/images/M/MV5BMjcwNDA5MDYyNl5BMl5BanBnXkFtZTgwNjg0NDkzNzE@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
    }, {
        name: "Crazy, Stupid, Love", language: ["French", "English"],
        stars: ["Steve Carell", "Ryan Gosling", "Julianne Moore"],
        director: "Glenn Ficarra", yot: "wMisPK94nPk",
        description: `A middle-aged husband's life changes dramatically when his wife asks him for a divorce. He seeks to rediscover his manhood with the help of a newfound friend, Jacob, learning to pick up girls at bars.`,
        genre: ["Comedy", "Drama", "Romance"], year: 2011, rate: 7.4,
        img: "https://m.media-amazon.com/images/M/MV5BMTg2MjkwMTM0NF5BMl5BanBnXkFtZTcwMzc4NDg2NQ@@._V1_SY1000_SX675_AL_.jpg"
    }, {
        name: "Dragon Ball Z", language: ["French", "English"], type: "tvshows",
        stars: ["Jôji Yanami", "Kyle Hebert", "Masako Nozawa"],
        director: "Daisuke Nishio",
        description: `The adventures of Earth's martial arts defender Son Goku continue with a new family and the revelation of his alien origin. Now Goku and his allies must defend the planet from an onslaught of new extraterrestrial enemies.`,
        genre: ["Animation", "Action", "Adventure"], year: 1989, rate: 8.7,
        img: "https://m.media-amazon.com/images/M/MV5BMGMyOThiMGUtYmFmZi00YWM0LWJiM2QtZGMwM2Q2ODE4MzhhXkEyXkFqcGdeQXVyMjc2Nzg5OTQ@._V1_SY1000_CR0,0,679,1000_AL_.jpg",
        yot: "aOPJ6y3HWII",
    }, {
        name: "Blade Runner 2049", language: ["French", "English"],
        stars: ["Harrison Ford", "Ryan Gosling", "Ana de Armas"],
        director: "Denis Villeneuve", yot: "qJA48WZ9bis",
        description: `A young blade runner's discovery of a long-buried secret leads him to track down former blade runner Rick Deckard, who's been missing for thirty years.`,
        genre: ["Action", "Drama", "Mystery"], year: 2017, rate: 8,
        img: "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
    }, {
        name: "About Time", language: ["French", "English"],
        stars: ["Domhnall Gleeson", "Rachel McAdams", "Bill Nighy"],
        director: "Richard Curtis", yot: "T7A810duHvw",
        description: `At the age of 21, Tim discovers he can travel in time and change what happens and has happened in his own life. His decision to make his world a better place by getting a girlfriend turns out not to be as easy as you might think.`,
        genre: ["Comedy", "Drama", "Fantasy"], year: 2013, rate: 7.8,
        img: "https://m.media-amazon.com/images/M/MV5BMTA1ODUzMDA3NzFeQTJeQWpwZ15BbWU3MDgxMTYxNTk@._V1_SY1000_CR0,0,631,1000_AL_.jpg"
    }, {
        name: "The Fault In Our Stars", language: ["French", "English"],
        stars: ["Shailene Woodley", "Ansel Elgort", "Nat Wolff"],
        director: "Josh Boone", yot: "mHlzhHaAQjA",
        description: `Two teenage cancer patients begin a life-affirming journey to visit a reclusive author in Amsterdam.`,
        genre: ["Drama", "Romance"], year: 2014, rate: 7.7,
        img: "https://m.media-amazon.com/images/M/MV5BMjA4NzkxNzc5Ml5BMl5BanBnXkFtZTgwNzQ3OTMxMTE@._V1_SY1000_CR0,0,675,1000_AL_.jpg"
    }, {
        name: "A Star Is Born", language: ["French", "English"],
        stars: ["Lady Gaga", "Bradley Cooper", "Sam Elliott"],
        director: "Bradley Cooper", yot: "4-tcHHyy1Rw",
        description: `A musician helps a young singer find fame as age and alcoholism send his own career into a downward spiral.`,
        genre: ["Drama", "Music", "Romance"], year: 2018, rate: 7.7,
        img: "https://m.media-amazon.com/images/M/MV5BNmE5ZmE3OGItNTdlNC00YmMxLWEzNjctYzAwOGQ5ODg0OTI0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_CR0,0,666,1000_AL_.jpg"
    }, {
        name: "The Hangover", language: ["French", "English"],
        stars: ["Zach Galifianakis", "Bradley Cooper", "Justin Bartha"],
        director: "Todd Phillips", yot: "KRBzWtOy1PY",
        description: `Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing. They make their way around the city in order to find their friend before his wedding.`,
        genre: ["Comedy"], year: 2009, rate: 7.7,
        img: "https://m.media-amazon.com/images/M/MV5BNGQwZjg5YmYtY2VkNC00NzliLTljYTctNzI5NmU3MjE2ODQzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX675_CR0,0,675,999_AL_.jpg"
    }, {
        name: "Troy", language: ["French", "English"],
        stars: ["Brad Pitt", "Eric Bana", "Orlando Bloom"],
        director: "Wolfgang Petersen", yot: "znTLzRJimeY",
        description: `An adaptation of Homer's great epic, the film follows the assault on Troy by the united Greek forces and chronicles the fates of the men involved.`,
        genre: ["Drama", "History"], year: 2004, rate: 7.2,
        img: "https://m.media-amazon.com/images/M/MV5BMTk5MzU1MDMwMF5BMl5BanBnXkFtZTcwNjczODMzMw@@._V1_SY1000_CR0,0,677,1000_AL_.jpg"
    }, {
        name: "Fury", language: ["French", "English"],
        stars: ["Brad Pitt", "Shia LaBeouf", "Logan Lerman"],
        director: "", yot: "DNHuK1rteF4",
        description: `A grizzled tank commander makes tough decisions as he and his crew fight their way across Germany in April, 1945.`,
        genre: ["Action", "Drama", "War"], year: 2014, rate: 7.6,
        img: "https://m.media-amazon.com/images/M/MV5BMjA4MDU0NTUyN15BMl5BanBnXkFtZTgwMzQxMzY4MjE@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
    }, {
        name: "Moneyball", language: ["French", "English"],
        stars: ["Brad Pitt", "Robin Wright", "Jonah Hill"],
        director: "Bennett Miller", yot: "-4QPVo0UIzc",
        description: `Oakland A's general manager Billy Beane's successful attempt to assemble a baseball team on a lean budget by employing computer-generated analysis to acquire new players.`,
        genre: ["Biography", "Drama", "Sport"], year: 2011, rate: 7.6,
        img: "https://m.media-amazon.com/images/M/MV5BMjAxOTU3Mzc1M15BMl5BanBnXkFtZTcwMzk1ODUzNg@@._V1_SY1000_CR0,0,675,1000_AL_.jpg"
    }, {
        name: "Seven Pounds", language: ["French", "English"],
        stars: ["Will Smith", "Rosario Dawson", "Woody Harrelson"],
        director: "Gabriele Muccino", yot: "zdMpeO5G4OQ",
        description: `A man with a fateful secret embarks on an extraordinary journey of redemption by forever changing the lives of seven strangers.`,
        genre: ["Drama"], year: 2008, rate: 7.6,
        img: "https://m.media-amazon.com/images/M/MV5BMTU0NzY0MTY5OF5BMl5BanBnXkFtZTcwODY3MDEwMg@@._V1_.jpg"
    }, {
        name: "The Blind Side ", language: ["French", "English"],
        stars: ["Quinton Aaron", "Sandra Bullock", "Tim McGraw"],
        director: "John Lee Hancock", yot: "gvqj_Tk_kuM",
        description: `The story of Michael Oher, a homeless and traumatized boy who became an All-American football player and first-round NFL draft pick with the help of a caring woman and her family.`,
        genre: ["Biography", "Drama", "Sport"], year: 2009, rate: 7.6,
        img: "https://m.media-amazon.com/images/M/MV5BMjEzOTE3ODM3OF5BMl5BanBnXkFtZTcwMzYyODI4Mg@@._V1_SY1000_CR0,0,671,1000_AL_.jpg"
    }, {
        name: "Gravity", language: ["French", "English"],
        stars: ["Sandra Bullock", "George Clooney", "Ed Harris"],
        director: "Alfonso Cuarón", yot: "_KJHRF6RlTQ",
        description: `Two astronauts work together to survive after an accident leaves them stranded in space.`,
        genre: ["Drama", "Sci-Fi", "Thriller"], year: 2013, rate: 7.7,
        img: "https://m.media-amazon.com/images/M/MV5BNjE5MzYwMzYxMF5BMl5BanBnXkFtZTcwOTk4MTk0OQ@@._V1_SY1000_CR0,0,675,1000_AL_.jpg"
    }, {
        name: "The Hunger Games", language: ["French", "English"],
        stars: ["Jennifer Lawrence", "Josh Hutcherson", "Liam Hemsworth"],
        director: "Gary Ross", yot: "PbA63a7H0bo",
        description: `Katniss Everdeen voluntarily takes her younger sister's place in the Hunger Games: a televised competition in which two teenagers from each of the twelve Districts of Panem are chosen at random to fight to the death.`,
        genre: ["Action", "Adventure", "Sci-Fi"], year: 2012, rate: 7.2,
        img: "https://m.media-amazon.com/images/M/MV5BMjA4NDg3NzYxMF5BMl5BanBnXkFtZTcwNTgyNzkyNw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
    }, {
        name: "The Matrix", language: ["French", "English"],
        stars: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
        director: "Lana Wachowski", yot: "hMbexEPAOQI",
        description: `The human city of Zion defends itself against the massive invasion of the machines as Neo fights to end the war at another front while also opposing the rogue Agent Smith.`,
        genre: ["Action", "Sci-Fi"], year: 2003, rate: 6.7,
        img: "https://m.media-amazon.com/images/M/MV5BNzNlZTZjMDctZjYwNi00NzljLWIwN2QtZWZmYmJiYzQ0MTk2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,676,1000_AL_.jpg"
    }, {
        name: "Still Alice", language: ["French", "English"],
        stars: ["Julianne Moore", "Alec Baldwin", "Kristen Stewart"],
        director: "Richard Glatzer", yot: "ZrXrZ5iiR0o",
        description: `A linguistics professor and her family find their bonds tested when she is diagnosed with Alzheimer's Disease.`,
        genre: ["Drama"], year: 2014, rate: 7.5,
        img: "https://m.media-amazon.com/images/M/MV5BMjIzNzAxNjY1Nl5BMl5BanBnXkFtZTgwMDg4ODQxMzE@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
    }, {
        name: "John Wick", language: ["French", "English"],
        stars: ["Keanu Reeves", "Michael Nyqvist", "Alfie Allen"],
        director: "Chad Stahelski", yot: "C0BMx-qxsP4",
        description: `An man comes out of retirement to track down the gangsters that killed his dog and took everything from him.`,
        genre: ["Action", "Crime", "Thriller"], year: 2014, rate: 7.4,
        img: "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SY1000_CR0,0,666,1000_AL_.jpg"
    }, {
        name: "La La Land", language: ["French", "English"],
        stars: ["Ryan Gosling", "Emma Stone", "Rosemarie DeWitt"],
        director: "Damien Chazelle", yot: "0pdqf4P9MB8",
        description: `While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.`,
        genre: ["Comedy", "Drama", "Music"], year: 2016, rate: 8,
        img: "https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_SY1000_SX675_AL_.jpg"
    }, {
        name: "Southpaw", language: ["French", "English"],
        stars: ["Jake Gyllenhaal", "Rachel McAdams", "Oona Laurence"],
        director: "Antoine Fuqua", yot: "cpdchRQ7h5g",
        description: `A champion boxer fights to get his daughter back from child protective services as well as revive his professional career, after a fatal incident sends him on a rampant path of destruction.`,
        genre: ["Drama", "Sport"], year: 2015, rate: 7.4,
        img: "https://m.media-amazon.com/images/M/MV5BMjI1MTcwODk0MV5BMl5BanBnXkFtZTgwMTgwMDM5NTE@._V1_SY1000_CR0,0,673,1000_AL_.jpg"
    }, {
        name: "The Judge", language: ["French", "English"],
        stars: ["Robert Downey Jr.", "Robert Duvall", "Vera Farmiga"],
        director: "David Dobkin", yot: "8ikeVQ8WAcQ",
        description: `Big-city lawyer Hank Palmer returns to his childhood home where his father, the town's judge, is suspected of murder. Hank sets out to discover the truth and, along the way, reconnects with his estranged family.`,
        genre: ["Crime", "Drama"], year: 2014, rate: 7.4,
        img: "https://m.media-amazon.com/images/M/MV5BMTcyNzIxOTIwMV5BMl5BanBnXkFtZTgwMzE0NjQwMjE@._V1_SY1000_CR0,0,648,1000_AL_.jpg"
    }, {
        name: "Begin Again", language: ["French", "English"],
        stars: ["Keira Knightley", "Mark Ruffalo", "Adam Levine"],
        director: "John Carney", yot: "uTRCxOE7Xzc",
        description: `A chance encounter between a disgraced music-business executive and a young singer-songwriter, new to Manhattan, turns into a promising collaboration between the two talents.`,
        genre: ["Comedy", "Drama", "Music"], year: 2013, rate: 7.4,
        img: "https://m.media-amazon.com/images/M/MV5BNjAxMTI4MTgzMV5BMl5BanBnXkFtZTgwOTAwODEwMjE@._V1_SY1000_CR0,0,668,1000_AL_.jpg"
    }, {
        name: "Mudbound", language: ["French", "English"],
        stars: ["Jason Clarke", "Jonathan Banks", "Garrett Hedlund"],
        director: "Dee Rees", yot: "8QMrXVTFr88",
        description: `Two men return home from World War II to work on a farm in rural Mississippi, where they struggle to deal with racism and adjusting to life after war.`,
        genre: ["Drama", "War"], year: 2017, rate: 7.4,
        img: "https://m.media-amazon.com/images/M/MV5BZTg3YTEzNjYtZTY2NS00YjNmLTlhNjUtZTI2M2E5NDI4M2NjXkEyXkFqcGdeQXVyMzI3MDEzMzM@._V1_SY1000_CR0,0,675,1000_AL_.jpg"
    }, {
        name: "The Magnificent Seven", language: ["French", "English"],
        stars: ["Denzel Washington", "Chris Pratt", "Ethan Hawke"],
        director: "Antoine Fuqua", yot: "kkUaFKaY2Po",
        description: `Seven men from a variety of backgrounds are brought together by a vengeful young widow to protect her town from the private army of a destructive industrialist.`,
        genre: ["Action", "Adventure", "Western"], year: 2016, rate: 6.9,
        img: "https://m.media-amazon.com/images/M/MV5BMTUzNTc0NTAyM15BMl5BanBnXkFtZTgwMTk1ODA5OTE@._V1_SY1000_CR0,0,675,1000_AL_.jpg"
    }, {
        name: "Fences", language: ["French", "English"],
        stars: ["Denzel Washington", "Viola Davis", "Stephen McKinley Henderson"],
        director: "Denzel Washington", yot: "Vh7XH68xWKw",
        description: `A working-class African-American father tries to raise his family in the 1950s, while coming to terms with the events of his life.`,
        genre: ["Drama"], year: 2016, rate: 7.2,
        img: "https://m.media-amazon.com/images/M/MV5BOTg0Nzc1NjA0MV5BMl5BanBnXkFtZTgwNTcyNDQ0MDI@._V1_SY1000_CR0,0,639,1000_AL_.jpg"
    }, {
        name: "Live by Night", language: ["French", "English"],
        stars: ["Ben Affleck", "Elle Fanning", "Brendan Gleeson"],
        director: "Ben Affleck", yot: "a-Z1E4XFucE",
        description: `A group of Boston-bred set up shop in balmy Florida during the Prohibition era, facing off against the competition and the Ku Klux Klan.`,
        genre: ["Action", "Crime", "Drama"], year: 2016, rate: 6.4,
        img: "https://m.media-amazon.com/images/M/MV5BMjc3MDIyMjgzNl5BMl5BanBnXkFtZTgwMzUxOTg3MDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
    }, {
        name: "Daddy's Home 2", language: ["French", "English"],
        stars: ["Will Ferrell", "Mark Wahlberg", "Mel Gibson"],
        director: "Sean Anders", yot: "2MddEE_tC_w",
        description: `Having finally gotten used to each other's existence, Brad and Dusty must now deal with their intrusive fathers during the holidays.`,
        genre: ["Comedy"], year: 2017, rate: 6,
        img: "https://m.media-amazon.com/images/M/MV5BNDA4Nzc1OTg2OV5BMl5BanBnXkFtZTgwODE3ODgwNDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
    }, {
        name: "The Intern", language: ["French", "English"],
        stars: ["Comedy", "Drama"],
        director: "Nancy Meyers", yot: "thv8myYCUQE",
        description: `Seventy-year-old widower Ben Whittaker has discovered that retirement isn't all it's cracked up to be. Seizing an opportunity to get back in the game, he becomes a senior intern at an online fashion site, founded and run by Jules Ostin.`,
        genre: ["Robert De Niro", "Anne Hathaway", "Rene Russo"], year: 2015, rate: 7.1,
        img: "https://m.media-amazon.com/images/M/MV5BMTUyNjE5NjI5OF5BMl5BanBnXkFtZTgwNzYzMzU3NjE@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
    }, {
        name: "The Professor", language: ["French", "English"],
        stars: ["Johnny Depp", "Rosemarie DeWitt", "Odessa Young"],
        director: "Wayne Roberts", yot: "raGuAtgC9C0",
        description: `A college professor lives his life with reckless abandon after being diagnosed with a terminal illness.`,
        genre: ["Comedy", "Drama"], year: 2018, rate: 6.7,
        img: "https://m.media-amazon.com/images/M/MV5BNWU1NDgxNjktZmE0Ny00ZmE0LThhOTItODUxMTc5MWQwOTNhXkEyXkFqcGdeQXVyNjg3MDMxNzU@._V1_SY1000_CR0,0,675,1000_AL_.jpg"
    }, {
        name: "I Am Legend", language: ["French", "English"],
        stars: ["Will Smith", "Alice Braga", "Charlie Tahan"],
        director: "Francis Lawrence", yot: "dtKMEAXyPkg",
        description: `Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure in this post-apocalyptic action thriller.`,
        genre: ["Drama", "Sci-Fi", "Thriller"], year: 2007, rate: 7.2,
        img: "https://m.media-amazon.com/images/M/MV5BYTE1ZTBlYzgtNmMyNS00ZTQ2LWE4NjEtZjUxNDJkNTg2MzlhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_SX675_AL_.jpg"
    }, {
        name: "King Kong", language: ["French", "English"],
        stars: ["Naomi Watts", "Jack Black", "Adrien Brody"],
        director: "Peter Jackson", yot: "AYaTCPbYGdk",
        description: `A greedy film producer assembles a team of moviemakers and sets out for the infamous Skull Island, where they find more than just cannibalistic natives.`,
        genre: ["Action", "Adventure", "Drama"], year: 2005, rate: 7.2,
        img: "https://m.media-amazon.com/images/M/MV5BMjYxYmRlZWYtMzAwNC00MDA1LWJjNTItOTBjMzlhNGMzYzk3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,675,1000_AL_.jpg"
    }, {
        name: "Jobs", language: ["French", "English"],
        stars: ["Ashton Kutcher", "Dermot Mulroney", "Josh Gad"],
        director: "Joshua Michael Stern", yot: "FrvkCS0ZGPU",
        description: `The story of Steve Jobs' ascension from college dropout into one of the most revered creative entrepreneurs of the 20th century.`,
        genre: ["Biography", "Drama"], year: 2013, rate: 5.9,
        img: "https://m.media-amazon.com/images/M/MV5BMTM5NTQ3MTYxN15BMl5BanBnXkFtZTcwODE2Nzk3OQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
    }, {
        name: "Creed II", language: ["French", "English"],
        stars: ["Michael B. Jordan", "Sylvester Stallone", "Tessa Thompson"],
        director: "Steven Caple Jr.", yot: "ApQbQ0iJQO0",
        description: `Under the tutelage of Rocky Balboa, newly crowned heavyweight champion Adonis Creed faces off against Viktor Drago, the son of Ivan Drago.`,
        genre: ["Drama", "Sport"], year: 2018, rate: 7.2,
        img: "https://m.media-amazon.com/images/M/MV5BMTcxMjUwNjQ5N15BMl5BanBnXkFtZTgwNjk4MzI4NjM@._V1_.jpg"
    }, {
        name: "Dope", language: ["French", "English"],
        stars: ["Shameik Moore", "Tony Revolori", "Kiersey Clemons"],
        director: "Rick Famuyiwa", yot: "3ViVPRWRRmk",
        description: `Life changes for Malcolm, a geek who's surviving life in a tough neighborhood, after a chance invitation to an underground party leads him and his friends into a Los Angeles adventure.`,
        genre: ["Comedy", "Crime", "Drama"], year: 2015, rate: 7.2,
        img: "https://m.media-amazon.com/images/M/MV5BMjA3MjYyNTk0Nl5BMl5BanBnXkFtZTgwODc1NzQ1NTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
    },
    {
        name: "Iron Man 3 22", language: ["French", "English"], stars: ["Robert Downey Jr.", "Guy Pearce", "Gwyneth Paltrow"], director: "Shane Black", yot: "BoohRoVA9WQ",
        description: `When Tony Stark's world is torn apart by a formidable called the Mandarin, he starts an odyssey of rebuilding and retribution.`,
        genre: ["Action", "Adventure", "Sci-Fi"], year: 2013, rate: 7.2, img: "https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_SY1000_SX700_AL_.jpg"
    },

    {
        name: "Five Feet Apart", language: ["French", "English"],
        stars: ["Haley Lu Richardson", "Cole Sprouse", "Moises Arias"],
        director: "Justin Baldoni", yot: "XtgCqMZofqM",
        description: `A pair of teenagers with cystic fibrosis meet in a hospital and fall in love, though their disease means they must avoid close physical contact.`,
        genre: ["Drama", "Romance"], year: 2019, rate: 7.2,
        img: "https://m.media-amazon.com/images/M/MV5BNzVmMjJlN2MtNWQ4Ny00Zjc2LWJjYTgtYjJiNGM5MTM1ZTlkXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SY1000_SX675_AL_.jpg"
    }, {
        name: "Project X", language: ["French", "English"],
        stars: ["Thomas Mann", "Oliver Cooper", "Jonathan Daniel Brown"],
        director: "Nima Nourizadeh", yot: "3BEIhA8CcY0",
        description: `3 high school seniors throw a birthday party to make a name for themselves. As the night progresses, things spiral out of control as word of the party spreads.`,
        genre: ["Comedy"], year: 2012, rate: 9.9,
        img: "https://m.media-amazon.com/images/M/MV5BMTc1MTk0Njg4OF5BMl5BanBnXkFtZTcwODc0ODkyNw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg"
    }, {
        name: "Breaking Bad", language: ["French", "English"], type: "tvshows",
        stars: ["Bryan Cranston", "Aaron Paul", "Anna Gunn"],
        director: "Vince Gilligan",
        description: `A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.`,
        genre: ["Crime", "Drama", "Thriller"], year: 2008, rate: 9.5,
        img: "https://m.media-amazon.com/images/M/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,718,1000_AL_.jpg",
        yot: "VaOt6tXyf2Y",
    }, {
        name: "Chernobyl", language: ["French", "English"], type: "tvshows",
        stars: ["Jessie Buckley", "Jared Harris", "Stellan Skarsgård"],
        director: "Craig Mazin",
        description: `In April 1986, an explosion at the Chernobyl nuclear power plant in the Union of Soviet Socialist Republics becomes one of the world's worst man-made catastrophes.`,
        genre: ["Drama", "History", "Thriller"], year: 2019, rate: 9.5,
        img: "https://m.media-amazon.com/images/M/MV5BNTEyYmIzMDUtNWMwNC00Y2Q1LWIyZTgtMGY1YzUxOTAwYTAwXkEyXkFqcGdeQXVyMjIyMTc0ODQ@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        yot: "Rle1Bywi61M",
    }, {
        name: "Friends", language: ["French", "English"], type: "tvshows",
        stars: ["Jennifer Aniston", "Courteney Cox", "Lisa Kudrow"],
        director: "David Crane",
        description: `Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.`,
        genre: ["Comedy", "Romance"], year: 1994, rate: 8.2,
        img: "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
        yot: "96DDkJMZd-Q",
    }, {
        name: "Hunter x Hunter", language: ["French", "English"], type: "tvshows",
        stars: ["Megumi Han", "Mariya Ise", "Issei Futamata"],
        director: "Yoshihiro Togashi",
        description: `Gon Freecss aspires to become a Hunter, an exceptional being capable of greatness. With his friends and his potential, he seeks for his father who left him when he was younger.`,
        genre: ["Animation", "Action", "Adventure"], year: 2011, rate: 8.9,
        img: "https://m.media-amazon.com/images/M/MV5BZjNmZDhkN2QtNDYyZC00YzJmLTg0ODUtN2FjNjhhMzE3ZmUxXkEyXkFqcGdeQXVyNjc2NjA5MTU@._V1_.jpg",
        yot: "XrdbZT5luns",
    }, {
        name: "Snatch ", language: ["French", "English"], stars: ["Jason Statham", "Brad Pitt", "Benicio Del Toro"], director: "Guy Ritchie", yot: "9Jar2XkBboo",
        description: `Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond.`,
        genre: ["Comedy", "Sci-Fi"], year: 2000, rate: 8.3, img: "https://m.media-amazon.com/images/M/MV5BMTA2NDYxOGYtYjU1Mi00Y2QzLTgxMTQtMWI1MGI0ZGQ5MmU4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SY1000_SX684_AL_.jpg"
    }, {
        name: "The Grand Tour", language: ["French", "English"], type: "tvshows",
        stars: ["Jeremy Clarkson", "James May", "Richard Hammond"],
        director: "Jeremy Clarkson",
        description: `Follow Jeremy, Richard, and James, as they embark on an adventure across the globe, driving new and exciting automobiles from manufacturers all over the world.`,
        genre: ["Comedy", "Talk-Show"], year: 2016, rate: 8.7,
        img: "https://m.media-amazon.com/images/M/MV5BYjkyOWIyZGYtYzU3ZS00NWM2LThjZGEtMDZjZjg2MTI2NzBhXkEyXkFqcGdeQXVyNjI4OTg2Njg@._V1_.jpg",
        yot: "v_NRSoVncJQ",
    }, {
        name: "The Punisher", language: ["French", "English"], type: "tvshows",
        stars: ["Jon Bernthal", "Amber Rose Revah", "Ben Barnes"],
        director: "Steve Lightfoot",
        description: `After the murder of his family, Marine veteran Frank Castle becomes the vigilante known as "The Punisher," with only one goal in mind: to avenge them.`,
        genre: ["Action", "Adventure", "Crime"], year: 2017, rate: 8.5,
        img: "https://m.media-amazon.com/images/M/MV5BMWJhODEyNWYtZmI1NS00ZTRmLWJjZmYtNjQ0M2RjYWRiMzYwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
        yot: "s4QV6OZdmWY",
    }, {
        name: "Baby Driver", language: ["French", "English"],
        stars: ["Ansel Elgort", "Jon Bernthal", "Jon Hamm", "Kevin Spacey"],
        director: "Edgar Wright", yot: "D9YZw_X5UzQ",
        description: `After being coerced into working for a crime boss, a young getaway driver finds himself taking part in a heist doomed to fail.`,
        genre: ["Action", "Crime", "Drama"], year: 2017, rate: 7.6,
        img: "https://m.media-amazon.com/images/M/MV5BMjM3MjQ1MzkxNl5BMl5BanBnXkFtZTgwODk1ODgyMjI@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
    }, {
        name: "Sherlock", language: ["French", "English"], type: "tvshows",
        stars: ["Benedict Cumberbatch", "Martin Freeman", "Una Stubbs"],
        director: "Mark Gatiss",
        description: `A modern update finds the famous sleuth and his doctor partner solving crime in 21st century.`,
        genre: ["Crime", "Drama", "Mystery"], year: 2010, rate: 9.1,
        img: "https://m.media-amazon.com/images/M/MV5BOGNiODlhMTUtMzM5Zi00MjBiLWJlMGMtNTJlYzI4NjVlODczXkEyXkFqcGdeQXVyNTAwNzc3ODg@._V1_.jpg",
        yot: "J7nJksXDBWc",
    }, {
        name: "Better Call Saul", language: ["French", "English"], type: "tvshows",
        stars: ["Bob Odenkirk", "Rhea Seehorn", "Jonathan Banks"],
        director: "Vince Gilligan",
        description: `The trials and tribulations of criminal lawyer Jimmy McGill in the time before he established his strip-mall law office in Albuquerque, New Mexico.`,
        genre: ["Crime", "Drama"], year: 2015, rate: 8.7,
        img: "https://m.media-amazon.com/images/M/MV5BMTAxOTQ0MjUzMzJeQTJeQWpwZ15BbWU4MDY0NTAxNzMx._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        yot: "HN4oydykJFc",
    }, {
        name: "Suits", language: ["French", "English"], type: "tvshows",
        stars: ["Gabriel Macht", "Patrick J. Adams", "Meghan Markle"],
        director: "Aaron Korsh",
        description: `On the run from a drug deal gone bad, Mike Ross, a brilliant college dropout, finds himself a job working with Harvey Specter, one of New York City's best lawyers.`,
        genre: ["Comedy", "Drama"], year: 2011, rate: 8.5,
        img: "https://m.media-amazon.com/images/M/MV5BNmVmMmM5ZmItZDg0OC00NTFiLWIxNzctZjNmYTY5OTU3ZWU3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        yot: "DACM1k74YYc",
    },


    {
        name: "Ray Donovan", language: ["French", "English"], type: "tvshows",
        stars: ["Liev Schreiber", "Eddie Marsan", "Dash Mihok"],
        director: "Ann Biderman",
        description: `Ray Donovan, a professional "fixer" for the rich and famous in Los Angeles, can make anyone's problems disappear except those created by his own family.`,
        genre: ["Crime", "Drama"], year: 2013, rate: 8.3,
        img: "https://m.media-amazon.com/images/M/MV5BNzBhMjNlYTEtNmMyZC00YTJhLWI1MjAtMjY2OWZlNGE3MDE3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
        yot: "r36OT6TsHOw",
    }, {
        name: "The Big Bang Theory", language: ["French", "English"], type: "tvshows",
        genre: ["Comedy", "Romance"],
        director: "Chuck Lorre",
        description: `A woman who moves into an apartment across the hall from two brilliant but socially awkward physicists shows them how little they know about life outside of the laboratory.`,
        stars: ["Johnny Galecki", "Jim Parsons", "Kaley Cuoco"], year: 2007, rate: 9.9,
        img: "https://m.media-amazon.com/images/M/MV5BY2FmZTY5YTktOWRlYy00NmIyLWE0ZmQtZDg2YjlmMzczZDZiXkEyXkFqcGdeQXVyNjg4NzAyOTA@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
        yot: "sehlQGZi16w",
    },
]

let movies1 = [{
    name: "Batman Begins", stars: ["Christian Bale", "Michael Caine", "Ken Watanabe"], director: "Christopher Nolan",
    description: `After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.`,
    genre: ["Action", "Adventure"], year: 2005, rate: 8.2, img: "https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SY1000_SX750_AL_.jpg"
},]

export default moviesList