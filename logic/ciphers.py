def caesar_cipher(text, shift, mode):
    caesar_code = list("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ")
    caesar_output = ""

    if mode.lower() == "e":  # encrypt
        for i in text:
            if i in caesar_code:
                p = caesar_code.index(i)
                new_index = (p + shift) % len(caesar_code)
                caesar_output += caesar_code[new_index]
            else:
                caesar_output += i
    elif mode.lower() == "d":  # decrypt
        for i in text:
            if i in caesar_code:
                p = caesar_code.index(i)
                new_index = (p - shift) % len(caesar_code)
                caesar_output += caesar_code[new_index]
            else:
                caesar_output += i

    return caesar_output
