// import { SpinnerLoaded } from './spinner.actions';
// import { SpinnerState, Entity, initialState, reducer } from './spinner.reducer';

// describe('Spinner Reducer', () => {
//   const getSpinnerId = it => it['id'];
//   let createSpinner;

//   beforeEach(() => {
//     createSpinner = (id: string, name = ''): Entity => ({
//       id,
//       name: name || `name-${id}`
//     });
//   });

//   describe('valid Spinner actions ', () => {
//     it('should return set the list of known Spinner', () => {
//       const spinners = [
//         createSpinner('PRODUCT-AAA'),
//         createSpinner('PRODUCT-zzz')
//       ];
//       const action = new SpinnerLoaded(spinners);
//       const result: SpinnerState = reducer(initialState, action);
//       const selId: string = getSpinnerId(result.list[1]);

//       expect(result.loaded).toBe(true);
//       expect(result.list.length).toBe(2);
//       expect(selId).toBe('PRODUCT-zzz');
//     });
//   });

//   describe('unknown action', () => {
//     it('should return the previous state', () => {
//       const action = {} as any;
//       const result = reducer(initialState, action);

//       expect(result).toBe(initialState);
//     });
//   });
// });
