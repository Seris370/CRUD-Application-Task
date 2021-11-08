import React from 'react'
import axios from 'axios';
import APIService from './ApiService'
import { Button, Divider } from '@material-ui/core';
import './App.css';

const ITEMS_API_REST_URL = "http://localhost:8080/items";

export default class ItemComponent extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
            items: ''
        }
    }
    
    componentDidMount(){
        APIService.getItems().then((data) => {
            console.log(data)
            this.setState({ items: data.data })
            console.log(this.state.data)
          })
          .catch(function (ex) {
              console.log('Response parsing failed. Error: ', ex);
          });;
    }

    refreshPage() {
        window.location.reload(false);
      }

    render() {
        return (
            <div className="center">
                <h5> Items </h5>
                <br/>
                <Divider/>
                <div>{this.state.items}</div>
                <Divider/>
                <Button onClick={this.refreshPage}>Refresh</Button>
            </div>
        )
    }
}
