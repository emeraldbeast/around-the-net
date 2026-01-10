const matches = [
  {
    id: "match-1",
    teamA: "Stardust Smashaders",
    teamB: "Feni Flickers",
    status: "Live",
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
        games: ["-", "-", "-"],
        winner: null,
        status: "Ongoing"
      },
      {
        game: "Singles E",
        playerA: "Ammar",
        playerB: "Aarush",
        games: ["Scheduled", "Scheduled", "Scheduled"],
        winner: null,
        status: "Upcoming"
      }
    ]
  }
];

module.exports = matches;