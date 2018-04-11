import { Template } from 'meteor/templating';

import { Lists } from '../api/tasks.js';

import './task.js';
import './body.html';

Template.body.helpers({
  list() {
    // Show newest tasks at the top
    // , { sort: { createdAt: 1 } } for dec
    return Lists.find({});
  },
});

Template.body.events({
  'submit .new-std': function(event) {

    // Get value from form element
    // const target = event.target;
    var name = event.target.name.value;
    var email = event.target.email.value;
    var phone = event.target.phone.value;
    var dob = event.target.dob.value;

    // Insert a task into the collection
    Lists.insert({
      name: name,
      email: email,
      phone: phone,
      dob: dob,
      createdAt: new Date(), // current time
    });

    // Clear form
    event.target.name.value = '';
    event.target.email.value = '';
    event.target.phone.value = '';
    event.target.dob.value = '';

    return false;
  },
});
