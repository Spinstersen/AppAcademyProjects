// function limitedRepeat() {
//     let count = 0;
//     const intervalId = setInterval(() => {
//       console.log('hi for now');
//       count++;
//       console.log(`intervalId: ${intervalId}, count: ${count}`);
//       if (count === 5) {
//         clearInterval(intervalId);
//       }
//     }, 1000);
//   }




  function limitedRepeat1() {
    // ADD CODE HERE
    const interval = setInterval(()=>{
      console.log('hi for now');
    },1000);
    setTimeout(()=>{
      clearInterval(interval)},5000);
  }

//   const test1 = limitedRepeat();
  const test2 = limitedRepeat1();
