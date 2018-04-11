import { Template } from 'meteor/templating';
import { Lists } from '../api/tasks.js'; //importind Mongo DB for Std List

import './task.html';


Template.Std.events({
  'click .toggle-checked'() {
    // Set the checked property to the opposite of its current value
    Lists.update(this._id, {
      $set: { checked: ! this.checked },
    });
  },
  'click .delete'() {
    Lists.remove(this._id);
  },
});
