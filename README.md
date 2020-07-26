# _Mr. Roboger's Neighborhood Project_

#### _A program that takes a number from a user and returns a range of numbers from 0 to the user inputted number with a few fun exceptions, 7.26.20_

#### By _**Chloe Hellberg**_

## Description: Behavior Driven Development/Spec

* Spec 1: The program returns a range of numbers from 0 to the users inputted number
  * Input: "4"
  * Output: "0, 1, 2, 3, 4"

* Spec 2: The program returns "Won't you be my neighbor?" in place of the number 3 when it reads a "3" in the array
  * Input: "3"
  * Output: "0, 1, 2, Won't you be my neighbor"

* Spec 3: The program returns "Beep" "Boop" and "Won't you be my neighbor?" whenever it reads the number 1, 2, or 3.
  * Input: "13"
  * Output: "0, Beep!, Boop!, Won't you be my neighbor, 4, 5, 6, 7, 8, 9, 10, 11, 12, Won't you be my neighbor"

* Spec 4: The program returns "Won't you be my neighbor?" whenever it reads the number 3 in any order
  * Input: "13"
  * Output: "0, 1, 2, Won't you be my neighbor, 4, 5, 6, 7, 8, 9, 10, 11, 12, Won't you be my neighbor"

* Spec 5: The program changes each i variable to a string and then calls the indexOf on our new variable. indexOf will tell us if the number exists within the array and if it is > -1 (returns -1 if the item is not found) and will return something other than our "Beep!" "Boop!" or "Won't you be my neighbor?". We essentially need to break it down into a string so that it will read each portion of that string separately and tell us if a 3, 2, or 1 exists within our array.
  * Input "23"
  * Output: 0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Boop!", "Boop!", "Boop!", "Won't you be my neighbor?"

## Setup/Installation Requirements

* _Clone the application to your desktop_
* _Open index.html in your preferred web browser_
* _Answer the questions that appear on your screen_

## Known Bugs

_No known bugs at this time_

## Support and contact details

_If you run into issues, please email chloe.hellberg@gmail.com which questions and concerns. Feel free to contribute to this code._

## Technologies Used

_This application utilizes HTML, CSS, Bootstrap, Javascript and JQuery_

### License

*No licensing at this time*