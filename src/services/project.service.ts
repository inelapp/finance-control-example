import { ServiceSchema } from 'moleculer';
import { ProjectStatusHandler } from './handlers/projectStatusHandler';

const apiVersion = 'v1';
const projectService: ServiceSchema = {
	name: 'project',
	actions: {
		status: {
			rest: {
				method: 'GET',
				path: `${apiVersion}/status`
			},
			handler: ProjectStatusHandler
		}
	}
};

export default projectService;
