import invock, {Component} from "invock-js";

export default class Select extends Component {
    
    constructor(props) {
        super(props);
        this.clone = true;
        if (this.props.hasOwnProperty("onChange") === true) {
            var selector = "select[name='"+this.props.name+"']";
            this.addEvent(selector, "change", "changeSelect");
        }
    }
    
    beforeRender() {
        if (this.props.required === true || this.props.required === "true" ) {
            this.props.class_required = "required";
        }
        else {
            this.props.class_required = "";
        }
    }
    
    changeSelect(evt, self) {        
        self.callEventCallback(self.props.onChange, this, evt);
    }
    
    
    render() {
        return `
            <desktop>
                <p>
                    <label>{{props.label|default:"Please Add label"}}</label>
                    <select name="{{props.name|default}}" class="{{props.class_required}}" data-rule="{{props.rule|default:string}}">
                        <option value="">Select {{props.label|default:"Please Add label"}}</option>
                        {% for option in props.options %}
                            <option value="{{option.value}}">{{option.label|default}}</option>
                        {% endfor %}
                    </select>
                </p>
            </desktop>
            <mobile>
                
            </mobile>
        `;
    }
}

invock.export("Select", Select);