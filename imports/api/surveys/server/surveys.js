import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import Surveys from '../pollsCollection.js';

Meteor.publish('allSurveys', ()=> {
  return Surveys.find();
});

// Meteor.publish('questionSet', ()=> {
//   // return Questions.find();
// });

Meteor.methods({
  'surveys.insert'(questions=[], name="", answers=[]){
    check(questions, Array);
    check(name, String);
    check(answers, Array);
    Surveys.insert({name, questions, answers});
  },
  'survey.answers.edit'(surveyId="", surveyAnswered=[])
  {
    check(surveyId, String);
    check(surveyAnswered, Array);
    let survey = Survey.findOne(surveyId);
    if (survey) {
      Survey.update({_id: surveyId}, {$push:{answers:surveyAnswered}});
    }
  }
});
