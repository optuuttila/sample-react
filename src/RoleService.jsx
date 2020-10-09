const roles = [
    {
        id: "Role1",
        visible: true
    },
    {
        id: "Role2",
        visible: false
    }];


module.exports = {
    isVisible: (roleId) => {
        return roles.find(role => role.id === roleId).visible;
    }
}