export const selectStudent = (student) => {
    return {
        type: 'USER_SELECTED',
        payload: student
    }
};