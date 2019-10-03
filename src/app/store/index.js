/**
 * WordPress dependencies
 */
import { registerStore } from '@wordpress/data';

/**
 * Internal dependencies
 */
import reducer from './reducer';
import * as selectors from './selectors';
import * as actions from './actions';
import controls from './controls';
import { STORE_KEY } from './constants';

export const storeConfig = {
	reducer,
	selectors,
	actions,
	controls,
	persist: [ 'preferences' ],
};

const store = registerStore( 
	STORE_KEY, 
	{
		...storeConfig,
		persist: [ 'preferences' ],
	} 
);

export default store;
