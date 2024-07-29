import { Service } from 'moleculer';

type FinanceThis = Service;

async function FinanceStatusHandler(this: FinanceThis) {
	return {
		service: 'api',
		message: 'success :)'
	};
}

export { FinanceStatusHandler };
