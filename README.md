# HLK - Happy Learnable Kiosk

This is a repository for HLK, Happy Learnable Kiosk

## Overview
HLK is a project for KAIST CS374(Introduction to Human-Computer Interaction) in Spring, 2021. We propose a new kiosk design for middle-aged users who feel uncomfortable with using previous kiosk.   
Our protype is written in Korean for our target users. 

Link for Demo: [URL](https://hci-hlk-f2fb4.web.app/)

## Description of codes

### App.js
App.js is the main component of our prototype. It includes greeting page and renders components. One of the main component is SelectCategory, which asks users what to order. Another main compoenet is Cart, which will show what the user has selected.   
In our kiosk prototype, all componenets are rendered at the bottom of previous components so that the user can see what he or she has selected. 

### SelectCategory
SelectCategory asks the user what to order, burger, drinks or sides. Choosing one of the options renders next components that will help the user find what he or she wants

### SelectMethod
SelectMethods asks the user how to find the menu. 4 methods are available, find by name search, find by ingredient, find by recommendation and view all menus. Each of the methods are implemented in [NameSearch](https://github.com/sewon0918/HCI_HLK/tree/master/src/components/NameSearch), [Ingredient](https://github.com/sewon0918/HCI_HLK/tree/master/src/components/Ingredient), [Recommendation](https://github.com/sewon0918/HCI_HLK/tree/master/src/components/Recommendation) and [ShowBurgers](https://github.com/sewon0918/HCI_HLK/tree/master/src/components/SelectMethod)   

### Firebase
In our implementation, firebase is used to record what user has put in the cart. All the ordered menus are saved in our database, and cart element shows the items in the database, which is implemented in [Howmany](https://github.com/sewon0918/HCI_HLK/tree/master/src/components/HowMany) compoenet

## Libraries & Frameworks
react   
react-DOM   
react-scroll-to-bottom   
@testing-library/react   
firebase   
@material-ui/core/TextField   
@material-ui/lab/Autocomplete   
react-speech-kit   

## Contributers
[Kangsan Kim](https://github.com/KangsanKim07)

[Jaehyun Kim](https://github.com/Jennyjaen)

[Sewon Lim](https://github.com/sewon0918)

[Sookyung Han](https://github.com/suplookie)
