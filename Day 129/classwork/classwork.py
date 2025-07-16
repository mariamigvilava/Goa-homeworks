# დაწერეთ ფუნქცია, რომელსაც 
# არგუმენტად გადაეცემა რიცხვი და აბრუნებს ამ რიცხვის კვადრატს.
# 1)def kvadrati(ricxvi):
#     return ricxvi ** 2
# print(kvadrati(5))


# დაწერეთ ფუნქცია, რომელსაც არგუმენტად გადაეცემა რიცხვი.
# იმ შმთხვევაში თუ ეს რიცხვი ლუწია --> აბრუნებს "Odd", თუ კენტია --> "Even".



# კომენტარის სახით ახსენით როგორ მუშაობს 
# .split() მეთოდი და მოიყვანეთ მისი გამოყენების 2 მაგალითი.

# split() მეთოდი Python-ში გამოიყენება სტრიქონის  დაყოფისთვის გარკვეული სიმბოლოს  მიხედვით.

# text = "Goa is the best academy"
# result = text.split()  
# print(result)

# data = "2025-07-23"
# result = data.split("!")
# print(result)
# join() არის Python-ის სტრიქონის (string) მეთოდი, რომელიც გამოიყენება სიის ან iterable ობიექტის
# ელემენტების ერთმანეთზე გადაბმისთვის. იგი აკავშირებს ყველა ელემენტს ერთ

words = ['Python', 'aris', 'kargi', 'ena']
sentence = " ".join(words)
print(sentence)

items = ['mmm', 'oooo', 'lalallaal']
result = ", ".join(items)
print(result)