import invock, {Component} from "invock-js";

export default class Message extends Component {
    
    constructor(props) {
        super(props);
        this.clone = true;
    }
    
    beforeRender() {
        if (this.props.hasOwnProperty("type") === false) {
            this.props.type = "success";
        }
    }
    
    render() {
        return `
            <desktop>
                <div class="message {{props.type}}">
                    {{props.message}}
                </div>
            </desktop>
            <mobile>
                <div class="message {{props.type}}">
                    {{props.message}}
                </div>
            </mobile>
        `;
    }
}

invock.export("Message", Message);