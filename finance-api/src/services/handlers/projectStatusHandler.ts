import { Service } from 'moleculer';
import { mongoConnections } from 'commons/dist/src/config/mongo-connections';

type FinanceThis = Service;

async function FinanceStatusHandler(this: FinanceThis) {
	const mongoConnection = await mongoConnections.default;
	return {
		service: 'api',
		message: 'success :)',
		mongoConnection: mongoConnection.connection.name
	};
}

export { FinanceStatusHandler };
