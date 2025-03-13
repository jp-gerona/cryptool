import eel
from ciphers import caesar_cipher

eel.init("../web")

@eel.expose
def exposed_caesar_cipher(text, shift, mode):
    return caesar_cipher(text, shift, mode)

if __name__ == "__main__":
    eel.start("index.html", mode="default")
