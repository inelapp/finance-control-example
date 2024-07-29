import { ServiceSchema } from 'moleculer';
import { FinanceStatusHandler } from './handlers/projectStatusHandler';
import { productCreateHandler } from './handlers/productCreateHandler';
import { categoryCreateHandler } from './handlers/categoryCreateHandler';

const apiVersion = 'v1';
const financeService: ServiceSchema = {
	name: 'finance',
	actions: {
		status: {
			rest: {
				method: 'GET',
				path: `${apiVersion}/status`
			},
			handler: FinanceStatusHandler
		},
		createProduct: {
			rest: {
				method: 'POST',
				path: `${apiVersion}/product`
			},
			handler: productCreateHandler
		},
		createCategory: {
			rest: {
				method: 'POST',
				path: `${apiVersion}/category`
			},
			handler: categoryCreateHandler
		}
	}
};

export default financeService;
