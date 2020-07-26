$(document).ready(function() {
  $("#neighborhood").submit(function(event) {
    event.preventDefault();
    const number = parseInt($('input#number').val());

    
      let roboArray = [];
      for (let i = 0; i <= number; i +=1) {

        let iString = i.toString();

        
        if (iString.indexOf("3")  > -1) {
          roboArray.push("Won't you be my neighbor?");
        }
        else if (iString.indexOf("2") > -1) {
          roboArray.push("Boop!");
        }
        else if (iString.indexOf("1") > -1) {
          roboArray.push("Beep!");
        }
        else {
          roboArray.push(i);
        }

      };
 
      console.log(roboArray);
   
  });
});





// Sorry about the code below - I've saved it for my own personal use and wouldn't ever keep it in a real life project. I'd like to be able to go back and see my thought process through each spec.



// $(document).ready(function() {
//   $("#neighborhood").submit(function(event) {
//     event.preventDefault();
//     const number = parseInt($('input#number').val());

    
//       let roboArray = [];
//       for (let i = 0; i <= number; i +=1) {
        
//         if (i === 3 ) {
//           roboArray.push("Will you be my neighbor?");
//         }
//         else if (i === 2) {
//           roboArray.push("Boop!");
//         }
//         else if (i === 1) {
//           roboArray.push("Beep!");
//         }
//         else {
//           roboArray.push(i);
//         }

//         // roboArray.push(i);
//         // console.log(number);
//       };
 
//       console.log(roboArray);
   
//   });

// });








// $(document).ready(function() {
//   $("#neighborhood").submit(function(event) {
//     event.preventDefault();
//     const number = parseInt($('input#number').val());

    
//       let roboArray = [];
//       for (let i = 0; i <= number; i +=1) {
        
//         if (i === 3) {
//           roboArray.push("Will you be my neighbor?");
//         };
//         roboArray.push(i);
//         // console.log(number);
//       };
 
//       console.log(roboArray);
   
//   });

// });





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



