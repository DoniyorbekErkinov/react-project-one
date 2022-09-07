export const useFetchData = (callback) => {
    const fetching = async () => {
        try {
            await callback
        } catch (error) {
            console.log(error)
        } finally {
            console.log('final')
        }
    }
    return [fetching]
}
