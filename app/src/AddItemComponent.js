import React from 'react'
import axios from 'axios';
import { Button } from '@material-ui/core';
import './App.css';

const ITEMS_API_REST_URL = "http://localhost:8080/add?text=";

export default class ItemComponent extends React.Component {

    state = {
        text: '',
      }
    
      handleChange = event => {
        this.setState({ text: event.target.value });
      }
    
      handleSubmit = event => {
        event.preventDefault();
    
        const item = {
          text: this.state.text
        };
    
        console.log(item)
        axios.post(ITEMS_API_REST_URL + item.text)
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }
    
      render() {
        return (
          <div className="center">
            <form onSubmit={this.handleSubmit}>
              <label>
                  <h5> Add item </h5>
                Text:
                <br/>
                <input type="text" name="text" onChange={this.handleChange} />
              </label>
              <br/>
              <Button type="submit">Add</Button>
            </form>
          </div>
        )
      }
}
