export interface Action {
  type: string;
  payload: Object;
}


export interface Category {
  "id": number,
  "name": string,
  "logo": string,
  "active": boolean,
  "created_at": string,
  "updated_at": string
}

export interface Product {
  "id": number,
  "name": string,
  "description": string,
  "price": string,
  "logo": string,
  "active": boolean,
  "created_at": string,
  "updated_at": string,
  "category_id": number,
  "catalog_id": number
}

export interface Location {
  "id": number,
  "name": string,
  "logo": null,
  "cover": null,
  "description": string,
  "active": true,
  "created_at": string,
  "updated_at": string,
  "category_id": number,
  "catalog_ids": [number]
}

export interface Catalogs {
  "id": number,
  "name": string,
  "active": boolean,
  "created_at": string,
  "updated_at": string
}