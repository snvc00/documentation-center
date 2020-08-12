# :books::computer: Documentation Center

### About the application
_Documentation Center_ is a web application created to share information about programming topics, like data structures, algorithms and sorting methods. The main purpose of this web application is to provide a brief explanation of the specific topic. Creating a quick example of the structure, let's learn about a very common data structure:

:books: **Data Structure: Stack**

**Information:** Base theory, some interesting facts.

**Graphic Resource:** An image or chart to explain in a more visual way how it works or the complexity in case of algorithms or sorting methods.

**Code Implementation:** Hands on work to implement a simple stack.

```python
class Stack:
    def __init__(self):
        self.stack = []

    def push(self, item):
        self.stack.append(item)

    def pop(self):
        if len(self.stack) < 1:
            return print("Calling: pop(): Empty Stack")
        del self.stack[len(self.stack) - 1]

    def top(self):
        if len(self.stack) < 1:
            return print("Calling: top(): Empty Stack")
        return self.stack[len(self.stack) - 1]

    def size(self):
        return len(self.stack)
```

### Frameworks, libraries and technologies
The core application functionality and style were developed using:
* React
* Material-UI
* MongoDB

### Contributors

<!-- ALL-CONTRIBUTORS-LIST:START -->

| [<img src="https://avatars3.githubusercontent.com/u/56317975?s=400&u=2085ff30f9873b1c5c61d01bc4401be1ecba4239&v=4" width="100px;"/><br/><sub><b>snvc00</b></sub>](https://github.com/snvc00)<br/>💻 |
| :---: | 

<!-- ALL-CONTRIBUTORS-LIST:END -->
