import React from 'react'






const SideDrawer = (props) => {
    let drawerClasses = 'side-drawer'
    if(this.props.show) {
       drawerClasses = 'side-drawer open'
    }
    return (
        <div className={drawerClasses}>
            <h1>Hello, This works</h1>
        </div>
    )
}


export default SideDrawer