import React from 'react'
import axios from 'axios';
import { Button } from '@material-ui/core';
import './App.css';

const ITEMS_API_REST_URL = "http://localhost:8080/delete?id=";

export default class DeleteComponent extends React.Component {

    state = {
        text: '',
      }
    
      handleChange = event => {
        this.setState({ text: event.target.value });
      }
    
      handleSubmit = event => {
        event.preventDefault();
    
        const item = {
          id: this.state.text
        };
    
        console.log(item)
        axios.delete(ITEMS_API_REST_URL + item.id)
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
                <h5> Delete item </h5>
                Id:
                <br/>
                <input type="id" name="id" onChange={this.handleChange} />
              </label>
              <br/>
              <Button type="submit">Delete</Button>
            </form>
          </div>
        )
      }
}
