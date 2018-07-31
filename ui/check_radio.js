import invock, {Component} from "invock-js";

export default class CheckRadio extends Component {
    
    constructor(props) {
        super(props);
        this.clone = true;
        var type = this.props.type || "checkbox";
        if (this.props.hasOwnProperty("onClick") === true) {
            var selector = "input[name='"+this.props.name+"']";
            this.addEvent(selector, "click", "clickCheck");
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
    
    clickCheck(evt, self) { 
        self.callEventCallback(self.props.onClick, this, evt);
    }
    afterRender() {
        if (this.props.checked === "true" || this.props.checked === true) {
            var selector_checked = "input[name='"+this.props.name+"']";
            this.parent.find(selector_checked).setAttr("checked", "checked");
        }
    }
    
    render() {
        return `
            <desktop>
                <p class="relative">
                    
                    <input name="{{props.name|default}}" type="{{props.type|default:checkbox}}" class="{{props.class_required}}" />
                    <label>{{props.label|default:"Please Add label"}}</label>
                </p>
            </desktop>
            <mobile>
                
            </mobile>
        `;
    }
}

invock.export("CheckRadio", CheckRadio);