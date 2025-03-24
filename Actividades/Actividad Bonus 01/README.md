# IIC2026 - Actividad Bonus #1
- [IIC2026 - Actividad Bonus #1](#iic2026---actividad-bonus-1)
  - [Description](#description)
  - [Features](#features)
  - [How It Works](#how-it-works)
  - [How to Run](#how-to-run)
  - [What I Did and How I Did It](#what-i-did-and-how-i-did-it)
    - [Design](#design)
    - [Interactive Feature](#interactive-feature)
    - [Help from AI](#help-from-ai)
    - [Challenges](#challenges)
    - [What Doesn't Work as Intended](#what-doesnt-work-as-intended)
    - [Future Improvements](#future-improvements)

## Description

This project is part of the bonus activity for the Visualización de Información (IIC2026) course. The goal is to create an interactive SVG design using the DOM, events, and scalable vector graphics (SVG). The design recreates a cat face with interactive features, including mouse movement and button actions.

## Features

1. **Cat Design**:
   - The cat face is created using geometric shapes:
     - **Circles**: Used for the eyes.
     - **Triangles**: Used for the ears and nose.
     - **Rectangle**: Used for the ribbon's center.

2. **Mouse Movement Interaction**:
   - The cat's pupils follow the mouse cursor as it moves across the screen.

3. **Button Action**:
   - A button changes the color of the cat's ribbon when clicked.

## How It Works

- **Mouse Movement**:
  - The `.eye-retina` elements (pupils) dynamically adjust their position based on the mouse's location using JavaScript. This creates the effect of the cat's eyes following the cursor.

- **Button Interaction**:
  - Clicking the button triggers a JavaScript function that randomly changes the color of the ribbon's middle and sides. Note: The ribbon middle, and sides change color independently. This is **NOT** a bug, but rather a neat feature.

## How to Run

1. Open the `index.html` file in a browser.
2. Move your mouse around the screen to see the cat's pupils follow the cursor.
3. Click the button to change the ribbon's color.

## What I Did and How I Did It

### Design
I created a cat face using geometric shapes, including circles for the eyes, triangles for the ears and nose, and a rectangle for the ribbon's center. These shapes were already made in the handout code. The job was to move them to the correct positions, and add shapes the were missing (e.g. right side of the ribbon).
Design, and positioning were made by trial and error, and I could probably have a more dynamic approach for better visuals. However time was not on my side on this task.

### Interactive Feature
With the help from AI, I implemented mouse movement interaction to make the cat's pupils follow the cursor using JavaScript.
Furthermore, I added a button that changes the color of the cat's ribbon when clicked. Note that the colors change independently of each other.

### Help from AI
  - I used ChatGPT to assist with:
    - Debugging CSS positioning issues for the cat's elements (e.g., nose and ribbon).
    - Writing JavaScript for the mouse movement and button click interactions.
    - Structuring this `README.md` file and ensuring it meets the activity requirements.

### Challenges
  - The `.nose` element initially disappeared when positioned over the `.face`. The fix was in the `index.html` file, where the `div` for the nose was a child of the `.eye`, and not the `.face`. 
  - Some minor alignment issues with the ribbon sides remain, but they do not significantly affect the overall design and gives the cat its special charm.

### What Doesn't Work as Intended
  - The ribbon's sides overlap incorrectly. This could be improved with additional CSS adjustments.
  - The eyes are sometimes cross-eyed when following the cursos. There is probably an easy fix, however I did not take the tiem to try and fix this.

### Future Improvements
  - The ribbon button under the cat could use a makeover, and the design could be nicer. 