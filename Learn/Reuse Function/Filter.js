const students = [
    {
      name: 'Harry',
      score: 80,
    },
    {
      name: 'James',
      score: 88,
    },
    {
      name: 'Ron',
      score: 90,
    },
    {
      name: 'Bethy',
      score: 75,
    }
  ];
  
  const eligible = students.filter((a) => a.score >= 80)
  
  console.log(eligible);