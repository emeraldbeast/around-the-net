const matches = [
  {
    id: "match-1",
    teamA: "Backhand Blitzers",
    teamB: "Pong Stars",
    status: "Live",
    submatches: [
      {
        game: "Singles A",
        playerA: "Arjun",
        playerB: "Ravi",
        games: ["11–8", "7–11", "11–6"],
        winner: "Arjun",
        status: "Completed"
      },
      {
        game: "Singles B",
        playerA: "Karan",
        playerB: "Sahil",
        games: ["9–11", "11–9", "—"],
        winner: "Karan",
        status: "Ongoing"
      },
      {
        game: "Singles C",
        playerA: "Neel",
        playerB: "Kunal",
        games: ["—", "—", "—"],
        winner: null,
        status: "Upcoming"
      },
      {
        game: "Doubles",
        playerA: "Arjun & Karan",
        playerB: "Ravi & Sahil",
        games: ["—", "—", "—"],
        winner: null,
        status: "Upcoming"
      },
      {
        game: "Singles D",
        playerA: "Neel",
        playerB: "Ravi",
        games: ["—", "—", "—"],
        winner: null,
        status: "Upcoming"
      },
      {
        game: "Singles E",
        playerA: "Karan",
        playerB: "Kunal",
        games: ["—", "—", "—"],
        winner: null,
        status: "Upcoming"
      }
    ]
  },
  {
    id: "match-2",
    teamA: "The Batmen",
    teamB: "Ball Breakers",
    status: "Live",
    submatches: [
      {
        game: "Singles A",
        playerA: "Dev",
        playerB: "Manish",
        games: ["11–6", "7–11", "11–9"],
        winner: "Dev",
        status: "Completed"
      },
      {
        game: "Singles B",
        playerA: "Rohit",
        playerB: "Nikhil",
        games: ["7–11", "—", "—"],
        winner: null,
        status: "Ongoing"
      },
      {
        game: "Singles C",
        playerA: "Amit",
        playerB: "Suresh",
        games: ["—", "—", "—"],
        winner: null,
        status: "Upcoming"
      },
      {
        game: "Doubles",
        playerA: "Dev & Rohit",
        playerB: "Manish & Nikhil",
        games: ["—", "—", "—"],
        winner: null,
        status: "Upcoming"
      },
      {
        game: "Singles D",
        playerA: "Amit",
        playerB: "Nikhil",
        games: ["—", "—", "—"],
        winner: null,
        status: "Upcoming"
      },
      {
        game: "Singles E",
        playerA: "Rohit",
        playerB: "Suresh",
        games: ["—", "—", "—"],
        winner: null,
        status: "Upcoming"
      }
    ]
  },
  {
    id: "match-3",
    teamA: "Blade Runners",
    teamB: "Sancoale Smashers",
    status: "Upcoming",
    submatches: [
      {
        game: "Singles A",
        playerA: "Vikram",
        playerB: "Anil",
        games: ["Scheduled", "Scheduled", "Scheduled"],
        winner: null,
        status: "Upcoming"
      },
      {
        game: "Singles B",
        playerA: "Suresh",
        playerB: "Prakash",
        games: ["Scheduled", "Scheduled", "Scheduled"],
        winner: null,
        status: "Upcoming"
      },
      {
        game: "Singles C",
        playerA: "Ravi",
        playerB: "Kunal",
        games: ["Scheduled", "Scheduled", "Scheduled"],
        winner: null,
        status: "Upcoming"
      },
      {
        game: "Doubles",
        playerA: "Vikram & Suresh",
        playerB: "Anil & Prakash",
        games: ["Scheduled", "Scheduled", "Scheduled"],
        winner: null,
        status: "Upcoming"
      },
      {
        game: "Singles D",
        playerA: "Ravi",
        playerB: "Prakash",
        games: ["Scheduled", "Scheduled", "Scheduled"],
        winner: null,
        status: "Upcoming"
      },
      {
        game: "Singles E",
        playerA: "Suresh",
        playerB: "Kunal",
        games: ["Scheduled", "Scheduled", "Scheduled"],
        winner: null,
        status: "Upcoming"
      }
    ]
  },
  {
    id: "match-4",
    teamA: "Feni Flickers",
    teamB: "High Rankers",
    status: "Past",
    submatches: [
      {
        game: "Singles A",
        playerA: "Ajay",
        playerB: "Rahul",
        games: ["11–9", "7–11", "11–6"],
        winner: "Ajay",
        status: "Completed"
      },
      {
        game: "Singles B",
        playerA: "Naveen",
        playerB: "Deepak",
        games: ["8–11", "11–9", "9–11"],
        winner: "Deepak",
        status: "Completed"
      },
      {
        game: "Singles C",
        playerA: "Karan",
        playerB: "Sahil",
        games: ["11–7", "11–9", "—"],
        winner: "Karan",
        status: "Completed"
      },
      {
        game: "Doubles",
        playerA: "Ajay & Naveen",
        playerB: "Rahul & Deepak",
        games: ["11–7", "9–11", "11–8"],
        winner: "Ajay & Naveen",
        status: "Completed"
      },
      {
        game: "Singles D",
        playerA: "Ajay",
        playerB: "Deepak",
        games: ["9–11", "11–8", "8–11"],
        winner: "Deepak",
        status: "Completed"
      },
      {
        game: "Singles E",
        playerA: "Naveen",
        playerB: "Rahul",
        games: ["11–6", "11–9", "—"],
        winner: "Naveen",
        status: "Completed"
      }
    ]
  },
  {
    id: "match-5",
    teamA: "The Untouchables",
    teamB: "Stardust Smashaders",
    status: "Live",
    submatches: [
      {
        game: "Singles A",
        playerA: "Sameer",
        playerB: "Tarun",
        games: ["11–5", "9–11", "11–7"],
        winner: "Sameer",
        status: "Completed"
      },
      {
        game: "Singles B",
        playerA: "Aakash",
        playerB: "Varun",
        games: ["—", "—", "—"],
        winner: null,
        status: "Ongoing"
      },
      {
        game: "Singles C",
        playerA: "Neel",
        playerB: "Kunal",
        games: ["—", "—", "—"],
        winner: null,
        status: "Upcoming"
      },
      {
        game: "Doubles",
        playerA: "Sameer & Aakash",
        playerB: "Tarun & Varun",
        games: ["—", "—", "—"],
        winner: null,
        status: "Upcoming"
      },
      {
        game: "Singles D",
        playerA: "Neel",
        playerB: "Varun",
        games: ["—", "—", "—"],
        winner: null,
        status: "Upcoming"
      },
      {
        game: "Singles E",
        playerA: "Aakash",
        playerB: "Kunal",
        games: ["—", "—", "—"],
        winner: null,
        status: "Upcoming"
      }
    ]
  }
];

module.exports = matches;
