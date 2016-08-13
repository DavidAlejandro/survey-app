import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import Questions from '../questionsCollection.js';

Meteor.publish('allQuestions', ()=> {
  return Questions.find();
});

Meteor.publish('questionSet', ()=> {
  // return Questions.find();
});

Meteor.methods({
  'questions.insert'(text=String, type=String, options=[]){
    check(text, String);
    check(type, String);
    check(options, Array);
    Questions.insert({text, type, options});
  }
});
