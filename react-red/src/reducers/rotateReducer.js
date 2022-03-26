// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch (action.type) {
        case "rotate":
            return {
                rotating: action.payload //true/false
            };
        default:
            return state; //unaltered if the action type is not rotate
    }
};