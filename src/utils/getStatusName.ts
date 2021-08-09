const statusMap = new Map();

statusMap.set('done', 'Выполнен')
statusMap.set('pending', 'Готовится')
statusMap.set('created', 'Создан')

export const getStatusName = (status: string): string => {
    return statusMap.get(status) || '';
}

