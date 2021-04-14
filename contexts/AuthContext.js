import React from 'react'

const AuthContext = React.createContext()

export default function AuthProvider({children}) {
    return (
        <AuthContext.provider>
            {children}
        </AuthContext.provider>
    )
}
