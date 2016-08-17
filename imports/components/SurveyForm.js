/**
 * File: imports/components/TodoForm.js
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

import {
  Row,
  Col,
  Grid,
  Form,
  Alert,
  Button,
  Checkbox,
  FormGroup,
  FormControl,
  Icon,
  ControlLabel } from '@sketchpixy/rubix';

export default class SurveyForm extends React.Component {
  state = {
	errors: [],
  };

  _renderMultipleSelection()
  {
    return(
      <FormGroup>
        <FormControl type='text' placeholder='New answer' autoFocus />
        <Button bsStyle='green' rounded>
          <Icon glyph='icon-ikons-plus'/>
        </Button>
      </FormGroup>
    );
  }

_getQuestionTypes()
  {
    const types = ['multiple choice', 'yes or no', 'unique selection', 'choose one'];
    return types.map((type)=>{return (<option value={type}>{type}</option>)});
  }

  _handleSubmit(e)
  {
    e.preventDefault();
  }


  render() {
	let errors = this.state.errors.length ?
	  (
		<Alert danger dismissible>
		  {this.state.errors.map(({ message }, i) => {
			return <div key={i}>{message}</div>
		  })}
		</Alert>
	  ) : null;

	return (
	  <div>
		{errors}

		<Form horizontal onSubmit={::this._handleSubmit}>
		  <FormGroup>
			<Col sm={12}>
        <ControlLabel>Survey Title</ControlLabel>
        <FormControl type='text' autoFocus/>
        <ControlLabel>Add Questions</ControlLabel>
        <FormControl type='text' placeholder="new question"/>
        <ControlLabel>Question Type</ControlLabel>
        <FormControl componentClass="select">
          {this._getQuestionTypes()}
    	  </FormControl>
			</Col>
		  </FormGroup>

      <FormGroup>
      <Col sm={12}>
        
      </Col>
      </FormGroup>

      <FormGroup>
      <Col sm={12}>
        <Button bsStyle='green' type="submit">
          <Icon glyph="icon-feather-plus" />
        </Button>
      </Col>
      </FormGroup>
		</Form>
	  </div>
	);
  }
}
