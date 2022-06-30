export const updateProperties = (oldProperties, newProperties) => {
    return {
        ...oldProperties,
        ...newProperties,
    }
}