import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import Surveys from '../surveysCollection.js';

Meteor.publish('allSurveys', ()=> {
  return Surveys.find();
});

// Meteor.publish('questionSet', ()=> {
//   // return Questions.find();
// });

Meteor.methods({
  'surveys.insert'(questions=Array, name=String, options=[]){
    check(text, String);
    check(type, String);
    check(options, Array);
    Surveys.insert({text, type, options});
  }
});
