export interface CreateProductResponseDTO {
	id: string;
	name: string;
	description: string;
	price: number;
	category: string;
	createdAt: Date;
	updatedAt: Date;
}
