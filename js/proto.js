import { html, render } from './lit-html.js'
import { repeat } from './repeat.js'

const dropdowns = {
	"columnOptions": [
		{ "value": "Management Assistant", "ddValue": "managementAssistant" },
		{ "value": "Alternate Management Assistant", "ddValue": "alternateManagementAssistant"}
	],
	"operatorOptions": [
		{"value": "not equal to", "ddValue": "notEqualTo" },
		{"value": "equal to", "ddValue": "equalTo" },
		{"value": "contains", "ddValue": "contains" },
		{"value": "doesn't contain", "ddValue": "doesntContain" }
	],
	"employeeOptions": [
		{"value": "Smith, Morty (309)", "ddValue": "smithMorty" },
		{"value": "Steiner, Braden (309)", "ddValue": "steinerBraden" },
		{"value": "Adams, James (309)", "ddValue": "adamsJames" }
	],
	"logicalOptions": [
		{"value": "And", "ddValue": "and" },
		{"value": "Or", "ddValue": "or" }
	]
};
const dropdownOptions = (options) => html`
	${options.map( (opt) => 
        html`<option value="${opt.ddValue}">${opt.value}</option>` )}
`;
    
const searchBox = (dropdowns) => html`
	
  Search Criteria:<br>
  <label>
    <input type="checkbox">
  </label> Search active organizations only
​
  <div id="parameters">
    <select>
			${dropdownOptions(dropdowns.columnOptions)}
      <option value="alternateManagementAssistant">Alternate Management Assistant</option>
    </select>
    <select>
			${dropdownOptions(dropdowns.operatorOptions)}
      <option value="notEqualTo">not equal to</option>
    </select>
    <select>
			${dropdownOptions(dropdowns.employeeOptions)}
      <option value="smithMorty">Smith, Morty (309)</option>
    </select>
    <select>
			${dropdownOptions(dropdowns.logicalOptions)}
      <option value="Alternate Management Assistant">Alternate Management Assistant</option>
    </select>
  </div>
​
  <button>Clear</button>
  <button>Search</button>  
`
render(searchBox(dropdowns), document.getElementById('search'));

const searchedOrgs = () => html`
    
    Searched Organizations:[hard coded]
    <table>
        <tr>
            <th>ID</th>
            <th>Official Name</th>
            <th>Short Name</th>
            <th>Type</th>
            <th>Parent Organization</th>
            <th>Description</th>
            <th>Primary Supervisor</th>
            <th>Alternate Supervisor</th>
            <th>Primary Management Assistant</th>
            <th>Alternate management Assistant</th>
            <th>Active</th>
        </tr>
        <tr>
            <td>100</td>
            <td>309 SMXG/MXDS</td>
            <td>309 SMXG/MXDS</td>
            <td>Squadron</td>
            <td>309 SMXG</td>
            <td>Business Operations</td>
            <td>Brown, Doc</td>
            <td></td>
            <td>Simpson, Homer</td>
            <td>Griffin, Peter</td>
            <td>Y</td>
        </tr>
    </table>
`;

render(searchedOrgs(), document.getElementById('searchedOrgs'));


const list = [
    {
        id: '100',
        officialName: '309 SMXG/MXDS',
        shortName: '309 SMXG/MXDS',
        type: 'Squadron',
        parentOrg: '309 SMXG',
        description: 'Business Operations',
        primarySupervisor: 'Brown, Doc',
        alternateSupervisor: '',
        pma: 'Simpsonss, Homer',
        ama: 'Griffin, Peter',
        active: 'Y'
    },
]

const searchedOrgsList = (org) => html`
    ${repeat(org, (i) => i.id, )}
`;

const listTemplate = (items) => html`
  <ul>
    ${repeat(items, (i) => i.id, (i, index) => html`
      <li>${index}: ${i.name}</li>`)}
  </ul>
`;

const listExample = [
    {
        id: 'ID 1',
        name: 'Madison'
    },
    {
        id: 'ID 2',
        name: 'Emily'
    },
    {
        id: 'ID 2',
        name: 'Abigail'
    }
]

render(listTemplate(listExample), document.getElementById('list-container'));