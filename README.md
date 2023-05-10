# Cloning and Pushing to Your Own Repository

1. Fork this repository by clicking the "Fork" button in the top right corner of this page. This will create a copy of this repository in your GitHub account.
2. Clone your forked repository to your local machine using the following command in your terminal:
    - `git clone https://github.com/your-username/javascript-data-structures-assignment.git`
    - Replace `your-username` with your GitHub username.
3. Make changes to the files in your local repository as directed in the exercises.
4. After making changes, add, commit and push your changes to your remote repository using the following commands in your terminal:

```
git add .
git commit -m "Add changes as directed in the exercises"
git push origin main
```

Replace `main` with the name of the branch you want

# Quick Review of JS Data Structures:

As discussed in class, 2 of the most common and important data structures native to javascript: Arrays and Objects

To review, an array is an ordered collection of data where each item is assigned an index starting from 0
e.g.
`let mySampleArray = ["Index 0", "Index 1", "Index 2"];`

An object, is used to store collections of data in a key-value pair format, where each key is a string (although quotes are optional for keys without spaces in them) and the values can be any data type

```
let mySampleObject = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
};
```

# Your Taks:
Given what we just learned, your assignment is to create an array of objects! Set the myZooAnimals variable in script.js to an array of **at least 3** objects that have the following keys and make up some values for them:
1. animalType
2. name
3. age
4. pictureURl

**Hint:** go to https://unsplash.com for some great, high-res pics, search up whatever animal you want, and use the url in the pictureURL property!
