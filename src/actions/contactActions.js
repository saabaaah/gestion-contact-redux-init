
// définitions des action que subient les contacts

// récupérer la liste des contacts!
export const getContacts = () => {
    return {
      type: 'GET_CONTACTS'
    }
}
// supprimer un contact!
export const deleteContact = (id) => {
    return {
    type: 'DELETE_CONTACT',
    payload: id
    }
}
// ajouter un contact!
export const addContact = (newContact) => {
    return {
        type: 'ADD_CONTACT',
        payload : newContact
    }
}