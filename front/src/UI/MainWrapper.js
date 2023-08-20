import React from 'react'

function MainWrapper({children}) {
    const style = {
        paddingTop: "100px", 
        margin: "0",
        marginLeft: "100px",
        marginRight: "100px"
    }
    
    return <div style={style}>{children}</div>
}

export default MainWrapper
