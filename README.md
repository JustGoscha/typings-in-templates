# Typings in Templates

## Who am I
- Hi, I'm Goscha
- I'm a Full Stack Developer @ FreightHub
/ Occasional Product Manager 
/ Part Time Designer 
/ Executive Assistant Plant Hydrator  

>You have to wear many hats in a young startup, you know  
>that's part of the fun!


## Intro

>We refactored our application this year from AngularJS to React with TypeScript.

>Who is already using React?
>Who is still using AngularJS?
>Who uses Angular2,3,4? - poor souls

>One of the coolest things we learned in the process is how awesome it is to have types in your templates. And because with React and JSX/TSX your templates reside directly in the code itself you also get all the advantages of TypeScript in your "templates" as well.


## What are static types good for anyway?

- Tooling (Autocomplete, Refactoring, etc)
> Have you ever tried to refactor huge javascript applications

- Code Comprehension 
>Definition of clear interfaces, expected inputs and outputs  
>Can act as documentation

- Static type checking! Compile time errors
>Can catch some bugs, that are hard to catch for the human eye alone

## Using third-party components

```sh
yarn add material-ui react-tap-event-plugin
yarn add --dev @types/material-ui
```

Don't forget to add them to tsconfig.json