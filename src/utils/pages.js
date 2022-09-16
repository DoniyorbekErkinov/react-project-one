export const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit)
}
export const getPageArray = (tPage) => {
    let pageArray = []
    for (let i = 0; i < tPage; i++) {
        pageArray.push(i +1)        
    }  
    return pageArray
}
