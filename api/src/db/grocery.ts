type Grocery = {
	name: string,
	unit: string,
	unitQuantity: number,
	quantity: number
	category: string
}

type GroceryList = {
	_id: string,
	name: string,
	dateTimeCreated: string,
	groceries: Grocery[]
}