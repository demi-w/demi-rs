As much as it pains me to admit it (and as much as I've forced it on friends and family), few care to know the theoretical details of this research. As such, I've split this project description into two components: A description of the technical difficulty involved in building solutions to this research, and the underlying question it answers. These summaries are admittedly too truncated, but I'm working off of the reasonable assumption that no one wants to read 30 pages of information about this.

# The Difficulty of the Work

The program I've created can build a DFA to tell you whether or not a puzzle is solvable. To do this (in extreme summary), it finds out whether or not billions of boards are solvable. Doing this efficiently has been the name of the game, and it's proven to be a super novel and interesting optimization problem. The simplest solution to this is using BFS, which has horrific performance. Naive BFS on **one** of the longer boards takes so much RAM the process eventually crashes (with 16GB of RAM), and it takes an hour to get there. As a consequence, many orders of magnitude worth of memory/time optimization were required.

Current performance stats:
- 98% of boards solved via linear-time method (completely skipping any BFS)
- average of ***1.16 MICROSECONDS*** taken to solve a board (time taken to a solve a board also independent of board length)
- Solved 310,094,073 boards in ~6 minutes
- Never exceeded 40mb of RAM in the process

Solutions I've builtto solve this challenge (all in Rust):

1. Brute force BFS starting from a particular board
    * A multithreaded implementation of the same
2. Brute force BFS that consults a global hashmap to see if a board has ever been encountered before, and using those results to prematurely stop BFS.
3. Generating the set of all possible boards of a certain length by taking the set of solved boards and working backwards (Dr. Ravikumar's idea)
4. Improvement on #2 that consults a massively smaller version of the hashmap by utilizing all equivalences already found by the partial DFA
5. Improvement on #4 that also takes advantages of relations between states after a single move (this finds an answer to 90% of solvable boards in linear-time)
6. Improvement on #5 that no longer even uses BFS, instead exclusively working backwards from a truncated version of all solved boards and utilizing rule-based equivalences between states to find all accepting boards for each state. This means impossible boards are never even given any computation time.

# An Explanation of the Theory (Intended to be acessible to all audiences)
To understand this project, it helps to know DFAs. A DFA can be thought of as a filter that lets in certain kinds of text and does not allow others. It has many limitations, but when something can be written as a DFA, any action related to it is massively sped up. 

As an example, a DFA can be made that only lets through (accepts) a string if it contains exactly one 1.

Secondly, we are working with string rewriting systems (often formally referred to as Semi-Thue systems). An easy example of this actually comes in the form of a board game, Peg-solitaire. In Peg-solitaire, your goal is to make sure that there is only one peg remaining on the pegboard. To do this you have two options:

<div class="flex flex-wrap">
<img src="/projects/dfaresearch/diagrams/110->001.svg" class="h-48">
<img src="/projects/dfaresearch/diagrams/011->100.svg" class="h-48">
</div>

Whenever you see two pegs next to each other and an empty space beside, you can "jump" over the middle peg and swap the peg on the extremities. When you do that, you can get rid of the middle peg. These rules can be written as 110 -> 001 & 011 -> 100, where 1 represents a peg and 0 represents an empty spot.

An excellent article by my professor and advisor on this project, Dr. Ravikumar, proves that a DFA can be made that filters only the strings that can become a winning peg-solitaire board.

Automatically creating something that builds that DFA is quite difficult, and building such a DFA for any goal and set of string rewriting rules is the focus of my research. 

Here's the cool part: any program can be expressed as a series of string rewriting rules. Automatic creation of these DFAs potentially serve as an extremely powerful source of optimization. Currently, performance requirements limit the scope of what programs can actually take advantage of this, and I do not want to give off the impression that this works for any program. Currently it works for a select group of "toy" programs but the idea that you can do it at all is extremely interesting and worth studying further.