import invock, {Component} from "invock-js";

export default class Paragraph extends Component {
    
    render() {
        return `
            <desktop>
                <div class="box10-0 {{props.classes|default}}">
                   <p>{{props.text}}</p>
               </div>
            </desktop>
            <mobile>
                <div class="box10 {{props.classes|default}}">
                   <p>{{props.text}}</p>
               </div>
            </mobile>
        `;
    }
}

invock.export("Paragraph", Paragraph);