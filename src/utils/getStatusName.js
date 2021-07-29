export const getStatusName = (status) => {
    switch (status) {
        case 'done':
            return 'Выполнен'
        case 'pending':
            return 'Готовится'
        case 'created':
            return 'Создан'
        default:
            return ''
    }
}