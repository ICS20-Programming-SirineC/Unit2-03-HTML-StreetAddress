// Copyright (c) 2022 Sirine Cherkaoui All rights reserved
//
// Created by: Sirine Cherkaoui
// Created on: March 2023
// This file contains the JS functions for index.html

function enterClicked () {
  // this function gets user's street name and street number and displays it back to user

  // get street name from text field
  let streetName = document.getElementById("street-name").value;

  // get street number from text field and cast it to integer
  let streetNumber = parseInt(document.getElementById("street-number").value);

  // display name and age back to user
  document.getElementById("user-info").innerHTML = "Your street name is " + streetName + " and your street number is " + streetNumber + "."
}

