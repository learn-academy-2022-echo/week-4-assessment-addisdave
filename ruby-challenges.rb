# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.


num1 = 7

# # Expected output: '7 is odd'
 num2 = 42
# # Expected output: '42 is even'
  num3 = 221
# # Expected output: '221 is odd'

# // PSUEUDOCODE
# // create a method
# // Input numbers
# // Determines if the number is odd or even
# // Use Ruby def/end method with string interpolation

def odd_even (num)
    
        num.odd? ? (p '#{num} is odd') : (p '#{num} is even')
end
odd_even num1
odd_even num2
odd_even num3


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

 beatles_album1 = 'Rubber Soul'
# # # Expected output: 'Rbbr Sl'
 beatles_album2 = 'Sgt Pepper'
# # # Expected output: 'Sgt Pppr'
  beatles_album3 = 'Abbey Road'
# # # Expected output: 'bby Rd'

# PSUEUDOCODE
# Create a method
# Input is string
# Output removes all the vowels from the string.
# Use .delete method for the string vowels aeiou

def remove_vowel (string)
    p string.delete 'aeiou'
end
remove_vowel beatles_album1
remove_vowel beatles_album2
remove_vowel beatles_album3

# # -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

 palindrome_tester1 = 'Racecar'
# # Expected output: 'Racecar is a palindrome'
 palindrome_tester2 = 'LEARN'
# # Expected output: 'LEARN is not a palindrome'
 palindrome_tester3 = 'Rotator'
# # Expected output: 'Rotator is a palindrome'

# PSUEUDOCODE
# Create a method
# Input is string
# Output checks if he string is a palindrome.

def palindrome_or_not string
    palindrome_one = string.downcase
    palindrome_two = palindrome_one.reverse
    palindrome_one == palindrome_two ? (p "#{string} is a plindrome") : (p"#{string} is not a palindrome")
end
palindrome_or_not palindrome_tester1
palindrome_or_not palindrome_tester2
palindrome_or_not palindrome_tester3