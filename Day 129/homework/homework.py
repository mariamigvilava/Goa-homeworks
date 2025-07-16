text = "Hello world"
print(text.split()) 


fruits = "apple,banana,orange"
print(fruits.split(","))


data = "name\tage\tcity"
print(data.split("\t")) 


message = "a-b-c-d"
print(message.split("-"))  


sentence = "I love learning Python"
words = sentence.split()
print(len(words))  


code = "C%o%d%i%n%g"
print(code.upper)


def clean_and_upper(text):
    clean_text = text.replace("%", "")  
    return clean_text.upper()  


word = "C%o%d%i%n%g"
result = clean_and_upper(word)
print(result)  