export const reorder = (list, source, destination) => {

    let result = list   
    const [removed] = result.splice(source.index, 1);
    result.splice(destination.index, 0, removed);

    return result
};

