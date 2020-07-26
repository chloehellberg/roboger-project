$(document).ready(function() {
  $("#neighborhood").submit(function(event) {
    event.preventDefault();
    const number = parseInt($('input#number').val());

    
      let roboArray = [];
      for (let i = 0; i <= number; i +=1) {
        
        if (i === 3) {
          roboArray.push("Will you be my neighbor?");
        };
        roboArray.push(i);
        // console.log(number);
      };
 
      console.log(roboArray);
   
  });

});




















      // $(document).ready(function() {
      //   $("#neighborhood").submit(function(event) {
      //     event.preventDefault();
      //     const number = parseInt($('input#number').val());
      
          
      //       let roboArray = [];
      //       for (let i = 0; i <= number; i +=1) {
      //         roboArray.push(i);
      //         console.log(number);
      //       };
       
        
         
      //   });
      
      // });


// $(document).ready(function() {
//   $("#neighborhood").submit(function(event) {
//     event.preventDefault();
//     const number = parseInt($('input#number').val());

//     function numberList(number) {
//       let roboArray = [];
//       for (let i = 0; i <= number; i +=1) {
//         roboArray.push(i);
//         console.log(number);
//       };
//       return roboArray;
//     }

//     const numArray = numberList(number);

//     console.log(numArray);
    
//   });
//     $("#output").text(numberList);
//     $("#answer").show(numberList);
// });



