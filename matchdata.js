const matches = [
  {
    id: "match-1",
    date:"10th January",
    teamA: "Stardust Smashaders",
    teamB: "Feni Flickers",
    score: "3-4",
    status: "Past",
    submatches: [
      {
        game: "Singles A",
        playerA: "Ammar",
        playerB: "Veer",
        games: ["5-11", "7-11", "-"],
        winner: "Veer",
        status: "Completed"
      },
      {
        game: "Singles B",
        playerA: "Abhinav",
        playerB: "Aarush",
        games: ["6-11", "8-11", "-"],
        winner: "Aarush",
        status: "Completed"
      },
      {
        game: "Singles C",
        playerA: "Animesh",
        playerB: "Tanay",
        games: ["11-1", "11-4", "-"],
        winner: "Animesh",
        status: "Completed"
      },
      {
        game: "Doubles",
        playerA: "Manas & Shrish",
        playerB: "Vatsal & Jatin",
        games: ["11-5", "11-8", "-"],
        winner: "Manas & Shrish",
        status: "Completed"
      },
      {
        game: "Singles D",
        playerA: "Abhinav",
        playerB: "Veer",
        games: ["7-11", "11-9", "10-12"],
        winner: "Veer",
        status: "Completed"
      },
      {
        game: "Singles E",
        playerA: "Ammar",
        playerB: "Aarush",
        games: ["11-7", "12-14", "4-11"],
        winner: "Aarush",
        status: "Completed"
      }
    ]
  },
  {
    id: "match-2",
    date:"13th January",
    teamA: "Backhand Blitzers",
    teamB: "The Batmen",
    score: "4-3",
    status: "Past",//Change this to Live when match starts, and Past when match end
    submatches: [
      {
        game: "Singles A",
        playerA: "Atharv",
        playerB: "Vidit",
        games: ["8-11", "11-4", "11-4"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: "Atharv",
        status: "Completed"//Change this to Ongoing, when game starts, then change to Completed when game over
      },
      {
        game: "Singles B",
        playerA: "Vaidik",
        playerB: "Aditya",
        games: ["11-7", "8-11", "11-5"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: "Vaidik",
        status: "Completed"//Change this to Ongoing, when game starts, then change to Completed when game over
      },
      {
        game: "Singles C",
        playerA: "Divyam",
        playerB: "Prateek",
        games: ["4-11", "10-12", "-"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: "Prateek",
        status: "Completed"//Change this to Ongoing, when game starts, then change to Completed when game over
      },
      {
        game: "Doubles",
        playerA: "Satvik  & Kanupriya",
        playerB: "Aayush & Pranjal",
        games: ["6-11", "12-14", "-"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: "Aayush & Pranjal",
        status: "Completed"//Change this to Ongoing, when game starts, then change to Completed when game over
      },
      {
        game: "Singles D",
        playerA: "Atharv",
        playerB: "Aditya",
        games: ["10-12", "11-7", "11-7"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: "Atharv",
        status: "Completed"//Change this to Ongoing, when game starts, then change to Completed when game over
      },
      {
        game: "Singles E",
        playerA: "Vaidik",
        playerB: "Vidit",
        games: ["11-3", "13-11", "-"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: "Vaidik",
        status: "Completed"//Change this to Ongoing, when game starts, then change to Completed when game over
      }
    ]
  },
  {
    id: "match-3",
    date:"13th January",
    teamA: "Sancoale Smashers",
    teamB: "High Rankers",
    score: "0-0",//Update this at last, when all scores are done
    status: "Upcoming",//Change this to Live when match starts, and Past when match end
    submatches: [
      {
        game: "Singles A",
        playerA: "TBA",
        playerB: "TBA",
        games: ["Scheduled", "Scheduled", "Scheduled"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: null,
        status: "Upcoming"//Change this to Ongoing, when game starts, then change to Completed when game over
      },
      {
        game: "Singles B",
        playerA: "TBA",
        playerB: "TBA",
        games: ["Scheduled", "Scheduled", "Scheduled"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: null,
        status: "Upcoming"//Change this to Ongoing, when game starts, then change to Completed when game over
      },
      {
        game: "Singles C",
        playerA: "TBA",
        playerB: "TBA",
        games: ["Scheduled", "Scheduled", "Scheduled"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: null,
        status: "Upcoming"//Change this to Ongoing, when game starts, then change to Completed when game over
      },
      {
        game: "Doubles",
        playerA: "TBA",
        playerB: "TBA",
        games: ["Scheduled", "Scheduled", "Scheduled"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: null,
        status: "Upcoming"//Change this to Ongoing, when game starts, then change to Completed when game over
      },
      {
        game: "Singles D",
        playerA: "TBA",
        playerB: "TBA",
        games: ["Scheduled", "Scheduled", "Scheduled"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: null,
        status: "Upcoming"//Change this to Ongoing, when game starts, then change to Completed when game over
      },
      {
        game: "Singles E",
        playerA: "TBA",
        playerB: "TBA",
        games: ["Scheduled", "Scheduled", "Scheduled"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: null,
        status: "Upcoming"//Change this to Ongoing, when game starts, then change to Completed when game over
      }
    ]
  }
  
];

module.exports = matches;