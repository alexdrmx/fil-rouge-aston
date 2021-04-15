export class User {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  password: string;
  role: string[];

  constructor(id: number, nom: string, prenom: string, email: string, telephone: string, password: string) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.telephone = telephone;
    this.password = password
    this.role = ["member"];
  }

  static parse(user: any){
    return new User(user.id, user.nom, user.prenom, user.email, user.telephone, user.password)
  }
}
