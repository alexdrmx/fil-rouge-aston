export class products{
  id: number;
  nom: string;
  description: string;
  qte: number;
  prix: number;

  constructor(id: number, nom: string, description: string, qte: number, prix: number) {
    this.id = id;
    this.nom = nom;
    this.description = description;
    this.qte = qte;
    this.prix = prix;
  }
  static parse(product: any){
    return new products(product.id,product.nom,product.description,product.qte,product.prix)
  }
}
