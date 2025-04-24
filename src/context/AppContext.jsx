import { createContext } from "react";

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const currency = '₹'

    const calculateAge = (dob) => {
    if (!dob || dob === 'Not Selected') return 'N/A'

    const birthDate = new Date(dob)

    if (isNaN(birthDate.getTime())) return 'Invalid DOB'

    const today = new Date()
    let age = today.getFullYear() - birthDate.getFullYear()

    return age
}

    


    const slotDateFormat = (slotDate) => {
        if (!slotDate) return 'Invalid Date'

        const dateArray = slotDate.split('-')  // <-- change `_` to `-`
        const months = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

        return dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2]
    }


    const value = {
        calculateAge,
        slotDateFormat,
        currency
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider