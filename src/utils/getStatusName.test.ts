import {getStatusName} from './getStatusName'


describe('getStatusName', () => {

    it('should return done value', () => {
        expect(getStatusName('done')).toEqual('Выполнен')
    })

    it('should return pending value', () => {
        expect(getStatusName('pending')).toEqual('Готовится')
    })

    it('should return created value', () => {
        expect(getStatusName('created')).toEqual('Создан')
    })

    it('should return empty string if not in map value', () => {
        expect(getStatusName('done')).toEqual('Выполнен')
    })
})