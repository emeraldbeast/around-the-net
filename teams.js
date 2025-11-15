const teams = [
  {
    id: "backhand-blitzers",
    name: "Backhand Blitzers",
    logo: "/logos/bac-bli.png",
    owner: "Dhananjay Bhattacharya",
    captain: "Vaidik Shrivastava", 
    players: [
      {name: "Vaidik Shrivastava", price: 2400000},
      {name: "Atharv Mehta", price: 1000000},
      {name: "Kanupriya Vyas", price: 400000},
      {name: "Divyam Gupta", price: 100000},
      {name: "Saatvik Chaturvedi", price: 100000},
      {name: "Pearl", price: 25000},
      {name: "Anirudh Kumar", price: 25000}
    ]
    // Add players in this format, makes it easier for setting up an auction stats page
    // Add the captain name first, then add all the other players name
  },
  {
    id: "stardust-smashaders",
    name: "Stardust Smashaders",
    logo: "/logos/sta-sma.png",
    owner: "Yatin Rai",
    captain: "Abhinav Padhi",
    players: [
      {name: "Abhinav Padhi", price: 1250000},
      {name:"Ammar Abdul Azeez",price:750000},
      {name:"Animesh Gaonkar",price:500000},
      {name:"Aaditya Lahori",price:425000},
      {name: "Shrish Lohiya", price: 625000},
      {name: "Manas Kulkarni", price: 400000},
      {name: "Yash Phansalkar", price: 50000}
    ]
    // Add players in this format, makes it easier for setting up an auction stats page
    // Add the captain name first, then add all the other players name
  },
  {
    id: "the-batmen",
    name: "The Batmen",
    logo: "/logos/the-bat.png",
    owner: "Rohit Raj",
    captain: "Vidit Bhansali", 
    players: [
      {name: "Vidit Bhansali", price: 1350000},
      {name: "Aditya Sahoo", price: 1600000},
      {name: "Aayush Khetawat",price:525000},
      {name: "Pranjal Gangwani",price:125000},
      {name: "Divyansh Gupta", price: 200000},
      {name: "Ridham Gala", price: 100000},
      {name: "Samar Suraj Nayak", price: 100000}
    ]
    // Add players in this format, makes it easier for setting up an auction stats page
    // Add the captain name first, then add all the other players name
  },
  {
    id: "the-untouchables",
    name: "The Untouchables",
    logo: "/logos/the-unt.png",
    owner: "Akshat Pandey",
    captain: "Aarsh Jaiswal",
    players: [
      {name: "Aarsh Jaiswal", price: 2150000},
      {name: "Vishnu",price:500000},
      {name: "Anant Saraf",price:375000},
      {name: "Vrishank Valecha", price: 475000},
      {name: "Divyam Jain", price: 175000},
      {name: "Sidhant Bhutani", price: 200000},
      {name: "Tanmay Srivastava", price: 100000},
      {name: "Aditya Dey", price: 25000}
    ]
    // Add players in this format, makes it easier for setting up an auction stats page
    // Add the captain name first, then add all the other players name
  },
  {
    id: "pong-stars",
    name: "Pong Stars",
    logo: "/logos/pon-sta.png",
    owner: "Ayush Shukla",
    captain: "Mihir Sagar Kulkarni", 
    players: [
      {name: "Mihir Sagar Kulkarni", price: 2100000},
      {name: "Pranav Narayanan", price: 850000},
      {name: "Arya Jain", price: 325000},
      {name: "Vedang Krishna", price: 400000},
      {name: "Prasham Bhayani", price: 275000},
      {name: "Arnav Namdeo", price: 25000},
      {name: "Japjeet", price: 25000}
    ]
    // Add players in this format, makes it easier for setting up an auction stats page
    // Add the captain name first, then add all the other players name
  },
  {
    id: "ball-breakers",
    name: "Ball Breakers",
    logo: "/logos/bal-bre.png",
    owner: "Priyanshu Jain",
    captain: "Vedang Chinhalli",
    players: [
      {name: "Vedang Chinhalli", price: 2600000},
      {name: "Divy Jakothiya", price: 475000},
      {name: "Aarush Nabhar",price:500000},
      {name: "Ishaan Deshpande", price: 200000},
      {name: "Rishabh Jain", price: 75000},
      {name: "Owais Ahmed", price: 125000},
      {name: "Parth Shah", price: 25000}
    ]
    // Add players in this format, makes it easier for setting up an auction stats page
    // Add the captain name first, then add all the other players name
  },
  {
    id: "high-rankers",
    name: "High Rankers",
    logo: "/logos/hig-ran.png",
    owner: "Arihant Bhandari",
    captain: "Tanmay Rao", 
    players: [
      {name: "Tanmay Rao", price: 1950000},
      {name: "Khushi Mishra",price:850000},
      {name: "Aadinath Keshav", price: 300000},
      {name: "Omkar Vanjhari", price: 425000},
      {name: "Hriday Sama", price: 400000},
      {name: "Shaurya Mundra", price: 50000},
      {name: "Rithwik Arun", price: 25000}
    ]
    // Add players in this format, makes it easier for setting up an auction stats page
    // Add the captain name first, then add all the other players name
  },
  {
    id: "sancoale-smashers",
    name: "Sancoale Smashers",
    logo: "/logos/san-sma.png",
    owner: "Vismay Vinayak Shanbhag",
    captain: "Nachiket Khandekar",
    players: [
      {name: "Nachiket Khandekar", price: 1500000},
      {name: "Shreyas Narayanan", price: 1000000},
      {name: "Arindam Bose",price:950000},
      {name: "Advait Sandeep Raut", price: 100000},
      {name: "Koushal Agarwal", price: 50000},
      {name: "Ashwin Gupta", price: 50000},
      {name: "Dhruv Bangad", price: 50000},
      {name: "Aryan Gagare", price: 125000},
      {name: "Harshwardhan Shah", price: 50000},
      {name: "Chaitanya Joshi", price: 50000}
    ]
    // Add players in this format, makes it easier for setting up an auction stats page
    // Add the captain name first, then add all the other players name
  },
  {
    id: "blade-runners",
    name: "Blade Runners",
    logo: "/logos/bla-run.png",
    owner: "Albin Abraham",
    captain: "Anvesh Mishra",
    players: [
      {name: "Anvesh Mishra", price: 2450000},
      {name: "Daksh Diwakar", price: 650000},
      {name: "Vedaant Desai",price:350000},
      {name: "Bhavya Sarda", price: 300000},
      {name: "Aditya Ambrish", price: 100000},
      {name: "Ratnanshu Ostwal", price: 50000},
      {name: "Sankeert Madyalkar", price: 50000},
      {name: "Akarsh", price: 25000}
    ]
    // Add players in this format, makes it easier for setting up an auction stats page
    // Add the captain name first, then add all the other players name
  },
  {
    id: "feni-flickers",
    name: "Feni Flickers",
    logo: "/logos/fen-fli.png",
    owner: "Advay Malik",
    captain: "Veer Kanakia",
    players: [
      {name: "Veer Kanakia", price: 2150000},
      {name: "Aarush Goyal", price: 1450000},
      {name: "Vatsal Thakkar", price: 200000},
      {name: "Tanay Mody", price: 50000},
      {name: "Jatin Vasandani", price: 50000},
      {name: "Rishabh Sahay", price: 50000},
      {name: "Bhavik Jain", price: 50000}
    ]
    // Add players in this format, makes it easier for setting up an auction stats page
    // Add the captain name first, then add all the other players name
  }
];

module.exports = teams;