due to the highly technical (and for many, boring) details of this project, this project description will be split up into two categories: a non-technical and a technical explanation.

# non-technical
a regular expression can be thought of as a filter that lets in certain kinds of text and does not allow others. it has many limitations, but when something can be written as a regular expression, performance is extremely quick.

for example, a regular expression can be made that only accepts a string if it contains exactly one 1.

secondly, we are working with string rewriting systems (often formally referred to as Semi-Thue systems). An easy example of this actually comes in the form of a board game, Peg-solitaire. In Peg-solitaire, your goal is to make sure that there is only one peg remaining on the pegboard.

![Depiction showing that 110 can become 001](projects/dfaresearch/diagrams/110->001.svg "title")
*Mapping pegs to ones and zeroes*

an excellent article by my professor and advisor on this project, Dr Ravikumar, proves that a regular expression can be made that filters only the strings that can be a winning peg-solitaire board.

automatically creating something that builds that regular expression is quite difficult, and it is the focus of my research. 

here's the cool part: any program can be expressed as a series of string rewriting rules. automatic creation of similar regular expressions serves as a potentially extremely powerful source of optimization. currently performance requirements limit the scope of what programs can actually take advantage of this, and I do not want to give off the impression that this would work for any program. currently it would work for a very small selective group of toy programs but the idea that you can do it at all is extremely interesting and worth studying further.

# technical