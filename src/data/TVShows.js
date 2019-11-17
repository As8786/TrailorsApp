let tvShowsList = [
    {
        name: "Breaking Bad", language: ["French", "English"],
        stars: ["Bryan Cranston", "Aaron Paul", "Anna Gunn"],
        director: "Vince Gilligan",
        description: `A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.`,
        genre: ["Crime", "Drama", "Thriller"], year: 2008, rate: 9.5,
        img: "https://m.media-amazon.com/images/M/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,718,1000_AL_.jpg",
        yot: "VaOt6tXyf2Y",
    }, {
        name: "Chernobyl", language: ["French", "English"],
        stars: ["Jessie Buckley", "Jared Harris", "Stellan Skarsgård"],
        director: "Craig Mazin",
        description: `In April 1986, an explosion at the Chernobyl nuclear power plant in the Union of Soviet Socialist Republics becomes one of the world's worst man-made catastrophes.`,
        genre: ["Drama", "History", "Thriller"], year: 2019, rate: 9.5,
        img: "https://m.media-amazon.com/images/M/MV5BNTEyYmIzMDUtNWMwNC00Y2Q1LWIyZTgtMGY1YzUxOTAwYTAwXkEyXkFqcGdeQXVyMjIyMTc0ODQ@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        yot: "Rle1Bywi61M",
    }, {
        name: "Game of Thrones", language: ["French", "English"],
        stars: ["Emilia Clarke", "Peter Dinklage", "Kit Harington"],
        director: "David Benioff",
        description: `Nine noble families fight for control over the mythical lands of Westeros, while an ancient enemy returns after being dormant for thousands of years.`,
        genre: ["Action", "Adventure", "Drama"], year: 2011, rate: 9.4,
        img: "https://m.media-amazon.com/images/M/MV5BMjA5NzA5NjMwNl5BMl5BanBnXkFtZTgwNjg2OTk2NzM@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        yot: "rlR4PJn8b8I",
    }, {
        name: "Friends", language: ["French", "English"],
        stars: ["Jennifer Aniston", "Courteney Cox", "Lisa Kudrow"],
        director: "David Crane",
        description: `Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.`,
        genre: ["Comedy", "Romance"], year: 1994, rate: 8.2,
        img: "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
        yot: "96DDkJMZd-Q",
    }, {
        name: "Hunter x Hunter", language: ["French", "English"],
        stars: ["Megumi Han", "Mariya Ise", "Issei Futamata"],
        director: "Yoshihiro Togashi",
        description: `Gon Freecss aspires to become a Hunter, an exceptional being capable of greatness. With his friends and his potential, he seeks for his father who left him when he was younger.`,
        genre: ["Animation", "Action", "Adventure"], year: 2011, rate: 8.9,
        img: "https://m.media-amazon.com/images/M/MV5BZjNmZDhkN2QtNDYyZC00YzJmLTg0ODUtN2FjNjhhMzE3ZmUxXkEyXkFqcGdeQXVyNjc2NjA5MTU@._V1_.jpg",
        yot: "XrdbZT5luns",
    }, {
        name: "Narcos", language: ["French", "English"],
        stars: ["Pedro Pascal", "Wagner Moura", "Boyd Holbrook"],
        director: "Carlo Bernard",
        description: `A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country through the years.`,
        genre: ["Biography", "Crime", "Drama"], year: 2015, rate: 8.8,
        img: "https://m.media-amazon.com/images/M/MV5BMjIwNDQ0Mzg4Ml5BMl5BanBnXkFtZTgwMTI1Mzc3OTE@._V1_SY1000_SX1500_AL_.jpg",
        yot: "YZSXeGqXb_w",
    }, {
        name: "Peaky Blinders", language: ["French", "English"],
        stars: ["Cillian Murphy", "Paul Anderson", "Helen McCrory"],
        director: "Steven Knight",
        description: `A gangster family epic set in 1919 Birmingham, England; centered on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.`,
        genre: ["Crime", "Drama"], year: 2013, rate: 8.8,
        img: "https://m.media-amazon.com/images/M/MV5BMTQxODYzNTQzOV5BMl5BanBnXkFtZTgwMTI2MDYwMDE@._V1_.jpg",
        yot: "Ruyl8_PT_y8",
    }, {
        name: "Westworld", language: ["French", "English"],
        stars: ["Evan Rachel Wood", "Jeffrey Wright", "Ed Harris", "Anthony Hopkins"],
        director: "Lisa Joy",
        description: `Set at the intersection of the near future and the reimagined past, explore a world in which every human appetite can be indulged without consequence.`,
        genre: ["Drama", "Mystery", "Sci-Fi"], year: 2016, rate: 8.8,
        img: "https://m.media-amazon.com/images/M/MV5BNThjM2Y3MDUtYTIyNC00ZDliLWJlMmItNWY1N2E5NjhmMGM4XkEyXkFqcGdeQXVyNjU2ODM5MjU@._V1_SY1000_CR0,0,673,1000_AL_.jpg",
        yot: "qSFZW5efo6M",
    }, {
        name: "Dragon Ball Z", language: ["French", "English"],
        stars: ["Jôji Yanami", "Kyle Hebert", "Masako Nozawa"],
        director: "Daisuke Nishio",
        description: `The adventures of Earth's martial arts defender Son Goku continue with a new family and the revelation of his alien origin. Now Goku and his allies must defend the planet from an onslaught of new extraterrestrial enemies.`,
        genre: ["Animation", "Action", "Adventure"], year: 1989, rate: 8.7,
        img: "https://m.media-amazon.com/images/M/MV5BMGMyOThiMGUtYmFmZi00YWM0LWJiM2QtZGMwM2Q2ODE4MzhhXkEyXkFqcGdeQXVyMjc2Nzg5OTQ@._V1_SY1000_CR0,0,679,1000_AL_.jpg",
        yot: "aOPJ6y3HWII",
    }, {
        name: "The Simpsons", language: ["French", "English"],
        stars: ["Dan Castellaneta", "Nancy Cartwright", "Harry Shearer"],
        director: "James L. Brooks",
        description: `The satiric adventures of a working-class family in the misfit city of Springfield.`,
        genre: ["Animation", "Comedy"], year: 1989, rate: 8.7,
        img: "https://m.media-amazon.com/images/M/MV5BYjFkMTlkYWUtZWFhNy00M2FmLThiOTYtYTRiYjVlZWYxNmJkXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
        yot: "XPG0MqIcby8",
    }, {
        name: "The Grand Tour", language: ["French", "English"],
        stars: ["Jeremy Clarkson", "James May", "Richard Hammond"],
        director: "Jeremy Clarkson",
        description: `Follow Jeremy, Richard, and James, as they embark on an adventure across the globe, driving new and exciting automobiles from manufacturers all over the world.`,
        genre: ["Comedy", "Talk-Show"], year: 2016, rate: 8.7,
        img: "https://m.media-amazon.com/images/M/MV5BYjkyOWIyZGYtYzU3ZS00NWM2LThjZGEtMDZjZjg2MTI2NzBhXkEyXkFqcGdeQXVyNjI4OTg2Njg@._V1_.jpg",
        yot: "v_NRSoVncJQ",
    }, {
        name: "Vikings", language: ["French", "English"],
        stars: ["Gustaf Skarsgård", "Katheryn Winnick", "Alexander Ludwig"],
        director: "Michael Hirst",
        description: `Vikings transports us to the brutal and mysterious world of Ragnar Lothbrok, a Viking warrior and farmer who yearns to explore - and raid - the distant shores across the ocean.`,
        genre: ["Action", "Adventure", "Drama "], year: 2013, rate: 8.6,
        img: "https://m.media-amazon.com/images/M/MV5BZWNlZmNiNzItYWMwNC00ODYxLThlNjYtMjU3NzlmNDQxMTY2XkEyXkFqcGdeQXVyMTA3MzQ4MTc0._V1_SY1000_CR0,0,666,1000_AL_.jpg",
        yot: "Y7d0A5re7-0",
    }, {
        name: "The Punisher", language: ["French", "English"],
        stars: ["Jon Bernthal", "Amber Rose Revah", "Ben Barnes"],
        director: "Steve Lightfoot",
        description: `After the murder of his family, Marine veteran Frank Castle becomes the vigilante known as "The Punisher," with only one goal in mind: to avenge them.`,
        genre: ["Action", "Adventure", "Crime"], year: 2017, rate: 8.5,
        img: "https://m.media-amazon.com/images/M/MV5BMWJhODEyNWYtZmI1NS00ZTRmLWJjZmYtNjQ0M2RjYWRiMzYwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
        yot: "s4QV6OZdmWY",
    }, {
        name: "Mr. Robot", language: ["French", "English"],
        stars: ["Rami Malek", "Christian Slater", "Carly Chaikin"],
        director: "Sam Esmail",
        description: `Elliot, a brilliant but highly unstable young cyber-security engineer and vigilante hacker, becomes a key figure in a complex game of global dominance when he and his shadowy allies try to take down the corrupt corporation he works for.`,
        genre: ["Crime", "Drama", "Thriller"], year: 2015, rate: 8.5,
        img: "https://m.media-amazon.com/images/M/MV5BMzgxMmQxZjQtNDdmMC00MjRlLTk1MDEtZDcwNTdmOTg0YzA2XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
        yot: "8IEQpfA528M",
    }, {
        name: "Sherlock", language: ["French", "English"],
        stars: ["Benedict Cumberbatch", "Martin Freeman", "Una Stubbs"],
        director: "Mark Gatiss",
        description: `A modern update finds the famous sleuth and his doctor partner solving crime in 21st century.`,
        genre: ["Crime", "Drama", "Mystery"], year: 2010, rate: 9.1,
        img: "https://m.media-amazon.com/images/M/MV5BOGNiODlhMTUtMzM5Zi00MjBiLWJlMGMtNTJlYzI4NjVlODczXkEyXkFqcGdeQXVyNTAwNzc3ODg@._V1_.jpg",
        yot: "J7nJksXDBWc",
    }, {
        name: "Better Call Saul", language: ["French", "English"],
        stars: ["Bob Odenkirk", "Rhea Seehorn", "Jonathan Banks"],
        director: "Vince Gilligan",
        description: `The trials and tribulations of criminal lawyer Jimmy McGill in the time before he established his strip-mall law office in Albuquerque, New Mexico.`,
        genre: ["Crime", "Drama"], year: 2015, rate: 8.7,
        img: "https://m.media-amazon.com/images/M/MV5BMTAxOTQ0MjUzMzJeQTJeQWpwZ15BbWU4MDY0NTAxNzMx._V1_SY1000_CR0,0,674,1000_AL_.jpg",
        yot: "HN4oydykJFc",
    }, {
        name: "Sons of Anarchy", language: ["French", "English"],
        stars: ["Charlie Hunnam", "Katey Sagal", "Mark Boone Junior"],
        director: "Kurt Sutter",
        description: `A biker struggles to balance being a father and being involved in an outlaw motorcycle club.`,
        genre: ["Crime", "Drama", "Thriller"], year: 2008, rate: 8.6,
        img: "https://m.media-amazon.com/images/M/MV5BMTEyODg2NzkwMDBeQTJeQWpwZ15BbWU4MDQwODI3MzIx._V1_.jpg",
        yot: "5nDknlYoxRs",
    }, {
        name: "BoJack Horseman", language: ["French", "English"],
        stars: ["Will Arnett", "Amy Sedaris", "Alison Brie"],
        director: "Raphael Bob-Waksberg",
        description: `BoJack Horseman was the star of the hit television show "Horsin' Around" in the '80s and '90s, now he's washed up, living in Hollywood, complaining about everything, and wearing colorful sweaters.`,
        genre: ["Animation", "Comedy", "Drama"], year: 2014, rate: 8.6,
        img: "https://m.media-amazon.com/images/M/MV5BYWQwMDNkM2MtODU4OS00OTY3LTgwOTItNjE2Yzc0MzRkMDllXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
        yot: "ZOGxOQxXjdo",
    }, {
        name: "Suits", language: ["French", "English"],
        stars: ["Gabriel Macht", "Patrick J. Adams", "Meghan Markle"],
        director: "Aaron Korsh",
        description: `On the run from a drug deal gone bad, Mike Ross, a brilliant college dropout, finds himself a job working with Harvey Specter, one of New York City's best lawyers.`,
        genre: ["Comedy", "Drama"], year: 2011, rate: 8.5,
        img: "https://m.media-amazon.com/images/M/MV5BNmVmMmM5ZmItZDg0OC00NTFiLWIxNzctZjNmYTY5OTU3ZWU3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        yot: "DACM1k74YYc",
    }, {
        name: "Brooklyn Nine-Nine", language: ["French", "English"],
        stars: ["Andy Samberg", "Stephanie Beatriz", "Terry Crews"],
        director: "Daniel J. Goor",
        description: `Jake Peralta, an immature, but talented N.Y.P.D. detective in Brooklyn's 99th Precinct, comes into immediate conflict with his new commanding officer, the serious and stern Captain Ray Holt.`,
        genre: ["Comedy", "Crime"], year: 2013, rate: 8.4,
        img: "https://m.media-amazon.com/images/M/MV5BMGU3NGYyYTYtYjIzMS00ZmUwLTlmMjAtZDhhMzFiNWI0NzNkXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_SY1000_CR0,0,701,1000_AL_.jpg",
        yot: "HblwLcAR4r4",
    }, {
        name: "The Walking Dead", language: ["French", "English"],
        stars: ["Andrew Lincoln", "Norman Reedus", "Melissa McBride"],
        director: "Frank Darabont",
        description: `Sheriff Deputy Rick Grimes wakes up from a coma to learn the world is in ruins, and must lead a group of survivors to stay alive.`,
        genre: ["Drama", "Horror", "Thriller"], year: 2010, rate: 8.3,
        img: "https://m.media-amazon.com/images/M/MV5BYWY4ODJiZjMtNWMxYi00ZmM5LWIwZmQtZWY0MjJmZGU5MjcxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
        yot: "MWSF9RZiUos",
    }, {
        name: "Ray Donovan", language: ["French", "English"],
        stars: ["Liev Schreiber", "Eddie Marsan", "Dash Mihok"],
        director: "Ann Biderman",
        description: `Ray Donovan, a professional "fixer" for the rich and famous in Los Angeles, can make anyone's problems disappear except those created by his own family.`,
        genre: ["Crime", "Drama"], year: 2013, rate: 8.3,
        img: "https://m.media-amazon.com/images/M/MV5BNzBhMjNlYTEtNmMyZC00YTJhLWI1MjAtMjY2OWZlNGE3MDE3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
        yot: "r36OT6TsHOw",
    }, {
        name: "How I Met Your Mother", language: ["French", "English"],
        stars: ["Josh Radnor", "Jason Segel", "Cobie Smulders"],
        director: "Carter Bays",
        description: `A father recounts to his children, through a series of flashbacks, the journey he and his four best friends took leading up to him meeting their mother.`,
        genre: ["Comedy", "Romance"], year: 2005, rate: 8.3,
        img: "https://m.media-amazon.com/images/M/MV5BZWJjMDEzZjUtYWE1Yy00M2ZiLThlMmItODljNTAzODFiMzc2XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
        yot: "J4vY3LB5R1M",
    }, {
        name: "The Big Bang Theory", language: ["French", "English"],
        genre: ["Comedy", "Romance"],
        director: "Chuck Lorre",
        description: `A woman who moves into an apartment across the hall from two brilliant but socially awkward physicists shows them how little they know about life outside of the laboratory.`,
        stars: ["Johnny Galecki", "Jim Parsons", "Kaley Cuoco"], year: 2007, rate: 9.9,
        img: "https://m.media-amazon.com/images/M/MV5BY2FmZTY5YTktOWRlYy00NmIyLWE0ZmQtZDg2YjlmMzczZDZiXkEyXkFqcGdeQXVyNjg4NzAyOTA@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
        yot: "sehlQGZi16w",
    },

]

export default tvShowsList