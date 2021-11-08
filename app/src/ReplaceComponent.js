import React from 'react'
import axios from 'axios';
import { Button } from '@material-ui/core';
import './App.css';

const ITEMS_API_REST_URL = "http://localhost:8080/replace?";

export default class ReplaceComponent extends React.Component {

    state = {
        id: '',
        text: '',
      }
    
      handleChangeText = event => {
        console.log(event.target.value)
        this.setState({ text: event.target.value });
      }

      handleChangeId = event => {
        console.log(event.target.value)
        this.setState({ id: event.target.value });
      }
    
      handleSubmit = event => {
        event.preventDefault();
    
        const item = {
          id : this.state.id,
          text: this.state.text
        };
    
        console.log(item)
        axios.put(ITEMS_API_REST_URL + 'id=' + item.id + '&text=' + item.text)
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
              <h5>Replace item</h5>
              Id:
              <br/>
                <input type="id" name="id" onChange={this.handleChangeId} />
              </label>
              <br/>
              <label>
                Text:
                <br/>
                <input type="text" name="text" onChange={this.handleChangeText} />
              </label>
              <br/>
              <Button type="submit">Replace</Button>
            </form>
          </div>
        )
      }
}
