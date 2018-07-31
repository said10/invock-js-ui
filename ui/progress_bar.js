import invock, {Component} from "invock-js";

export default class ProgressBar extends Component {
    
    constructor(props) {
        super(props);
        this.clone = true;
        if (this.props.hasOwnProperty("value") === false) {
            this.props.value = 0;
        }
        var value = parseInt(this.props.value);
        this.state = {
            pourcent  : value
        }
    }
    
    beforeRender () {
        this.props.theme = "theme-red";
    }
    
    setChange(value) {
        if (value > 100) {
            value = 100;
        }
        this.setState({
            value : value
        })
    }
    
    afterUpdate() {
        this.changeProgressColor();
    }
    
    changeProgressColor() {
        var value = parseInt(this.state.value);
        var theme = "red";
        if (value >= 25 && value <= 50) {
            theme = "theme-yellow";
        }
        if (value >= 50 && value <= 80) {
            theme = "theme-bleu-web";
        }
        if (value >= 80) {
            theme = "theme-green";
        }
        if (value > 100) {
            this.props.value = 100;
        }
        this.parent.find(".parent-progress").removeClass(this.props.theme);
        this.parent.find(".parent-progress").addClass(theme);
        this.props.theme = theme;
    }
    
    afterRender() {
        this.changeProgressColor();
    }
    
    
    
    render() {
        return `
            <desktop>
                
                <div class="top20 bottom20 parent-progress {{props.theme}} {{props.column|default}}">
                  <label class="block bottom5">{{props.column|default}}</label>
                   <div class="progress-bar">
                        <div class="value-progress background shadow animate" style="width: {{state.value|default:0}}%;"></div>
                    </div>
               </div>
                    
            </desktop>
            <mobile>
                <div>
                    <label class="block bottom5">{{props.column|default}}</label>
                   <div class="progress-bar">
                        <div class="value-progress background shadow" style="width: {{state.value|default}}%;"></div>
                    </div>
                </div>
            </mobile>
        `;
    }
}

invock.export("ProgressBar", ProgressBar);