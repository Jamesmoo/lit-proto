import { html } from "./lit-html";

const eventHandler = () => {
    alert("Change this buttons event handler based on your application.");
}

const clearButton = () => html`
    <button class="button clear" @onchange=${eventHandler}>Clear</button>
`;

export default clearButton;