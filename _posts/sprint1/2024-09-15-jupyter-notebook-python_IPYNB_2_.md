---
layout: post
title: Playing with Jupyter Notebooks and Python
description: GitHub pages was built with Python and Jupyter Notebooks in mind.  This post is to verify tools by using Python.
categories: ['Python']
permalink: /jupyter/notebook/python
menu: nav/tools_setup.html
toc: True
comments: True
---

## Python and Jupyter Notebooks
<mark>Python</mark> is a highly versatile and widely-used programming language, renowned for its readability and broad library support. 

<mark>Jupyter Notebooks</mark> is an interactive computing environment that enables users to create and share documents containing live code, equations, visualizations, and narrative text. 

Together, Python and Jupyter Notebooks, form a powerful toolkit for data analysis, scientific research, and educational purposes.

We will <mark>play with Python and Jupyter Notebooks</mark> to get a feel for both.  This is a great interactive way to start development.

### Emoji Print
It is easy to add an emoji to a message in code.  However, using the emoji library or other libraries often requires you to install code on your machine.  Before using a library, that is not part of Python distribution, you must install with `pip`

```bash
# terminal command to install library
$ pip install emoji
Collecting emoji
  Downloading emoji-2.5.1.tar.gz (356 kB)
...
Successfully installed emoji-2.5.1
```


```python
#!pip install emoji
from emoji import emojize 
print(emojize(":thumbs_up: Python is awesome! :grinning_face:"))
```

    👍 Python is awesome! 😀


