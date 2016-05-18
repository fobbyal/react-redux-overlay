# React Redux Overlay
This project is mainly to created the following problem. I need to pop up a message saying that i have done something but I am 10 levels down in a comopnent that is 10x10. There are solutions out there but they do not cover the 2 use casses below.

1. In the most basic case I want a Overlay place holder on the screen for the Modal. However I have no idea what will be the content of the Modal before hand. So it needs to be dynamically mounted into the Overlay when desired.
2. Since the content is dynamic. In a large application there could be a few dozen notification/modal type of messages. The temporary ported comopnents needs to be garbage collected.

