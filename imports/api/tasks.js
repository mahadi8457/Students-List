import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
// export const Tasks = new Mongo.Collection('tasks');
export const Lists = new Mongo.Collection('lists');



Meteor.methods({
  'lists.insert'(name, email, phone, dob) {
    check(name, String);
 
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
 
    Lists.insert({
      name: name,
      email: email,
      phone: phone,
      dob: dob,
      createdAt: new Date(), // current time
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });
  },
  
  'lists.remove'(lists) {
    check(lists._id, String);
 
    Lists.remove(lists._id);
  },

  'lists.setChecked'(taskId, setChecked) {
    check(taskId, String);
    check(setChecked, Boolean);
 
    Lists.update(taskId, { $set: { checked: setChecked } });
  },

});