### Extracting Data 
Web sites become a lot more interesting when you are working with data, not trying to create it.  Here is some code using a library called newspaper, this extracts a couple of writeups from the CNN Entertainment site.
- Learn more on [newspaper3k](https://newspaper.readthedocs.io/en/latest/)
- Learn about library for [wikipedia](https://pypi.org/project/wikipedia/)


```python
#!pip install newspaper3k lxml_html_clean
from newspaper import Article
from IPython.display import display, Markdown


urls = ["http://cnn.com/2023/03/29/entertainment/the-mandalorian-episode-5-recap/index.html", 
        "https://www.cnn.com/2023/06/09/entertainment/jurassic-park-anniversary/index.html"]

for url in urls:
    article = Article(url)
    article.download()
    article.parse()
    # print(article.title)
    # Jupyter Notebook Display
    display(Markdown(article.title)) # Jupyter display only
    display(Markdown(article.text)) # Jupyter display only
    print("\n")

```


‘The Mandalorian’ finally comes into focus, while giving out a ‘Rebels’ yell



Editor’s Note: The following contains spoilers about the fifth episode of “The Mandalorian,” Season 3, “The Pirate.”

CNN —

After what can at best be described as a somewhat disjointed third season thus far, the fifth episode of “The Mandalorian” began to bring those pieces together and into focus, while continuing to draw upon the “Star Wars” animated series that preceded it, including another cameo by a character from the rightfully lauded “Rebels.”

Subtitled “The Pirate,” the episode presented further evidence of the dysfunctional nature of the New Republic, unable or unwilling to defend a faraway planet from an invading band of pirates. (Lucasfilm being a unit of Disney, the marauders had a certain “Yo ho, yo ho” vibe to them.)

The siege also played into Mandalorian politics, and the efforts of Bo-Katan (Katee Sackhoff) to reclaim her heritage and potentially reunite her people’s various tribes, after leading them, along with Din Djarin (voiced by Pedro Pascal), to the rescue of his pal Greef Karga (Carl Weathers) and the planet’s residents.

Still, the most pleasing moment for longtime “Star Wars” fans was likely what amounted to a throwaway scene, introducing a live-action version of the hulking alien Zeb, a character from the animated “Star Wars Rebels,” which concluded in 2018. “The Mandalorian” has drawn heavily from those properties, which were overseen by one of its executive producers, Dave Filoni. (In another nice touch, Steve Blum again provided the voice of the character, and Zeb looked a whole lot better than the pirate leader.)

Finally, the episode closed with evidence that the evil Moff Gideon (played by Giancarlo Esposito previously) had seemingly been freed from the prison ship that was transporting him to stand trial, reviving that potential threat.

Having resolved the fate of Grogu, a.k.a. Baby Yoda, during the first two seasons, “The Mandalorian” has thus moved on to fill in narrative gaps about an under-explored chapter in “Star Wars” history – namely, the factors that resulted in the fall of the New Republic and the rise of the First Order, the plot line featured in the most recent trilogy that began with “The Force Awakens.”

“This isn’t a rebellion anymore,” a bureaucrat (played by Tim Meadows) says about what happens outside of the New Republic’s jurisdiction, conveying an indifference to the fate of the planet Nevarro overtly articulated later when it was observed that the governing body in Coruscant “doesn’t care.”

Executive producers Jon Favreau and Filoni have taken their time in reaching this point, juggling these various issues in somewhat ungainly fashion through the first half of the season. That perhaps reflects the transition of the show to an emphasis on the macro instead of the micro, while still finding time to detour for the occasional “Rebels” yell.


    
    



‘Jurassic Park’ still has bite at 30 years old, and here’s why



CNN —

It’s been 30 years since Steven Spielberg’s dinosaurs stampeded across the screen in the first “Jurassic Park,” but it feels more recent.

I was 12 in June of 1993 and vividly remember watching with glee when the Tyrannosaurus Rex, with its teeny arms and perpetual scowl, blew the walls of the bathroom down like a big bad wolf and promptly ate the lawyer character (played to hilarious effect by Martin Ferrero). Part of this, surely, had to do with the fact that I was a mouthy pre-teen, and many adults in my sphere at the time opined that I “would make a great lawyer” just like my father – a fate I abhorred.

Admittedly, I was the exact target audience for this creature feature, and even though I was already somewhat of a self-taught critic (note the aforementioned mouthiness), I was awed by what I saw that summer three decades ago, and my impressions of “Jurassic Park” remain to this day.

Joseph Mazzello in "Jurassic Park." Amblin/Universal/Kobal/Shutterstock

Part of that lasting impact, of course, has to do with the still-groundbreaking effects in the movie, which surprisingly hold up, and on a fairly hi-tech 72-inch TV screen to boot. While the first dino money shot – of the plant-eating brachiosaurus – might look just a tad soupy in 2023, it still looks considerably better than more contemporary fare, and the ensuing imagery of the more predatory beasts (like T-rex and especially those raptors) remains top-notch. The computer-generated imagery in the movie is essentially credited with marking the end of stop-motion animation as the go-to effects option for films such as these, notably used in everything that came before, from 1933’s “King Kong” to 1981’s “Clash of the Titans.” The animatronics are something to behold as well, particularly the ailing triceratops responsible for that “one big pile of s—,” one of many priceless quips uttered by Ian Malcolm (Jeff Goldblum).

The appeal of “Jurassic,” based on Michael Crichton’s acclaimed novel, is also largely due to the film’s suspenseful and pared-down pacing, which of course can be linked to Spielberg, who learned a thing or two about keeping his cards close to his chest with “Jaws” – the great white mother of all creature features that famously showed startlingly little of the big fish before the climax.

Another “Jaws” connection is prolific film composer John Williams, the Spielberg collaborator who created a majestic score for “Jurassic Park” that is still synonymous with an air of discovery, one that can easily be hummed when looking upon any great view or upon entering a new and uncharted space.

Laura Dern, Sam Neill and Joseph Mazzello in "Jurassic Park." Amblin/Universal/Kobal/Shutterstock

And then there’s the casting, an element that sometimes takes a number of years to truly appreciate. Aside from the always-dependable Goldblum, there’s Laura Dern, who carved out her own Sigourney Weaver-shaped notch in the movie thanks to that one terrifying sequence in the control shed. Plus, her reaction shot to that first dinosaur reveal – along with that of Sam Neill – could be viewed as a textbook for green-screen acting, which has become the standard ever since, in Marvel movies and beyond. Add to that the amazing and meme-worthy smaller performances from Samuel L. Jackson (“Hold onto your butts!”), Wayne Knight (“Ah ah ah! You didn’t say the magic word!”) and Bob Peck (“Clever girl”), and you’ve got a crowd-pleaser that is equal parts adventure, comedy and chomp-chomp thriller.

While the rest of the entries in the “Jurassic” franchise have not exactly been up to par (aside from 2015’s not-terrible first reboot “Jurassic World”), the original flick still “rules” – and is definitely worth a rewatch on the occasion of its 30th birthday.


    
    



```python
#!pip install wikipedia
import wikipedia 
from IPython.display import display, Markdown # add for Jupyter

terms = ["Python (programming language)", "JavaScript"]
for term in terms:
    # Search for a page 
    result = wikipedia.search(term)
    # Get the summary of the first result
    summary = wikipedia.summary(result[0])
    print(term) 
    # print(summary) # console display
    display(Markdown(summary)) # Jupyter display
```

    Python (programming language)



Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.
Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly procedural), object-oriented and functional programming. It is often described as a "batteries included" language due to its comprehensive standard library.
Guido van Rossum began working on Python in the late 1980s as a successor to the ABC programming language and first released it in 1991 as Python 0.9.0. Python 2.0 was released in 2000. Python 3.0, released in 2008, was a major revision not completely backward-compatible with earlier versions. Python 2.7.18, released in 2020, was the last release of Python 2.
Python consistently ranks as one of the most popular programming languages, and has gained widespread use in the machine learning community.




    JavaScript



JavaScript (), often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior.
Web browsers have a dedicated JavaScript engine that executes the client code. These engines are also utilized in some servers and a variety of apps. The most popular runtime system for non-browser usage is Node.js.
JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard. It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).
The ECMAScript standard does not include any input/output (I/O), such as networking, storage, or graphics facilities. In practice, the web browser or other runtime system provides JavaScript APIs for I/O.
Although Java and JavaScript are similar in name, syntax, and respective standard libraries, the two languages are distinct and differ greatly in design.


