# Terrible Cardboard Nodebots

Robots!  Made of cardboard!  Programmed with node.js! 

How'd they turn out?  Pretty terrible.

Featured in this [Daily Dot article](http://www.dailydot.com/technology/dadaconf-nimby-robots/)

![robots-fighting or dancing?](robots.gif)

## Build your own

### Gather these things

- Cardboard
- Zip ties
- Tape or something 
- An Arduino Uno
- A servo or something
- Something that cuts, like a knife or broken bottle maybe
- A computer that can run node.js (like a laptop)

### Do these things

0. Install node.js on your computer
0. Install the Arduino IDE
0. plug in the Arduino
0. Open the Arduino IDE
0. Go to examples -> Firmata -> Standard Firmata
0. Program your Arduino with Standard Firmata
0. Build your awesome robot
0. Make your servo and Arduino plug together like this

   ![servo plugged into pin 3](servo.png)
   
0. Install the one dependency

     $ npm install johnny-five

0. Run the robot robot

     $ node terrible-robot.js
