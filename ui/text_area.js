import invock, {Component} from "invock-js";

export default class TextArea extends Component {
    
    constructor(props) {
        super(props);
        this.clone = true;
        this.use_alias = true;
         if (this.props.hasOwnProperty("onChange") === true) {
            var selector = "textarea[name='"+this.props.name+"']";
            this.addEvent(selector, "keyup", "inputChange");
        }
        
    }
    
    inputChange(evt, self) {
        self.callEventCallback(self.props.onChange, this, evt);
    }
    
    beforeRender() {
        this.alias = this.name+"_"+this.props.name;
        if (this.props.required === true || this.props.required === "true" ) {
            this.props.class_required = "required";
        }
        else {
            this.props.class_required = "";
        }
    }
    
    render() {
        return `
            <desktop>
                <p>
                    <label>{{props.label|default:"Please Add label"}}</label>
                    <textarea  name="{{props.name|default}}" placeholder="{{props.placeholder|default}}" class="{{props.class_required}}" data-rule="{{props.rule|default:string}}"></textarea>
                </p>
            </desktop>
            <mobile>
                
            </mobile>
        `;
    }
}

invock.export("TextArea", TextArea);