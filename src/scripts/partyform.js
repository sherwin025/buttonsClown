import { sendRequest } from "./dataAccess.js"
const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const userpartyParentName = document.querySelector("input[name='partyParentName']").value
        const userpartyChildName = document.querySelector("input[name='partyChildName']").value
        const userpartyAddress = document.querySelector("input[name='partyAddress']").value
        const userpartyDate = document.querySelector("input[name='partyDate']").value
        const userpartyGuest = document.querySelector("input[name='partyGuest']").value
        const userpartyLength = document.querySelector("input[name='partyLength']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            partydate: userpartyDate,
            length: userpartyLength,
            parentname: userpartyParentName ,
            childname: userpartyChildName ,
            numberofguests: userpartyGuest,
            address: userpartyAddress ,
        }

        // Send the data to the API for permanent storage
        sendRequest(dataToSendToAPI)
    }
})

export const partyForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="partyParentName">Parents Name</label>
            <input type="text" name="partyParentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partyChildName">Child's Name</label>
            <input type="text" name="partyChildName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partyAddress">Address</label>
            <input type="text" name="partyAddress" class="input" />
        </div>
        <div class="field">
            <label class="label" for="partyGuest"># of people</label>
            <input type="number" name="partyGuest" class="input" />
        </div>
        <div class="field">
        <label class="label" for="partyLength">Length in hours</label>
        <input type="number" name="partyLength" class="input" />
    </div>
        <div class="field">
            <label class="label" for="partyDate">Date</label>
            <input type="date" name="partyDate" class="input" />
        </div>

        <button class="button" id="submitRequest">Submit Request</button>
    `

    return html
}