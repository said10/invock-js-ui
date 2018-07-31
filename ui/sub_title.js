import invock, {Component} from "invock-js";

export default class SubTitle extends Component {
    
    render() {
        return `
            <desktop>
                <div class="bg box20 {{props.classes|default}}">
                    <h2>{{props.title}}</h2>
                </div>
            </desktop>
            <mobile>
                <div class="bg box20 {{props.classes|default}}">
                    <h2>{{props.title}}</h2>
                </div>
            </mobile>
        `;
    }
}

invock.export("SubTitle", SubTitle);