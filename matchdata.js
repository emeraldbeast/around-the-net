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
        playerA: "Ammar Abdul Azeez",
        playerB: "Veer Kanakia",
        games: ["5-11", "7-11", "-"],
        winner: "Veer Kanakia",
        status: "Completed"
      },
      {
        game: "Singles B",
        playerA: "Abhinav Padhi",
        playerB: "Aarush Goyal",
        games: ["6-11", "8-11", "-"],
        winner: "Aarush Goyal",
        status: "Completed"
      },
      {
        game: "Singles C",
        playerA: "Animesh Gaonkar",
        playerB: "Tanay Mody",
        games: ["11-1", "11-4", "-"],
        winner: "Animesh Gaonkar",
        status: "Completed"
      },
      {
        game: "Doubles",
        playerA: "Manas Kulkarni & Shrish Lohiya",
        playerB: "Vatsal Thakkar & Jatin Vasandani",
        games: ["11-5", "11-8", "-"],
        winner: "Manas Kulkarni & Shrish Lohiya",
        status: "Completed"
      },
      {
        game: "Singles D",
        playerA: "Abhinav Padhi",
        playerB: "Veer Kanakia",
        games: ["7-11", "11-9", "10-12"],
        winner: "Veer Kanakia",
        status: "Completed"
      },
      {
        game: "Singles E",
        playerA: "Ammar Abdul Azeez",
        playerB: "Aarush Goyal",
        games: ["11-7", "12-14", "4-11"],
        winner: "Aarush Goyal",
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
        playerA: "Atharv Mehta",
        playerB: "Vidit Bhansali",
        games: ["8-11", "11-4", "11-4"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: "Atharv Mehta",
        status: "Completed"//Change this to Ongoing, when game starts, then change to Completed when game over
      },
      {
        game: "Singles B",
        playerA: "Vaidik Srivastava",
        playerB: "Aditya Sahoo",
        games: ["11-7", "8-11", "11-5"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: "Vaidik Srivastava",
        status: "Completed"//Change this to Ongoing, when game starts, then change to Completed when game over
      },
      {
        game: "Singles C",
        playerA: "Divyam Gupta",
        playerB: "Prateek Panjikar",
        games: ["4-11", "10-12", "-"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: "Prateek Panjikar",
        status: "Completed"//Change this to Ongoing, when game starts, then change to Completed when game over
      },
      {
        game: "Doubles",
        playerA: "Saatvik Chaturvedi & Kanupriya Vyas",
        playerB: "Aayush Khetawat & Pranjal Gangwani",
        games: ["6-11", "12-14", "-"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: "Aayush Khetawat & Pranjal Gangwani",
        status: "Completed"//Change this to Ongoing, when game starts, then change to Completed when game over
      },
      {
        game: "Singles D",
        playerA: "Atharv Mehta",
        playerB: "Aditya Sahoo",
        games: ["10-12", "11-7", "11-7"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: "Atharv Mehta",
        status: "Completed"//Change this to Ongoing, when game starts, then change to Completed when game over
      },
      {
        game: "Singles E",
        playerA: "Vaidik Srivastava",
        playerB: "Vidit Bhansali",
        games: ["11-3", "13-11", "-"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: "Vaidik Srivastava",
        status: "Completed"//Change this to Ongoing, when game starts, then change to Completed when game over
      }
    ]
  },
  {
    id: "match-3",
    date:"13th January",
    teamA: "Sancoale Smashers",
    teamB: "High Rankers",
    score: "4-1",//Update this at last, when all scores are done
    status: "Past",//Change this to Live when match starts, and Past when match end
    submatches: [
      {
        game: "Singles A",
        playerA: "Nachiket Khandekar",
        playerB: "Tanmay Rao",
        games: ["12-10", "10-12", "11-7"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: "Nachiket Khandekar",
        status: "Completed"//Change this to Ongoing, when game starts, then change to Completed when game over
      },
      {
        game: "Singles B",
        playerA: "Shreyash Narayanan",
        playerB: "Aadinath Keshav",
        games: ["11-7", "11-9", "-"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: "Shreyash Narayanan",
        status: "Completed"//Change this to Ongoing, when game starts, then change to Completed when game over
      },
      {
        game: "Singles C",
        playerA: "Advait Sandeep Raut",
        playerB: "Hriday Sama",
        games: ["5-11", "7-11", "-"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: "Hriday Sama",
        status: "Completed"//Change this to Ongoing, when game starts, then change to Completed when game over
      },
      {
        game: "Doubles",
        playerA: "Arindam Bose & Harshwardhan Shah",
        playerB: "Khushi Mishra & Omkar Vanjari",
        games: ["11-8", "11-7", "-"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: "Arindam Bose & Harshwardhan Shah",
        status: "Completed"//Change this to Ongoing, when game starts, then change to Completed when game over
      },
      {
        game: "Singles D",
        playerA: "Shreyash Narayanan",
        playerB: "Tanmay Rao",
        games: ["-", "-", "-"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: null,
        status: "Did not play"//Change this to Ongoing, when game starts, then change to Completed when game over
      },
      {
        game: "Singles E",
        playerA: "Nachiket Khandekar",
        playerB: "Aadinath Keshav",
        games: ["-", "-", "-"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: null,
        status: "Did not play"//Change this to Ongoing, when game starts, then change to Completed when game over
      }
    ]
  },
  {
    id: "match-4",
    date:"15th January",
    teamA: "High Rankers",
    teamB: "Blade Runners",
    score: "4-3",//Update this at last, when all scores are done
    status: "Past",//Change this to Live when match starts, and Past when match end
    submatches: [
      {
        game: "Singles A",
        playerA: "Tanmay Rao",
        playerB: "Daksh Diwakar",
        games: ["11-4", "11-9", "-"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: "Tanmay Rao",
        status: "Completed"//Change this to Ongoing, when game starts, then change to Completed when game over
      },
      {
        game: "Singles B",
        playerA: "Khushi Mishra",
        playerB: "Anvesh Mishra",
        games: ["5-11", "6-11", "-"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: "Anvesh Mishra",
        status: "Completed"//Change this to Ongoing, when game starts, then change to Completed when game over
      },
      {
        game: "Singles C",
        playerA: "Hriday Sama",
        playerB: "Bhavya Sarda",
        games: ["8-11", "6-11", "-"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: "Bhavya Sarda",
        status: "Completed"//Change this to Ongoing, when game starts, then change to Completed when game over
      },
      {
        game: "Doubles",
        playerA: "Omkar Vanjari & Aadinath Keshav",
        playerB: "Aditya Ambrish & Vedaant Desai",
        games: ["11-9", "11-6", "-"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: "Omkar Vanjari & Aadinath Keshav",
        status: "Completed"//Change this to Ongoing, when game starts, then change to Completed when game over
      },
      {
        game: "Singles D",
        playerA: "Tanmay Rao",
        playerB: "Anvesh Mishra",
        games: ["2-11", "11-6", "5-11"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: "Anvesh Mishra",
        status: "Completed"//Change this to Ongoing, when game starts, then change to Completed when game over
      },
      {
        game: "Singles E",
        playerA: "Khushi Mishra",
        playerB: "Daksh Diwakar",
        games: ["11-8", "11-7", "-"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: "Khushi Mishra",
        status: "Completed"//Change this to Ongoing, when game starts, then change to Completed when game over
      }
    ]
  },
  {
    id: "match-5",
    date:"16th January",
    teamA: "Ball Breakers",
    teamB: "The Untouchables",
    score: "0-0",//Update this at last, when all scores are done
    status: "Live",//Change this to Live when match starts, and Past when match end
    submatches: [
      {
        game: "Singles A",
        playerA: "Vedang Chinhalli",
        playerB: "Vishnu",
        games: ["11-2", "11-7", "-"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: "Vedang Chinhalli",
        status: "Completed"//Change this to Ongoing, when game starts, then change to Completed when game over
      },
      {
        game: "Singles B",
        playerA: "Divy Jakhotiya",
        playerB: "Vrishank Valecha",
        games: ["9-11", "5-11", "-"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: "Vrishank Valecha",
        status: "Completed"//Change this to Ongoing, when game starts, then change to Completed when game over
      },
      {
        game: "Singles C",
        playerA: "Parth Shah",
        playerB: "Anant Saraf",
        games: ["1-11", "7-11", "-"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: "Anant Saraf",
        status: "Completed"//Change this to Ongoing, when game starts, then change to Completed when game over
      },
      {
        game: "Doubles",
        playerA: "Ishaan Deshpande & Aarush Nabhar",
        playerB: "Divyam Jain & Aarsh Jaiswal",
        games: ["5-11", "8-11", "-"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: null,
        status: "Ongoing"//Change this to Ongoing, when game starts, then change to Completed when game over
      },
      {
        game: "Singles D",
        playerA: "Vedang Chinhalli",
        playerB: "Vrishank Valecha",
        games: ["-", "-", "-"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: null,
        status: "Upcoming"//Change this to Ongoing, when game starts, then change to Completed when game over
      },
      {
        game: "Singles E",
        playerA: "Divy Jakhotiya",
        playerB: "Vishnu",
        games: ["-", "-", "-"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: null,
        status: "Upcoming"//Change this to Ongoing, when game starts, then change to Completed when game over
      }
    ]
  },
  {
    id: "match-6",
    date:"17th January",
    teamA: "Backhand Blitzers",
    teamB: "Sancoale Smashers",
    score: "0-0",//Update this at last, when all scores are done
    status: "Upcoming",//Change this to Live when match starts, and Past when match end
    submatches: [
      {
        game: "Singles A",
        playerA: "TBA",
        playerB: "TBA",
        games: ["-", "-", "-"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: null,
        status: "Upcoming"//Change this to Ongoing, when game starts, then change to Completed when game over
      },
      {
        game: "Singles B",
        playerA: "TBA",
        playerB: "TBA",
        games: ["-", "-", "-"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: null,
        status: "Upcoming"//Change this to Ongoing, when game starts, then change to Completed when game over
      },
      {
        game: "Singles C",
        playerA: "TBA",
        playerB: "TBA",
        games: ["-", "-", "-"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: null,
        status: "Upcoming"//Change this to Ongoing, when game starts, then change to Completed when game over
      },
      {
        game: "Doubles",
        playerA: "TBA",
        playerB: "TBA",
        games: ["-", "-", "-"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: null,
        status: "Upcoming"//Change this to Ongoing, when game starts, then change to Completed when game over
      },
      {
        game: "Singles D",
        playerA: "TBA",
        playerB: "TBA",
        games: ["-", "-", "-"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: null,
        status: "Upcoming"//Change this to Ongoing, when game starts, then change to Completed when game over
      },
      {
        game: "Singles E",
        playerA: "TBA",
        playerB: "TBA",
        games: ["-", "-", "-"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: null,
        status: "Upcoming"//Change this to Ongoing, when game starts, then change to Completed when game over
      }
    ]
  }

];

module.exports = matches;