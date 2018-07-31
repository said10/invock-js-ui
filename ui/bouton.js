import invock, {Component} from "invock-js";

export default class Bouton extends Component {
    
    constructor(props) {
        super(props);
        this.clone = true;
        if (this.props.hasOwnProperty("onClick") === true) {
            var selector = "input[type='button']";
            this.addEvent(selector, "click", "clickBouton");
        }
    }
    
    clickBouton(evt, self) {
        self.callEventCallback(self.props.onClick, this, evt);
    }
    
    
    
    render() {
        return `
            <desktop>
                <input type="button" class="background shadow {{props.classes|default}}" value="{{props.text|default:Please Add Text}}" id="{{props.id|default}}" />
                    
            </desktop>
            <mobile>
                <input type="button" class="background shadow {{props.classes|default}}" value="{{props.text|default:Please Add Text}}" id="{{props.id|default}}" />
            </mobile>
        `;
    }
}

invock.export("Bouton", Bouton);