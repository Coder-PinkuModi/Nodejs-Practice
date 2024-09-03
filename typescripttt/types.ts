type User = {
    name: string;
    age: number;
  };
  
  function isAdult(user: User): boolean {
    return user.age >= 18;
  }
  
  const justine: User = {
    name: 'Justine',
    age: 23,
  };
  
  const isJustineAnAdult: boolean = isAdult(justine);
  console.log("Run successfully") // console command to check the running of the typescript