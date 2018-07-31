# Invock-js-ui
Module for the invock-js Framework to build beautiful & clean UI quickly.

It's Aplha Version to test the UI components.

## Table of Contents
- installation
- Title
- SubTitle
- Paragraph
- Input && TextArea
- CheckRadio
- Select
- ProgressBar
- Table
- Message
- Form
- Navigation  / Menu
- Modal / Popup
- Chart


## Installation

```js
npm install invock-js-ui
```


## Title
this component for Title UI, like : 
- Header
- Title of Section
```js
import invock, {Component} from "invock-js";
import {Title} from "invock-js-ui";

class App extends Component {
    render() {
        return `
            <div id="app" class="theme-bleu">
                {% Title title="hello world" classes="uppercase align-center" %}
            </div>
        `;
    }
}

invock.export("App", App);
invock.mount({ parent : "#container", root : "{% App %}" });
```
### Parameters Title

| Parameter     | Type          | Exemple                |
| ------------- | ------------- | ---------------------- |
| Title         | String        | Hello World            |
| classes       | String        | align-center uppercase |
| type          | String        | h1 OR h2 OR h3         |


## SubTitle
this component for display Sub Title UI
```js
import invock, {Component} from "invock-js";
import {SubTitle} from "invock-js-ui";

class App extends Component {
    render() {
        return `
            <div id="app" class="theme-bleu">
                {% SubTitle title="hello world" classes="uppercase align-center" %}
            </div>
        `;
    }
}

invock.export("App", App);
invock.mount({ parent : "#container", root : "{% App %}" });
```
### Parameters SubTitle

| Parameter     | Type          | Exemple                |
| ------------- | ------------- | ---------------------- |
| Title         | String        | Hello World            |
| classes       | String        | align-center uppercase |


## Paragraph
this component for display Long Text in Paragraph Element
```js
import invock, {Component} from "invock-js";
import {Paragraph} from "invock-js-ui";

class App extends Component {
    render() {
        return `
            <div id="app" class="theme-bleu">
                {% Paragraph text="hello world" classes="uppercase align-center" %}
            </div>
        `;
    }
}

invock.export("App", App);
invock.mount({ parent : "#container", root : "{% App %}" });
```
### Parameters Paragraph

| Parameter     | Type          | Exemple                |
| ------------- | ------------- | ---------------------- |
| text          | String        | lorem ipsum            |
| classes       | String        | align-center uppercase |

## Input && TextArea
this component for display Input Element
it's important to enter the Name Property of Input && TextArea Components
```js
import invock, {Component} from "invock-js";
import {Input, TextArea} from "invock-js-ui";

class App extends Component {
    
    FirstNameChange(evt, self) {
        console.log(this);
         // return input Element
        console.log(evt);
        // return Event Object
        console.log(self);
        // return App Component
    }
    render() {
        return `
            <div id="app" class="theme-bleu">
                {% Input label="First Name" name="first_name" type="text" placeholder="Enter First Name" required="true" rule="string" onChange="{{this.FirstNameChange}}" %}
                {% TextArea label="Message" name="message" type="text" placeholder="Enter a message" required="true" rule="string" %}
            </div>
        `;
    }
}

invock.export("App", App);
invock.mount({ parent : "#container", root : "{% App %}" });
```
### Parameters Input && TextArea

| Parameter     | Type          | Exemple                                                |
| ------------- | ------------- | ------------------------------------------------------ |
| label         | String        | First Name                                             |
| name          | String        | first_name                                             |
| type          | String        | text / email / phone / password / number /...          |
| placeholder   | String        | Enter First Name                                       |           
| required      | Boolean       | true / false                                           |
| rule          | String        | string, email, phone, url, number, boolean, text, date |
| onChange      | Function      | Function in parent Component                           |

## CheckRadio
this component for display CheckBox and Radio Box
it's important to enter the Name Property of CheckRadio Components
```js
import invock, {Component} from "invock-js";
import {CheckRadio} from "invock-js-ui";

class App extends Component {
    
    clickCheck(evt, self) {
        console.log(this);
         // return input Element
        console.log(evt);
        // return Event Object
        console.log(self);
        // return App Component
    }
    render() {
        return `
            <div id="app" class="theme-bleu">
                {% CheckRadio label="Conditions" name="condition" required="true" onClick="{{this.clickCheck}}" %}
                {% CheckRadio type="radio" label="Number 01" name="vote" required="true" value="1" %}
                {% CheckRadio type="radio" label="Number 02" name="vote" required="true" value="2" %}
                {% CheckRadio type="radio" label="Number 03" name="vote" required="true" value="3" %}
            </div>
        `;
    }
}

invock.export("App", App);
invock.mount({ parent : "#container", root : "{% App %}" });
```
### Parameters Input && TextArea

