import { LoadColors, ColorsActionTypes } from './colors.actions';

describe('LoadColors', () => {
    it('should create an action', () => {
        const action = new LoadColors();
        expect(action.type).toEqual(ColorsActionTypes.LoadColors);
    });
});
