
import { completedParty } from "./completed.js"
import { deleteRequest, getRequests, getClowns } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")


mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("deny--")) {
        const [, requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})

mainContainer.addEventListener("change", event => {
    if (event.target.name === "clown"){
    const [clownId, partyId] = event.target.value.split("--")
    const clownsId = parseInt(clownId)
    const partysId=parseInt(partyId)
    completedParty(partysId, clownsId)
    deleteRequest(parseInt(partyId))
    }
})

export const partyRequests = () => {
    const clowns = getClowns()
    const parties = getRequests()
    const partiesSorted = parties.sort((a, b) => new Date(a.partydate) - new Date(b.partydate))


    const clownList = (clown, request) => {
        return `<option name="clown" value="${clown.id}--${request.id}">${clown.name}</option>`
    }
    const partyList = (request) => {
        return `<li id="request--${request.id}"> ${request.partydate}, ${request.address} <button class="request__delete" id="deny--${request.id}"> Deny </button>  
            <select name="clown" id="clown">
                <option value="default"> Who Performed?</option>
                ${clowns.map((clown) => clownList(clown, request)).join("")}
        </select>
        </l1>`
    }


    let html = `
        <ul>
        ${partiesSorted.map(partyList).join("")}
        </ul>
    `

    return html
}


