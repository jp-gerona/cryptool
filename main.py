import eel

eel.init("web")

@eel.expose
def say_hello_py(name):
    message = f"Hello from Python, {name}!"
    print(message)
    return message

if __name__ == "__main__":
    eel.start("index.html", mode="default")
