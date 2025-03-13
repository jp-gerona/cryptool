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

def kamasutra_cipher(text):
    monoalpha_normal = list("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ")
    monoalpha_shifted = list("nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM")
    monoalpha_split = list(text)
    monoalpha_output = ""

    for i in monoalpha_split:
        if i in monoalpha_shifted:
            monoalpha_index = monoalpha_shifted.index(i)
            monoalpha_output += monoalpha_normal[monoalpha_index]
        else:
            monoalpha_output += i

    return monoalpha_output

def vernam_cipher(text, key, mode):
    text = text.replace(' ', '').upper()
    key = key.replace(' ', '').upper()

    if len(key) < len(text):
        raise ValueError("Key must be at least as long as the text")

    text_values = [ord(char) - ord('A') for char in text]
    key_values = [ord(char) - ord('A') for char in key[:len(text)]]

    if mode.lower() == "e":  # encrypt
        cipher_values = [(p + k) % 26 for p, k in zip(text_values, key_values)]
    elif mode.lower() == "d":  # decrypt
        cipher_values = [(p - k) % 26 for p, k in zip(text_values, key_values)]
    else:
        raise ValueError("Mode must be 'e' for encrypt or 'd' for decrypt")

    output = ''.join(chr(val + ord('A')) for val in cipher_values)
    return output

def morse_cipher(text, mode):
    morse_characters = {
        "a": ".-", "b": "-...", "c": "-.-.", "d": "-..", "e": ".", "f": "..-.", "g": "--.", "h": "....", "i": "..", "j": ".---",
        "k": "-.-", "l": ".-..", "m": "--", "n": "-.", "o": "---", "p": ".--.", "q": "--.-", "r": ".-.", "s": "...", "t": "-",
        "u": "..-", "v": "...-", "w": ".--", "x": "-..-", "y": "-.--", "z": "--..",
        "0": "-----", "1": ".----", "2": "..---", "3": "...--", "4": "....-", "5": ".....", "6": "-....", "7": "--...", "8": "---..", "9": "----.",
        ".": ".-.-.-", ",": "--..--", "?": "..--..", "!": "-.-.--", "-": "-....-", ";": "-.-.-.", "=": "-...-", "'": ".-..-.", "@": ".--.-.", " ": "/"
    }

    morse_output = ""

    if mode.lower() == "e":  # Encrypt
        for char in text:
            if char.lower() in morse_characters:
                morse_output += morse_characters[char.lower()] + " "
            else:
                morse_output += "/ "  # For non-alphabetic characters (including spaces)
        return morse_output.strip()

    elif mode.lower() == "d":  # Decrypt
        text = text.split(' ')
        for code in text:
            for key, value in morse_characters.items():
                if code == value:
                    morse_output += key
                    break
            else:
                morse_output += " "  # For any unrecognized symbols
        return morse_output
