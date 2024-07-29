import { Service } from 'moleculer';

type ProjectThis = Service;

async function ProjectStatusHandler(this: ProjectThis) {
	return {
		service: 'api',
		message: 'success :)'
	};
}

export { ProjectStatusHandler };
