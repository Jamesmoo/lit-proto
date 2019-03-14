import { html, render } from './lit-html.js'

// import {html, render} from 'https://unpkg.com/lit-html?module';
//import { repeat } from './repeat.js'
import { orgs } from './org_data.js'
import { KeyValDD, uniqueObjBy, compareByProperty } from './at_array_util.js'
// import { clearBtnClickHandler } from './events.js'
// import { clearButton } from './clearButton';

function myfunc() {alert('myfunc nothing');}

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
	"primarySupervisorOptions":
		uniqueObjBy(orgs.map((org) =>  {return new KeyValDD(org.PRIMARY_SUPERVISOR_NAME,org.PRIMARY_SUPERVISOR_ID)}).sort(compareByProperty('value')),x => x.ddValue)
	,
	"altSupervisorOptions":
		uniqueObjBy(orgs.map((org) =>  {return new KeyValDD(org.ALTERNATE_SUPERVISOR_NAME,org.ALTERNATE_SUPERVISOR_ID)}).sort(compareByProperty('value')),x => x.ddValue)
	,
	"timeKeeperOptions": /*[
		{"value": "Smith, Morty (309)", "ddValue": "smithMorty" },
		{"value": "Steiner, Braden (309)", "ddValue": "steinerBraden" },
		{"value": "Adams, James (309)", "ddValue": "adamsJames" }]*/
		uniqueObjBy(orgs.map((org) =>  {return new KeyValDD(org.PRIMARY_TIMEKEEPER_NAME,org.PRIMARY_TIMEKEEPER_ID)}).sort(compareByProperty('value')),x => x.ddValue)
	,
	"altTimeKeeperOptions":
	  uniqueObjBy(orgs.map((org) =>  {return new KeyValDD(org.ALTERNATE_TIMEKEEPER_NAME,org.ALTERNATE_TIMEKEEPER_ID)}).sort(compareByProperty('value')),x => x.ddValue)
	,
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
  <label class="input-label">
    <input class="input-checkbox" type="checkbox">
  </label> Search active organizations only
​
  <div class="input-parameters">
    <select class="control-management">
			${dropdownOptions(dropdowns.columnOptions)}
    </select>
    <select class="control-options">
			${dropdownOptions(dropdowns.operatorOptions)}
    </select>
    <select class="control-employee">
			${dropdownOptions(dropdowns.timeKeeperOptions)}
    </select>
    <select class="control-assistant">
			${dropdownOptions(dropdowns.logicalOptions)}
    </select>
  </div>
​
  <button @click=${e => console.log('clicked')}>Click Me</button>
  <button class="button search">Search</button>
`
render(searchBox(dropdowns), document.getElementById('search-container'));

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

render(searchedOrgs(), document.getElementById('results-container'));


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