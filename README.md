
# Welcome To BunFrontend

This is the Front-End for the the challenge.
Check out the Back-end [**Here**](https://github.com/Adam-442/bunbackend).

## Terminal

To install dependencies:

    bun install

To run app, (http://localhost:5500):

    bun --bun run dev


## Work Summary

The front-end has the main features of what is needed, and is easy to expand upon. Features include:

 1. Uploading CSV files to backend.
 2. Fetching data from backend and showing them as a list.
 3. Adding certain data types to the backend (like activities and permissions).
 
 ## Screenshots:

**Landing Page:**

<img width="1440" alt="Landing Page" src="https://github.com/Adam-442/front-bun-next/assets/98691783/474ac2ab-1c7d-4433-8c36-72edd0726406">
<br/>

**Available Options:**

<img width="552" alt="Available Options" src="https://github.com/Adam-442/front-bun-next/assets/98691783/e175cd4b-4a43-486b-89d0-4b9ac5a7768e">
<br/>


**Uploaded CSV, the backend responded with a timer for inserting data:**

<img width="998" alt="Uploaded CSV" src="https://github.com/Adam-442/front-bun-next/assets/98691783/b1f56a01-c512-4970-8646-df2e07f8f973">
<br/>


**The "*Get All Requests*" and how it is displayed as a list of values:**

<img width="1440" alt="Get All Requests" src="https://github.com/Adam-442/front-bun-next/assets/98691783/3c3ad610-ba8a-42e5-804d-aa6fcf3cb34a">
<br/>


***Adding* an *Activity* with the name "*Programming*", the backend sends back a response with the ID of the added activity:**

<img width="801" alt="Add Activity" src="https://github.com/Adam-442/front-bun-next/assets/98691783/5836d6e5-dc31-4975-82bb-130906d56590">
<br/>


**When calling "*Get All Activities*", we can see the reflected changes, and the "Programming" activity here after we added it from the previous action:**

<img width="1440" alt="Get All Activities" src="https://github.com/Adam-442/front-bun-next/assets/98691783/fe2f37df-5155-46c7-ac07-981d4d5644d9">
<br/>


**When an action needs a parameter to work, the page will display an input field for the user to write:**

<img width="1362" alt="Get an account permission" src="https://github.com/Adam-442/front-bun-next/assets/98691783/4a290c59-8d8a-44de-a176-7462b3ebdaa1">
<br/>

## Packages, Libraries and frameworks

 - [**BunJS:**](https://bun.sh/) JavaScript Runtime, faster than NodeJS.
 - [**NextJS:**](https://nextjs.org/) React-based web application with static website generation.
 - [**TypeScript:**](https://www.typescriptlang.org/) JavaScript with static typing and optional type annotations.
 - [**csv2json:**](https://www.npmjs.com/package/csvjson-csv2json) *NPM* package that parses *CSV* strings to *JSON*.
