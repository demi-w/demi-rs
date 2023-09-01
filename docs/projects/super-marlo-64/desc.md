Written in two weeks as my final project for Computer Graphics, the accurately named Spring Simulation simulates a series of springs on Mario's face. It's based on a misremembering of [the original intro to super Mario 64](https://www.youtube.com/watch?v=hk7egiraIqA). I believed that you were able to move any vertex on Mario's face, and it would bounce back and forth as if his whole face was made of Jello. The final product uses three forces to simulate these physics on Mario's face when you move it. There are three forces acting on every vertex: 

1. Hooke's Law: Every edge in Mario's face is treated as a spring and its desired length is the length that the edge initially starts at. 
2. Returning to Origin: There's a force acting on each edge to return it to its initial position in space. Without it Mario's face would slowly drift away. 
3. Drag: As simple as it gets. This just slowly reduces the velocity of any object.

Additionally, in order to fulfill the requirements for the final project, a vertex shader was added. Each vertex becomes more green the more its springs want to expand and more red the more its springs want to contract.

Demos should be available as a more integrated part of the site soon! In the meantime, you can check out the project [here](http://marlo.demi.rs).