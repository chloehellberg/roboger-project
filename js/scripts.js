$(document).ready(function() {
  $("#neighborhood").submit(function(event) {
    event.preventDefault();
    let number = parseInt($('input#number').val());

    let roboArray = [];

  function numberList() {
    let roboArray = [];
    for (let i = 0; i <= number; i += 1) {
      roboArray.push(i);
      console.log(number);
  };
  return numberList;
    
}

    $("#output").text(roboArray);
    $("#answer").show(roboArray);

  });
});



// function startThis() {
//   let numberList = [] {
//     for (let index = 0; index <= userNumber; index += 1) {
//       numberList.push(index);
//     };
//     return numberList;
//   }
// }













// $(document).ready(function() {
//   $("#neighborhood").submit(function(event) {
//     event.preventDefault();
//     let number = parseInt($('input#number').val());

//     let roboArray = [];

//     for (let i = 0; i < number.length; i++) {
//       roboArray.push(number[i]);
//     }
//     // roboArray.push(number);
//     console.log(roboArray);

//     $("#output").text(roboArray);
//     $("#answer").show(roboArray);

//   });
// });