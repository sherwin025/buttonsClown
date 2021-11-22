import { fetchClowns, fetchCompleted, fetchRequests } from "./dataAccess.js"
import { site } from "./site.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchCompleted().then(
            () => {
                return fetchClowns()
            }
        )
        .then(
            () => {
                return fetchRequests()
            }
        )
        .then(
            () => {
                mainContainer.innerHTML = site()
            }
        )

}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)