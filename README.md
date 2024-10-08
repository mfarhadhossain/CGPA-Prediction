

# CGPA Prediction

## About

This repository serves as the codebase for CGPA Prediction application which is a fullstack machine learning project.
# Getting Started

To get the Node server running locally:

- Clone this repo
- `npm install` to install all required dependencies
- `npm start` to start the local server
## Description

CGPA Prediction is a machine learning based web application, where students can predict their CGPA on a particular course by filling up some details on their profile. The system uses a previously trained dataset of over 1000 entries taken from university students to predict the CGPA. Additionally, teachers can also view the students' progress and the classes they are taking. The system is built using a Python-based machine learning algorithm that utilizes TensorFlow to make predictions. The model is then saved in .js format and reloaded into Node.js using the `@tensorflow/tfjs` npm package. Once a student fills out their profile, the backend predicts their CGPA and returns the results to the frontend.

The CGPA Prediction system is designed to help students understand how much effort they need to put into their courses to achieve their desired results. It is also useful for teachers to monitor their students' progress and identify any areas where additional support may be required.


# Tools and Technologies

I have used a remote MySQL database service using Sequelize ORM(https://sequelize.org/)

- [expressjs](https://www.npmjs.com/package/express) - The server for handling and routing HTTP requests
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - For generating JWTs used by authentication
- [sequelize](https://www.npmjs.com/package/sequelize) - As a promise-based Node.js ORM tool for MySQL
- [cors](https://www.npmjs.com/package/cors) - For enabling CORS with various options.
- [tensorflow.js](https://www.npmjs.com/package/@tensorflow/tfjs) - For loading ML model written in python to node.js.

  and others.