import { partyRequests } from "./listparties.js"
import {partyForm} from "./partyForm.js"
import { completedPartiesHtml } from "./completed.js"



export const site = () => {
    return `
    <h1>Clown Town </h1>
    <section class="partyForm">
        ${partyForm()}
    </section>

    <section class="partyRequests">
        <h2>Party Requests</h2>
        ${partyRequests()}
    </section>

    <section class="completedParty"> 
        <h2> Completed Parties </h2> 
        ${completedPartiesHtml()}
        </section>
    `
    
}