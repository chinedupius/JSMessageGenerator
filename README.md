# Random Message Generator

This project is a simple, yet powerful tool for generating motivational messages. It combines different message components to create a personalized message that can inspire, motivate, or provide advice.

## Overview

The Random Message Generator selects parts from predefined lists to construct a message. These parts include a current state, a motivational phrase, and a piece of advice. The goal is to provide a unique and uplifting message each time the program runs.

## How It Works

The program consists of several key components:

### Random Index Generator

A function named `genRandIndex` generates a random integer. This integer is used to select a random element from an array.


### Message Components

An object named randomMessage stores arrays of message components. Each array represents a different part of the message:

currentState: Describes the current state or situation.
motivationalPhrase: Provides a motivational phrase.
advice: Offers a piece of advice.

### Message Assembly

The program iterates over the randomMessage object, selecting one random component from each array to form a complete message. These selected components are stored in an array named personalMessage.

### Displaying the Message

Finally, the formatMessage function joins the components of personalMessage into a single string, separated by new lines, and prints it to the console.

### Running the Program

To run the program, simply execute the script in a JavaScript environment. Each execution will generate and display a new, random motivational message.

### Conclusion

The Random Message Generator is a simple yet effective way to generate messages that can inspire and motivate. Feel free to customize the message components to fit your needs or to add more complexity to the message generation logic.

