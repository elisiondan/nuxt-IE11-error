# Description of the error
A minimalistic repo that mimics my current project to reproduce errors in IE11 that seem to be related to namespaced store.

When a module folder in store is included in the dev build, it leads to the current error in IE 11.
![alt text](/static/error.png)


These errors expand to followings.


_script 1002_

![script 1002](/static/script1002.png)


_script 5007_

![script 1002](/static/script5007.png)

___

However, when the modules folder is deleted, the error disappears. The weirdest part is that I do not even load the modules folder in `store/index.js`.
I use `babel-polyfill` and `event-source-polyfill` in the `nuxt.config.js`, however that did not solve the issue.


# Steps to reproduce
1. Install dependencies and open `http://localhost:3000/cs` in IE 11
2. `npm run dev`
3. The errors should pop-up in the console
4. Remove modules folder from store
5. Stop the dev build and run it again. Open a new window in the browser to assure nothing is cached
6. The errors should not appear this time 
