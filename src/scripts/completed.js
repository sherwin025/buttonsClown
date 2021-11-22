import { getRequests, sendCompleted, getCompleted, getClowns } from "./dataAccess.js"

export const completedParty = (partyid, clownid) => {
    const requests = getRequests()
    let theEvent = null
    for (const party of requests){
        if (party.id === partyid){
            party["clownid"] = clownid
            theEvent = party
            delete theEvent.id
        }
    }
    return sendCompleted(theEvent)
}


export const completedPartiesHtml = () => {
    let html = `<ul>`
    const gotcompleted = getCompleted()
    const clowns = getClowns()
    const partiesSorted = gotcompleted.sort((a, b) => new Date(a.partydate) - new Date(b.partydate))
    
    for (const party of partiesSorted){
        for(const clown of clowns){
            if(clown.id === party.clownid)
            html += `<li>On ${party.partydate}, ${clown.name} at ${party.address}</li>`
        }
    }

    html += `</ul>`

    return html
}