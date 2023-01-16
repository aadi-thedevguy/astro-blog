---
layout: "../../layouts/BlogPost.astro"
title: 'Getting started with CSS Custom Properties'
pubDate: 'Feb 13 2022'
description: 'Do you know that you can use Variables in Vanilla CSS without any preprocessors like SASS or LESS.'
heroImage: '/images/custom-variables.webp'
tags : 'css css-tips '
icon : '/images/css_favicon.ico'
readingTime: '4 minutes read'

---

Do you know that you can use Variables in Vanilla CSS without any preprocessors like SASS or LESS?
Let's Find out How...

But first, the question arises Why should you even use these Custom properties when You have Preprocessors?
Well, Let's Answer that

## Why use CSS Custom Properties over SASS variables

1. Learning SASS for only using Variables is much of an effort, so why do it.

2. No need for a compiler to convert your SASS files into normal CSS.

3. Native, therefore fast and browser compatible.

Now, let's understand What the heck are these CSS Custom Properties.

## What are Custom Properties
If you ever used a Programming language before, you know what a variable is.
If not, A variable is something that is defined once, usually at the top of the code, and then can be referenced later anywhere in the code.

So Basically, the custom properties are the variables of CSS which minimizes code repetition and saves time. Custom properties are very helpful in large projects.

In normal CSS you have to redefine a property like colour or font repetitively for different elements and it is a hazard.



![Code Snippet](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nddmv106hfwbgvpyzc3k.jpeg)

Well not anymore, 
Define once, use anywhere from now on.
A custom property is written with a preceding `--` sign before its name with no spaces and called(used) with the `var()` keyword.

![Code Snippet](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/x8ep9wxv55a9gnk8rcqe.jpeg)

## Features of CSS Variables

1. **Flexibility:**
One great benefit of Custom properties is that you can structure and combine different variables for more flexibility. 

Any value you can think of can be converted into a variable.

![Code Snippet](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vu0z1hax6ze5oj3h5q54.jpeg)

2. **Redefining Your Variables:**
An Environment is like a world within itself for a code block.
The Code within an environment doesn't care anything about anything outside its environment and obeys the rules of its own Environment.

With CSS variables, You can also redefine or change the value of a custom property with a new value within a specific element and it will work with that value in its local environment instead of the globally defined custom property.

![Code Snippet](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kg9l5tfnvs8ywosyf9wt.jpeg)

1. **Using `calc()` function with your variables:**
The `calc()` function can perform basic mathematical operations in CSS.
Make your whole layout responsive by using it with predefined custom properties which helps in structuring the sizes of your elements.


![Code Snippet](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mn8fxj6cvwlvzenb5byu.jpg)

#### This blog was just an introduction to the awesomeness of CSS variables. 

There are a whole lot of things you can achieve with the custom properties, with your creativity, so keep practising with them.