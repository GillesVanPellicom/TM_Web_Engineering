Please open this site using vscode live server 5 or any kind of server such as apache or nginx.
Some of my strategies trigger CORS policy violations when used on a pure browser.
Servers usually have a same-origin policy enabled by default and this mitigates that behavior.
Also, I have observed the original live server by Ritwick Dey, so not the newer live server 5 by the same author, to throw HTML error 405 on POST in MacOs and win 11 but not win 10.
Please be sure to use live server 5 or any server with POST enabled.