
monoalpha_normal = list("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ")
monoalpha_shifted = list("nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM")

monoalpha_input = input("Monoalphabetic Cipher\nEnter the word to be Encrypted/Decrypted!\n\nText: ")

monoalpha_split = list(monoalpha_input)

monoalpha_decode = ""

for i in monoalpha_split:
    if i in monoalpha_shifted:
        monoalpha_index = monoalpha_shifted.index(i)
        monoalpha_decode += monoalpha_normal[monoalpha_index]
    else:
        monoalpha_decode += i

print("Encrypted/Decrypted Text: ", monoalpha_decode)
