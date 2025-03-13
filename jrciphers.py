# CIPHER MEMORY
caesar_code = list("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ")

morse_characters = {
    "a": ".-", "b": "-...", "c": "-.-.", "d": "-..", "e": ".", "f": "..-.", "g": "--.", "h": "....", "i": "..", "j": ".---",
    "k": "-.-", "l": ".-..", "m": "--", "n": "-.", "o": "---", "p": ".--.", "q": "--.-", "r": ".-.", "s": "...", "t": "-", 
    "u": "..-", "v": "...-", "w": ".--", "x": "-..-", "y": "-.--", "z": "--..",
    "0": "-----", "1": ".----", "2": "..---", "3": "...--", "4": "....-", "5": ".....", "6": "-....", "7": "--...", "8": "---..", "9": "----.",
    ".": ".-.-.-", ",": "--..--", "?": "..--..", "!": "-.-.--", "-": "-....-", ";": "-.-.-.", "=": "-...-", "'": ".-..-.", "@": ".--.-.", " ": "/"
}

menu_flag = 0

while menu_flag != 5:
    try:
        menu_flag = int(input("Welcome to the Elite Penguin Force Cracker!\nPick an option to crack 8)\n1. Caesar Cipher (5-shift)\n2. Monoalphabetic Cipher\n3. Vernam Cipher\n4. Morse Code\n5. Exit\n\nChoose: "))
        if menu_flag == 1:
            caesar_input = ""
            # Word inputs
            caesar_input = list(input("Caesar Cipher by John! \nEnter the a word, phrase or sentence!\n\nText: "))
            
            # Type
            while True:
                try:
                    caesar_type = input("Do you want to Encrypt or Decrypt? (E/D): ")
                    if caesar_type.lower() not in ["e", "d"]:
                        raise ValueError("Please enter 'E' for Encrypt or 'D' for Decrypt.")
                    break
                except ValueError as e:
                    print(f"\033[31m{e}\033[0m")
                    continue

            # Integer
            while True:
                try:
                    caesar_shift = int(input("Enter the shift value (All Integers): "))
                    break
                except ValueError:
                    print("\033[31mInvalid shift value! Please enter a valid integer.\033[0m")
                    continue

            caesar_output = ""

            # Logic
            if caesar_type.lower() == "e": # encrypt
                for i in caesar_input:
                    if i in caesar_code:  
                        p = caesar_code.index(i)
                        new_index = (p + caesar_shift) % len(caesar_code)  
                        caesar_output += caesar_code[new_index] 
                    else:
                        caesar_output += i 
                print("Encrypted:", caesar_output) # Caesar enc output
            elif caesar_type.lower() == "d": # decrypt
                for i in caesar_input:
                    if i in caesar_code: 
                        p = caesar_code.index(i)
                        new_index = (p - caesar_shift) % len(caesar_code) 
                        caesar_output += caesar_code[new_index]  
                    else:
                        caesar_output += i 
                print("Decoded Text:", caesar_output) # Caesar dec output

        elif menu_flag == 2:
            print("2")
            continue
        elif menu_flag == 3:
            print("3")
            continue
        elif menu_flag == 4:
            morse_input = ""

            morse_input = list(input("Morse Code by John! \nEnter the a word, phrase or sentence!\n\nText: "))

            while True:
                try:
                    morse_type = input("Do you want to Encrypt or Decrypt? (E/D): ")
                    if morse_type.lower() not in ["e", "d"]:
                        raise ValueError("Please enter 'E' for Encrypt or 'D' for Decrypt.")
                    break
                except ValueError as e:
                    print(f"\033[31m{e}\033[0m")
                    continue

            morse_output = ""

            if morse_type.lower() == "e":  # Encrypt
                for char in morse_input:
                    if char.lower() in morse_characters:
                        morse_output += morse_characters[char.lower()] + " "
                    else:
                        morse_output += "/ "  # For non-alphabetic characters (including spaces)

                print("Morse Code (Encrypted):", morse_output.strip())  # Encrypted Morse code output

            elif morse_type.lower() == "d":  # Decrypt
                morse_input = ''.join(morse_input).split(' ')
                for code in morse_input:
                    for key, value in morse_characters.items():
                        if code == value:
                            morse_output += key
                            break
                    else:
                        morse_output += " "  # For any unrecognized symbols

                print("Decoded Text:", morse_output)  # Decrypted text from Morse code

        elif menu_flag == 5:
            print("EXIT")
            break
    except ValueError as i:
        print(f"\033[31mInvalid input! Please enter a valid number!! (1-5)\033[0m")