| Parameter     | Type          | Exemple                                                |
| ------------- | ------------- | ------------------------------------------------------ |
| label         | String        | Conditions                                             |
| name          | String        | conditions                                             |
| type          | String        | checkbox / radio                                       |           
| checked       | Boolean       | true / false                                           |           
| required      | Boolean       | true / false                                           |
| onClick       | Function      | Function in parent Component                           |

## Select
this component for display Select Element
it's important to enter the Name Property of Select Component
```js
import invock, {Component} from "invock-js";
import {Select} from "invock-js-ui";

class App extends Component {
    
    constructor(props) {
        super(props);
        this.props.options = [
            { label : "TV", value: "tv" },
            { label : "mobile", value: "mobile" },
            { label : "PC", value: "pc" },
        ];
    }
    
    changeSelect(evt, self) {
        console.log(this);
         // return input Element
        console.log(evt);
        // return Event Object
        console.log(self);
        // return App Component
    }
    render() {
        return `
            <div id="app" class="theme-bleu">
                {% Select label="Type of product" name="product" required="true" options="{{props.options}}" onChange="{{this.changeSelect}}" %}
            </div>
        `;
    }
}

invock.export("App", App);
invock.mount({ parent : "#container", root : "{% App %}" });
```
### Parameters Select

| Parameter     | Type          | Exemple                                                |
| ------------- | ------------- | ------------------------------------------------------ |
| label         | String        | Type of Product                                        |
| name          | String        | type_product                                           |          
| required      | Boolean       | true / false                                           |
| rule          | String        | string, email, phone, url, number, boolean, text, date |
| options       | Array         | [ { label : "PC", value : 1 } ]                        |
| onChange      | Function      | Function in parent Component                           |




## ProgressBar
this component for display ProgressBar Component
```js
import invock, {Component} from "invock-js";
import {ProgressBar} from "invock-js-ui";

class App extends Component {
    
    constructor(props) {
        super(props);
        this.pourcent = 10;
    }
                             
    EventChange(evt, self) {
        self.pourcent +=10;
        self.changePourcent();
    }
    
    changePourcent() {
         var comp = this.getComponent("ProgressBar");
        comp.setChange(this.pourcent);
    }

    render() {
        return `
            <div id="app" class="theme-bleu">
                {% ProgressBar value="10" label="pourcent of tolerance" %}

                <div class="align-center top30">
                    {% Bouton text="Progress" onClick="{{this.EventChange}}" %}
                </div>
            </div>
        `;
    }
}

invock.export("App", App);
invock.mount({ parent : "#container", root : "{% App %}" });
```
### Parameters Select

| Parameter     | Type          | Exemple                                                |
| ------------- | ------------- | ------------------------------------------------------ |
| label         | String        | pourcent of tolerance                                  |
| value         | Number        | 10                                                     | 


## Table
this component for display Table Element
```js
import invock, {Component} from "invock-js";
import {Table} from "invock-js-ui";

class App extends Component {
    
    constructor(props) {
        super(props);
        this.table = {
                names : ["#", "name", "email", "job", "about"],
                rows : [
                    [1, "John Doe", "johndoe@exemple.com", "developper front-end", "About Jogn Doe"],
                    [2, "John Smith", "johnsmith@exemple.com", "developper back-end", "About John Smith"],
                    [3, "Nina Smith", "ninasmith@exemple.com", "Designer", "About Nina Smith"],
                ]
            }
    }

    render() {
        return `
            <div id="app" class="theme-bleu">
                <div>
                    {% Table names="{{this.table.names}}" rows="{{this.table.rows}}" adaptive="true" %}
                </div>
                
            </div>
        `;
    }
}

invock.export("App", App);
invock.mount({ parent : "#container", root : "{% App %}" });
```
### Parameters Table

| Parameter     | Type          | Exemple                                                |
| ------------- | ------------- | ------------------------------------------------------ |
| names         | Array         | Array of names for Header of table ["name", "email]    |
| rows          | Array         | Array of data to display                               | 
| adaptive      | Boolean       | true / false                                           | 
## Message
this component for display Message Composant
```js
import invock, {Component} from "invock-js";
import {Message} from "invock-js-ui";

class App extends Component {

    render() {
        return `
            <div id="app" class="theme-bleu">
                <div>
                    {% Message message="Email has sent" type="success"  %}
                </div>
                
            </div>
        `;
    }
}

invock.export("App", App);
invock.mount({ parent : "#container", root : "{% App %}" });
```
### Parameters Message

| Parameter     | Type          | Exemple                                                |
| ------------- | ------------- | ------------------------------------------------------ |
| message       | String        | Email has sent   |
| type          | String        | success / alert / info / warning                       | 

## Form
comming soon

## Navigation  / Menu
comming soon

## Modal / Popup
comming soon

## Chart
comming soon