import eel

eel.init("web")

@eel.expose
def say_hello_py(name):
    message = f"Hello from Python, {name}!"
    print(message)
    return message

eel.start("index.html", mode="default")
