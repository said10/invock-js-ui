import invock, {Component} from "invock-js";

export default class Table extends Component {
    
    beforeRender() {
        if (this.props.adaptive) {
            var l = this.props.names.length;
            var total_width = 100 - (l*2);
            this.props.width_td = (total_width/l)+"%";
        }
        else {
            this.props.width_td = "auto";
        }
        
    }
    
    afterRender() {
       this.parent.find("tbody").findAll("tr:nth-child(odd)").addClass("zebra");
    }
    
    
    render() {
        return `
            <desktop>
                <div class="table-container">
                    <table cellSpacing="0" cellPadding="0" border="0" width="100%">
                        <thead class="header-table shadow">
                            <tr>
                                {% for label in props.names %}
                                    <th width="{{props.width_td}}">{{label|title}}</th>
                                {% endfor %}
                            </tr>
                        </thead>
                        <tbody>
                            {% for row in props.rows %}
                                <tr class="">
                                    {% for column in row %}
                                        <td width="{{props.width_td}}" style="width:{{props.width_td}};">{{column|title}}</td>
                                    {% endfor %}
                                </tr>
                            {% endfor %}
                        </tbody>
                            
                    </table>
                </div>
            </desktop>
            <mobile>
                
            </mobile>
        `;
    }
}

invock.export("Table", Table);