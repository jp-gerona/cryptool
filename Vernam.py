def vernam_cipher(plaintext, key):
    plaintext = plaintext.replace(' ', '').upper()
    key = key.replace(' ', '').upper()
    
    if len(key) < len(plaintext):
        raise ValueError("Key must be at least as long as the plaintext")
    
    plaintext_values = [ord(char) - ord('A') for char in plaintext]
    key_values = [ord(char) - ord('A') for char in key[:len(plaintext)]]

    cipher_values = [(p + k) % 26 for p, k in zip(plaintext_values, key_values)]
    ciphertext = ''.join(chr(val + ord('A')) for val in cipher_values)
    return ciphertext

def vernam_decipher(ciphertext, key):
    ciphertext = ciphertext.replace(' ', '').upper()
    key = key.replace(' ', '').upper()
    
    if len(key) < len(ciphertext):
        raise ValueError("Key must be at least as long as the ciphertext")
    
    cipher_values = [ord(char) - ord('A') for char in ciphertext]
    key_values = [ord(char) - ord('A') for char in key[:len(ciphertext)]]

    plaintext_values = [(c - k) % 26 for c, k in zip(cipher_values, key_values)]
    plaintext = ''.join(chr(val + ord('A')) for val in plaintext_values)
    return plaintext


choice = input("Do you want to encrypt or decrypt? (E/D): ").strip().upper()
if choice == 'E':
    plaintext = input("Enter the plaintext (A-Z only, spaces ignored): ")
    key = input("Enter the key (A-Z only, spaces ignored): ")
    result = vernam_cipher(plaintext, key)
    print("Ciphertext:", result)
elif choice == 'D':
    ciphertext = input("Enter the ciphertext (A-Z only, spaces ignored): ")
    key = input("Enter the key (A-Z only, spaces ignored): ")
    result = vernam_decipher(ciphertext, key)
    print("Plaintext:", result)
else:
    print("Invalid choice. Please enter 'E' to encrypt or 'D' to decrypt.")
