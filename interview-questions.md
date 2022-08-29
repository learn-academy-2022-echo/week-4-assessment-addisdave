# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer: OOP use classes to create objects. FP use function to do a particular task.

Researched answer: OOP, data is directely stored in objects where as FP, data is only transfered using functions.

2. What is the difference between a Float and an Integer in Ruby?

Your answer: Float icludes decimals but integer does not.

Researched answer: float is numbers containing decimal point whereas integers in Ruby that doesn't have decimals. 

3. Ruby has an implicit return. What does that mean?

Your answer: returns last output of a function without any return command.

Researched answer: It a return that if the return is expressed last furing an excution, no need to return the keyword. 

4. What is a block in Ruby? 

Your answer: chunk of codes go between do and end. 

Researched answer: Blocks are anonymous function passed to methods inclosed between  do   end statement or in {} that can 
take multiple arguments defined between ||. For example, [1 ,2].each    {|num|                puts num}
                                                                <!-- block argument        block body -->

                                  3.times do
                                        puts "Echo"
                                    end
// => outputs is three prints of "Echo"  3.times is the method call.
// or same out put with the currly brackets.     3.times() {puts "Echo"}


5. What is an instance variable in Ruby?

Your answer: it is a way of creating a new variable so it can be passed to new function. 

Researched answer: it is a variable tha belongs to a specific inctance of class which its value stored its unique
value privately within the class. Ruby uses @ to a variable name to indicate instances of variables. 

## Looking Ahead: Terms for Next Week

1. PostgreSQL: it is an object-relational database management system. 

2. Ruby on Rails: it is a server-side web application frame work written in Ruby.

3. ORM: Object Rational Mapperprovides an object oriented layer in b/n rational database and OOP without writing SQL. 

4. Active Record: is interface between a Rails application and the database.

5. Migrations: It is used to modify the shape of an existing datatabase. (from the syllabus)
file generated through rails command which allow us to make changes into database. 
