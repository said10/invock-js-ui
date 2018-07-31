import invock, {Component} from "invock-js";

export default class Title extends Component {
    
    beforeRender() {
        if (this.props.type === "" || typeof this.props.type === "undefined") {
            this.props.type = "h1";
        }
    }
    
    render() {
        return `
            <desktop>
                <div class="shadow background box20 white-color relative {{props.classes|default}}">
                    {% if props.type = "h1" %}
                        <h1>{{props.title}}</h1>
                    {% endif %}
                    {% if props.type = "h2" %}
                        <h2>{{props.title}}</h1>
                    {% endif %}
                </div>
            </desktop>
            <mobile>
                <div class="shadow background box20 white-color relative {{props.classes|default}}">
                    {% if props.type = "h1" %}
                        <h1>{{props.title}}</h1>
                    {% endif %}
                    {% if props.type = "h2" %}
                        <h2>{{props.title}}</h1>
                    {% endif %}
                </div>
            </mobile>
        `;
    }
}

invock.export("Title", Title);