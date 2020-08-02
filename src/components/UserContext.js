import React from 'react'

const userContext=React.createContext('sexyboii')

const userProvide=userContext.Provider
const userConsumer=userContext.Consumer

export {userProvide,userConsumer}