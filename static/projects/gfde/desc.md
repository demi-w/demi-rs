This project was created in collaboration with Amit Deb and Bella Gonzalez.

Created in the span of a couple weeks, Go Fish: Definitive Edition was our final project for CS 370 (Problem Solving in a Team Environment). Being responsible for the internal game logic, graphics rendering, and some networking, there were some complex challenges to face in that time frame. Here's the architecture that I eventually devised:

Working off of my experience with 3 Years War, I buiilt a decoupled game logic and game rendering system. Additionally, much time was put into an animation queuing system that allowed for greater flexibility when writing game logic or networking. Completely separating logic and graphics allowed for no artifacts in networked play, and allowed all bot decision making to occur instantly and still have the resulting gameplay appear at a normal speed.

Additionally gameplay was deterministic using seeded RNG, allowing the only messages that needed to come over the network to be the number of bots/players, player names, RNG seed, and player actions.