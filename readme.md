# Loading Image Demo
In order to solve this problem, I decided to use localStorage with fetch. When a user first visits the website, the website checks to see if the images need to load are already stored in localStorage. If they aren't then a function gets called to check both the window position and div position that will hold the fetched images. This function will run every time the user scrolls on the page. When the div is in the view of the window, the website fetches the 4 images, and place them each into their div, as well as store the links to those images in localStorage. If the user scrolls to a different section of the page and back to the images, they will not be fetched again. If the user refreshes the page while over the images, they'll get pulled from localStorage and display in their correction location. 

### Instructions:
Access to localstorage is necessary for my solution to work, 
This assignment can either be run locally or you can visit a live demo of it at https://kantelabs.github.io/Simple-Ad-Testing/

Locally:
In the same location as the index.html, you need to run a server.

With python it is:
- python -m http.server

With Ruby it is:
- ruby -run -e httpd . -p 8000