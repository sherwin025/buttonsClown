const API = "http://localhost:8088"

const mainContainer = document.querySelector("#container")

const applicationState = {
    requests: [],
    clowns: [],
    completed: []
}

export const fetchRequests = () => {
    return fetch(`${API}/requests`)
        .then(response => response.json())
        .then(
            (serviceRequests) => {
                // Store the external state in application state
                applicationState.requests = serviceRequests
            }
        )
}

export const fetchClowns = () => {
    return fetch(`${API}/clowns`)
        .then(response => response.json())
        .then(
            (serviceRequests) => {
                // Store the external state in application state
                applicationState.clowns = serviceRequests
            }
        )
}

export const fetchCompleted = () => {
    return fetch(`${API}/completed`)
        .then(response => response.json())
        .then(
            (serviceRequests) => {
                // Store the external state in application state
                applicationState.completed = serviceRequests
            }
        )
}

export const getRequests = () => {
    return applicationState.requests.map((request)=> ({...request}))
}

export const getCompleted = () => {
    return applicationState.completed.map((request)=> ({...request}))
}

export const getClowns = () => {
    return applicationState.clowns.map((request)=> ({...request}))
}

export const deleteRequest = (id) => {
    return fetch(`${API}/requests/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}

export const sendRequest = (userServiceRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }


    return fetch(`${API}/requests`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })

}

export const sendCompleted = (userServiceRequest) => {
    const fetchsOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }


    return fetch(`${API}/completed`, fetchsOptions)
    .then(response => response.json())
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })

}
