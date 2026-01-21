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
    score: "1-4",//Update this at last, when all scores are done
    status: "Past",//Change this to Live when match starts, and Past when match end
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
        winner: "Divyam Jain & Aarsh Jaiswal",
        status: "Completed"//Change this to Ongoing, when game starts, then change to Completed when game over
      },
      {
        game: "Singles D",
        playerA: "Vedang Chinhalli",
        playerB: "Vrishank Valecha",
        games: ["-", "-", "-"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: null,
        status: "Did Not Play"//Change this to Ongoing, when game starts, then change to Completed when game over
      },
      {
        game: "Singles E",
        playerA: "Divy Jakhotiya",
        playerB: "Vishnu",
        games: ["-", "-", "-"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: null,
        status: "Did Not Play"//Change this to Ongoing, when game starts, then change to Completed when game over
      }
    ]
  },
  {
    id: "match-6",
    date:"17th January",
    teamA: "Sancoale Smashers",
    teamB: "Blade Runners",
    score: "4-2",//Update this at last, when all scores are done
    status: "Past",//Change this to Live when match starts, and Past when match end
    submatches: [
      {
        game: "Singles A",
        playerA: "Nachiket Khandekar",
        playerB: "Aditya Ambrish",
        games: ["11-3", "11-3", "-"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: "Nachiket Khandekar",
        status: "Completed"//Change this to Ongoing, when game starts, then change to Completed when game over
      },
      {
        game: "Singles B",
        playerA: "Shreyash Narayanan",
        playerB: "Anvesh Mishra",
        games: ["6-11", "5-11", "-"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: "Anvesh Mishra",
        status: "Completed"//Change this to Ongoing, when game starts, then change to Completed when game over
      },
      {
        game: "Singles C",
        playerA: "Aryan Gagare",
        playerB: "Vedaant Desai",
        games: ["5-11", "10-12", "-"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: "Vedaant Desai",
        status: "Completed"//Change this to Ongoing, when game starts, then change to Completed when game over
      },
      {
        game: "Doubles",
        playerA: "Arindam Bose & Harshwardhan Shah",
        playerB: "Daksh Diwakar & Bhavya Sarda",
        games: ["11-7", "11-3", "-"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: "Arindam Bose & Harshwardhan Shah",
        status: "Completed"//Change this to Ongoing, when game starts, then change to Completed when game over
      },
      {
        game: "Singles D",
        playerA: "Nachiket Khandekar",
        playerB: "Anvesh Mishra",
        games: ["11-9", "11-4", "-"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: "Nachiket Khandekar",
        status: "Completed"//Change this to Ongoing, when game starts, then change to Completed when game over
      },
      {
        game: "Singles E",
        playerA: "Shreyash Narayanan",
        playerB: "Aditya Ambrish",
        games: ["-", "-", "-"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: null,
        status: "Did Not Play"//Change this to Ongoing, when game starts, then change to Completed when game over
      }
    ]
  },
  {
    id: "match-7",
    date:"19th January",
    teamA: "High Rankers",
    teamB: "Backhand Blitzers",
    score: "5-0",//Update this at last, when all scores are done
    status: "Past",//Change this to Live when match starts, and Past when match end
    submatches: [
      {
        game: "Singles A",
        playerA: "Khushi Mishra",
        playerB: "Kanupriya Vyas",
        games: ["11-7", "11-7", "-"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: "Khushi Mishra",
        status: "Completed"//Change this to Ongoing, when game starts, then change to Completed when game over
      },
      {
        game: "Singles B",
        playerA: "Tanmay Rao",
        playerB: "Atharv Mehta",
        games: ["8-11", "11-4", "11-9"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: "Tanmay Rao",
        status: "Completed"//Change this to Ongoing, when game starts, then change to Completed when game over
      },
      {
        game: "Singles C",
        playerA: "Hriday Sama",
        playerB: "Divyam Gupta",
        games: ["11-8", "8-11", "11-6"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: "Hriday Sama",
        status: "Completed"//Change this to Ongoing, when game starts, then change to Completed when game over
      },
      {
        game: "Doubles",
        playerA: "Aadinath Keshav & Omkar Vanjari",
        playerB: "Harshvardan Mittal & Dhananjay Bhattacharya",
        games: ["11-9", "11-8", "-"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: "Aadinath Keshav & Omkar Vanjari",
        status: "Completed"//Change this to Ongoing, when game starts, then change to Completed when game over
      },
      {
        game: "Singles D",
        playerA: "Khushi Mishra",
        playerB: "Atharv Mehta",
        games: ["-", "-", "-"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: null,
        status: "Did Not Play"//Change this to Ongoing, when game starts, then change to Completed when game over
      },
      {
        game: "Singles E",
        playerA: "Tanmay Rao",
        playerB: "Kanupriya Vyas",
        games: ["-", "-", "-"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: null,
        status: "Did Not Play"//Change this to Ongoing, when game starts, then change to Completed when game over
      }
    ]
  },
  {
    id: "match-8",
    date:"20th January",
    teamA: "Pong Stars",
    teamB: "Stardust Smashaders",
    score: "4-2",//Update this at last, when all scores are done
    status: "Past",//Change this to Live when match starts, and Past when match end
    submatches: [
      {
        game: "Singles A",
        playerA: "Mihir Kulkarni",
        playerB: "Ammar Abdul Azeez",
        games: ["9-11", "11-5", "6-11"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: "Ammar Abdul Azeez",
        status: "Completed"//Change this to Ongoing, when game starts, then change to Completed when game over
      },
      {
        game: "Singles B",
        playerA: "Arya Jain",
        playerB: "Abhinav Padhi",
        games: ["11-9", "11-8", "-"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: "Arya Jain",
        status: "Completed"//Change this to Ongoing, when game starts, then change to Completed when game over
      },
      {
        game: "Singles C",
        playerA: "Arnav Namdeo",
        playerB: "Aaditya Lahori",
        games: ["4-11", "0-11", "-"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: "Aaditya Lahori",
        status: "Completed"//Change this to Ongoing, when game starts, then change to Completed when game over
      },
      {
        game: "Doubles",
        playerA: "Pranav Narayan & Vedang Krishna",
        playerB: "Shrish Lohiya & Manas Kulkarni",
        games: ["13-11", "12-10", "-"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: "Pranav Narayan & Vedang Krishna",
        status: "Completed"//Change this to Ongoing, when game starts, then change to Completed when game over
      },
      {
        game: "Singles D",
        playerA: "Mihir Kulkarni",
        playerB: "Abhinav Padhi",
        games: ["11-6", "11-7", "-"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: "Mihir Kulkarni",
        status: "Completed"//Change this to Ongoing, when game starts, then change to Completed when game over
      },
      {
        game: "Singles E",
        playerA: "Arya Jain",
        playerB: "Ammar Abdul Azeez",
        games: ["-", "-", "-"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: null,
        status: "Did Not Play"//Change this to Ongoing, when game starts, then change to Completed when game over
      }
    ]
  },
  {
    id: "match-9",
    date:"21st January",
    teamA: "Feni Flickers",
    teamB: "Ball Breakers",
    score: "0-0",//Update this at last, when all scores are done
    status: "Live",//Change this to Live when match starts, and Past when match end
    submatches: [
      {
        game: "Singles A",
        playerA: "Aarush Goyal",
        playerB: "Rishabh Jain",
        games: ["11-1", "11-3", "-"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: "Aarush Goyal",
        status: "Completed"//Change this to Ongoing, when game starts, then change to Completed when game over
      },
      {
        game: "Singles B",
        playerA: "Rishabh Sahay",
        playerB: "Vedang Chinhalli",
        games: ["4-11", "2-11", "-"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: "Vedang Chinhalli",
        status: "Completed"//Change this to Ongoing, when game starts, then change to Completed when game over
      },
      {
        game: "Singles C",
        playerA: "Vatsal Thakkar",
        playerB: "Ishan Deshpande",
        games: ["11-5", "-", "-"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: null,
        status: "Ongoing"//Change this to Ongoing, when game starts, then change to Completed when game over
      },
      {
        game: "Doubles",
        playerA: "Veer Kanakia & Jatin Vasandani",
        playerB: "Divy Jakhotiya & Aarush Nabhar",
        games: ["-", "-", "-"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: null,
        status: "Upcoming"//Change this to Ongoing, when game starts, then change to Completed when game over
      },
      {
        game: "Singles D",
        playerA: "Aarush Goyal",
        playerB: "Vedang Chinhalli",
        games: ["-", "-", "-"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: null,
        status: "Upcoming"//Change this to Ongoing, when game starts, then change to Completed when game over
      },
      {
        game: "Singles E",
        playerA: "Rishabh Sahay",
        playerB: "Rishabh Jain",
        games: ["-", "-", "-"],//When Match starts, replace Scheduled with - - -, and then keep adding scores
        winner: null,
        status: "Upcoming"//Change this to Ongoing, when game starts, then change to Completed when game over
      }
    ]
  }

];

module.exports = matches;