# Getting started

- [`npx express-generator --view=hbs node-react-auth`](https://expressjs.com/en/starter/generator.html)
- `cd node-react-auth`
- `npm audit fix --force`
- [`npx create-react-app client`](https://reactjs.org/docs/create-a-new-react-app.html)
- `cd client`
- `npm audit fix --force`
- `cd ..`
- Create a [.gitignore file](https://www.pluralsight.com/guides/creating-gitignore-for-clean-react-repository)
- Create a README.md file
- Create and connect to a github repo
- `git init`
  - Prefer main over master as your [primary branch?](https://www.seancdavis.com/blog/git-set-default-branch/)

# Connecting front end and backend

- [Create React App with an Express backend](https://daveceddia.com/create-react-app-express-backend/)
- [Deploying a React app with React-Router and an Express Backend](https://dev.to/nburgess/creating-a-react-app-with-react-router-and-an-express-backend-33l3)

# Adding the database

- `npm i mongoose` [Mongoose npm](https://www.npmjs.com/package/mongoose)
- `npm i -D mongoosejs-cli` [Mongoose npm cli](https://www.npmjs.com/package/mongoosejs-cli?activeTab=readme#installation)
- `touch .mongooserc` and setup the file to use a db root directory as shown on the cli website
- `npx mongoosejs-cli init` to add mongo db setup to application
  - Notice you now have a db folder with models in it
- `npx mongoosejs-cli model:create --name User --attributes name:String,email:String,password:String`
- `npx mongoosejs-cli seed:create --name AddUser` - to populate users
- Add bcrypt npm `npm i bcrypt`
- Add initial user with Seeds `npm run seed`
-
