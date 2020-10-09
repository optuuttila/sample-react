import React from 'react'
import roleService from './RoleService';

const RoledComponent = ({ children, role }) => (
    <>
        { roleService.isVisible(role) && children}
    </>
);

export default RoledComponent;
