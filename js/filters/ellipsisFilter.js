app.filter('ellipsis', () => {
    return (input, size) => {
        if (input.length <= size) return input
        const output = input.substring(0, (size || 2)) + '...'
        return output
    }
})