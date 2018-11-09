Complete a single page React application that helps a hacker hostel manage the meals schedules for the hackers currently staying there. Model the implementation after the images below.

Certain core React functionalities have already been implemented. Complete the React application in order to pass all the unit tests.

 

Demo

Link to an animated GIF: https://s3.amazonaws.com/istreet-assets/ChBrx4MzkIPp3fO8zbHmLg/hackerh.gif
Scroll sideways below to explore the screenshots. Clicking each screenshot opens it in a new window.
Initial state of the application
Valid entry.
Invalid Entry (invalid stay duration).
One invalid entry and one valid entry.
 

Specifications

The manager of the hostel enters in the hackers' names (one hacker per line) in the text box on the left, and then enters the date range for each respective hacker's stay on a new line in the text box on the right.
Each stay is in the format YYYY-MM-DD to YYYY-MM-DD.
The hacker name typed on the ith line of the left text box corresponds to the duration on the ith line of the right text box, so the total number of lines in the text boxes will always be equal.
During their stay, each hacker gets three meals per day: breakfast, lunch, and dinner. After typing the names of the hackers and valid stay durations, the application generates a meals schedule on clicking the button in the following format:
Breakfast for name on date.
Lunch for name on date.
Dinner for name on date.
If there are multiple hackers, then the results must be ordered first by date and then by meal.
If the user enters an invalid stay duration, the application renders menus for the hackers with valid dates and an error message for hackers with invalid dates.
An error message for a hacker must read: Error! No menu generated for insert_hacker_name
Component flow diagram of the application is as follows:


 

Framework Specific Instructions
The project uses React 16 by default. Changing the React version may interfere with tests and is strictly discouraged. You may refer to the React 16 docs here.
The project uses create-react-app and react-scripts to automate serving and testing of the application.
The project uses enzyme as a testing framework. Please refrain from changing the test framework or the tests themselves.
The project uses React Material UI as a design framework. API docs are available here and can be used as a reference.