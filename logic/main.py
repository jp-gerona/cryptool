import eel
import sys
from ciphers import *

eel.init("../web")

@eel.expose
def exposed_caesar_cipher(text, shift, mode):
    return caesar_cipher(text, shift, mode)

@eel.expose
def exposed_kamasutra_cipher(text):
    return kamasutra_cipher(text)

@eel.expose
def exposed_vernam_cipher(text, key, mode):
    return vernam_cipher(text, key, mode)

@eel.expose
def exposed_morse_cipher(text, mode):
    return morse_cipher(text, mode)

@eel.expose
def close_application():
    sys.exit(0)

if __name__ == "__main__":
    eel.start("index.html", mode="default", geometry={"size": (1000, 800), "position": (100, 100)})
