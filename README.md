# Shop Shop
<a href="#license"><img src="https://img.shields.io/badge/license-mit-informational"></a>

## Description
Enhance an existing e-commerce platform called Shop-Shop:
1. Centralize all of the application's data in state globally to make it easier to share state across the entire application
2. Create a shopping cart for the application
3. Add offline functionality
4. Process secure online payments with a service called Stripe

## Table of Contents
- <a href="#installation">Installation</a>
- <a href="#tools-and-packages">Tools and Packages</a>
- <a href="#deployed-application">Deployed Application</a>
- <a href="contributors">Contributors</a>
- <a href="#license">License</a>

## Installation
- Clone the directly from the GitHub repository to your local machine.
- Run _npm i_ in the command line to install all packages.
- Run _npm run seed_ in the command line to seed the MongoDB database collections.
- Run the command _npm run develop_ to launch the application.

## Tools and Packages
- **Stripe** is a suite of online payment processing APIs that powers commerce for online businesses of all sizes, allowing them to accept and process payments online. You’ll use the stripe npm package to integrate Stripe into your application.

- **Stripe.js** is Stripe’s JavaScript library for building payment flows. It uses Stripe Elements, a set of prebuilt, customizable UI components to allow platforms to collect sensitive payment information. Stripe.js also provides a single interface for Apple Pay, Google Pay, and the Payment Request API. For the purposes of this module's application, you’ll use the @stripe/stripe-js npm package to redirect your app to a prebuilt Stripe checkout page.

## Deployed Application
Deployed url: <a href='' target='_blank'>TBD</a><br>
Repo url: <a href='https://github.com/cpm-128/shop-shop' target='_blank'>https://github.com/cpm-128/shop-shop</a>

## Contributors
Colleen Maher

### Author
Colleen Maher is a front-end web developer with a background in marketing, operations, and project management.

Trained at UNC Chapel Hill to earn a Professional Certificate in full-stack web development. Newly developed skills include JavaScript, managing databases, responsive web design, and following the Model-View-Controller paradigm. I am an organized and detail-oriented coder wanting to create and contribute to improved user-experiences and database management in an increasingly digital world. Strengths in creativity, teamwork, and building projects from ideation to execution.

<a href="https://gist.github.com/cpm-128" target="_blank">GitHub Profile</a>

## License
MIT License

Copyright (c) [2022] [Colleen Maher]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.