### Inspecting a Function
The inspect module can give you the output of what's inside many Python functions/objects.  This can help you explore code behind what you are using.
- [Inspect](https://docs.python.org/3/library/inspect.html) documentation.


```python
import inspect 
from newspaper import Article

# inspect newspaper Article function
print(inspect.getsource(Article))
```

### Python Data Types
Dynamic typing means that the type of the variable is determined only during runtime.  Strong typing means that variables do have a type and that the type matters when performing operations.  In the illustration below there are two functions
- mean... shows types required prior to calling average function
- average, average2... calculates the average of a list of numbers


Python has types.  In the language you can use type hints, but most coders do not use them.  In other languages like Java and 'C' you must specify types.
- [Python Types Cheat Sheet](https://mypy.readthedocs.io/en/stable/cheat_sheet_py3.html)


```python
import sys
from typing import Union

# Define types for mean function, trying to analyze input possibilities
Number = Union[int, float]  # Number can be either int or float type
Numbers = list[Number] # Numbers is a list of Number types
Scores = Union[Number, Numbers] # Scores can be single or multiple 

def mean(scores: Scores, method: int = 1) -> float:
    """
    Calculate the mean of a list of scores.
    
    Average and Average2 are hidden functions performing mean algorithm

    If a single score is provided in scores, it is returned as the mean.
    If a list of scores is provided, the average is calculated and returned.
    """
    
    def average(scores): 
        """Calculate the average of a list of scores using a Python for loop with rounding."""
        sum = 0
        len = 0
        for score in scores:
            if isinstance(score, Number):
                sum += score
                len += 1
            else:
                print("Bad data: " + str(score) + " in " + str(scores))
                sys.exit()
        return sum / len
    
    def average2(scores):
        """Calculate the average of a list of scores using the built-in sum() function with rounding."""
        return sum(scores) / len(scores)

    # test to see if scores is  a list of numbers
    if isinstance(scores, list):
        if method == 1:  
            # long method
            result = average(scores)
        else:
            # built in method
            result = average2(scores)
        return round(result + 0.005, 2)
    
    return scores # case where scores is a single valu

# try with one number
singleScore = 100
print("Print test data: " + str(singleScore))  # concat data for single line
print("Mean of single number: " + str(mean(singleScore)))

print()

# define a list of numbers
testScores = [90.5, 100, 85.4, 88]
print("Print test data: " + str(testScores))
print("Average score, loop method: " + str(mean(testScores)))
print("Average score, function method: " +  str(mean(testScores, 2)))

print()

badData = [100, "NaN", 90]
print("Print test data: " + str(badData))
print("Mean with bad data: " + str(mean(badData)))


```

## Hacks
Here is a summary of some of the things learned above.
- Formatting messages with emoji
- Exploring data with newspaper and wikipedia libraries
- Finding code on how the library we used was made
- Learning about data types while writing an algorithm for mean

> Part of Project Based learning is the idea of combining concepts to form something more interesting.  Make a plan, form some ideas, brainstorm ideas with pair.  Produce something that is interesting and challenging.  Samples...
- Could I get input from user to look up wikipedia information? [Python input](https://www.w3schools.com/python/ref_func_input.asp), [Article on Input](https://vegibit.com/python-input-function/)
- What could I learn in Python about Stats to get Machine Learning Read? [Stats Calculations](https://docs.python.org/3/library/statistics.html)
- Could I add emoji to an extracted article?  [String Find](https://www.w3schools.com/python/ref_string_find.asp), [String Methods](https://www.w3schools.com/python/python_strings_methods.asp)




