// import { Entity, SpinnerState } from './spinner.reducer';
// import { spinnerQuery } from './spinner.selectors';

// describe('Spinner Selectors', () => {
//   const ERROR_MSG = 'No Error Available';
//   const getSpinnerId = it => it['id'];

//   let storeState;

//   beforeEach(() => {
//     const createSpinner = (id: string, name = ''): Entity => ({
//       id,
//       name: name || `name-${id}`
//     });
//     storeState = {
//       spinner: {
//         list: [
//           createSpinner('PRODUCT-AAA'),
//           createSpinner('PRODUCT-BBB'),
//           createSpinner('PRODUCT-CCC')
//         ],
//         selectedId: 'PRODUCT-BBB',
//         error: ERROR_MSG,
//         loaded: true
//       }
//     };
//   });

//   describe('Spinner Selectors', () => {
//     it('getAllSpinner() should return the list of Spinner', () => {
//       const results = spinnerQuery.getAllSpinner(storeState);
//       const selId = getSpinnerId(results[1]);

//       expect(results.length).toBe(3);
//       expect(selId).toBe('PRODUCT-BBB');
//     });

//     it('getSelectedSpinner() should return the selected Entity', () => {
//       const result = spinnerQuery.getSelectedSpinner(storeState);
//       const selId = getSpinnerId(result);

//       expect(selId).toBe('PRODUCT-BBB');
//     });

//     it("getLoaded() should return the current 'loaded' status", () => {
//       const result = spinnerQuery.getLoaded(storeState);

//       expect(result).toBe(true);
//     });

//     it("getError() should return the current 'error' storeState", () => {
//       const result = spinnerQuery.getError(storeState);

//       expect(result).toBe(ERROR_MSG);
//     });
//   });
// });
