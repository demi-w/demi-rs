3 Years War is a project I've created 3 times in different game engines, serving both as a 
good way to get introduced to a system and as an opportunity to iteratively improve on the same project.
This final iteration was an attempt to get as bare-bones as possible for a web app, with minimal glue between its
pure JS and WebGL canvas. In doing so, I signed myself up for the common folly of having to make a game engine myself.


# Features 

- Online Multiplayer and Basic Matchmaking (using socket.io)
- Replay System
- Both optimized via a deterministic logic engine seperated from rendering, taking cues from Rollback-based systems
- Various necesary game engine prefabs, including:
    - Menus
    - Buttons (yes, that bare-bones)
    - Animations
