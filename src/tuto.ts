// les different type primitif
let aNumber: number = 42;
let aString: string = "Bonjour Paul";
let aBoolean: boolean = true;
// primitif spéciaux
let aNull: null = null;
let aUndefined: undefined = undefined;

// les type complexe
let aObjet: Object = { name: "Arthur", vie: 200 };
let aArray: number[] = [5, 5, 7];
let aSecondArray: Array<number> = [6, 7, 7]; // utilisation d'un générique

// les type spéciaux propre a Typescript
let aAny: any = "on peut avoir n'importe quel type"; // a éviter car ça enleve la vérification
let aUnknwon: unknown = [25, "jfkdjfml"]; // idem que le any, sauf que la vérification.

let aOtherVar;

/* création d'un type
- class ( création du classe = type )
- interface ( POO )
- type ( alias )
*/

type UnNombre = number;

let unSuperNombre: UnNombre;

type Personne = {
  name: string;
  salaire: number;
};

let arthur: Personne = { name: "Arthur", salaire: 2000 };

// interface = contrat
interface Roulable {
  nbRoue: number;
  vitesseMax: number;
}

// class = plan de construction
class Carrose implements Roulable {
  nbRoue: number;
  vitesseMax: number;

  constructor() {
    this.nbRoue = 4;
    this.vitesseMax = 300;
  }
}

class SuperCar extends Carrose {
  nitro: number;
  constructor() {
    super();
    this.nitro = 400;
  }
}

const ferrary: Roulable = new SuperCar();

// Explication des Union
type Genre = "homme" | "femme";

let genre: Genre = "femme";

// Générique concepte différent

function addition<T>(a: T, b: T) {
  if (typeof a === "number" && typeof b === "number") {
    const result = a + b;
    return result;
  }
}

// appel
const somme = addition<number>(25, 50);

// Fin concept Générique

// concept du cast

// as / satisfied

// satisfied ne vas pas changer le type
// as va changer le type violement.
//const course = useCourseById(route.params.courseId) as CourseBsc;

// Le type Guard
type Voiture = {
  brand: string;
  price: number;
  model: string;
};

const responseApi: unknown = {
  brand: "Renault",
  price: 14_000,
  model: "R5",
};

function isVoiture(responseApi: any): responseApi is Voiture {
  // on va vérifié si c'est une voiture
  if (
    responseApi.hasOwnProperty("brand") &&
    responseApi.hasOwnProperty("price") &&
    responseApi.hasOwnProperty("model")
  ) {
    console.log("la voiture à tout les propriété");
    if (typeof responseApi.brand === "string" && 
    typeof responseApi.price === "number" && 
    typeof responseApi.model === "string") {
      // objet valide 
      return true; 
    }
  }
  return false; 
}



// si le type est valide, alors on peut travail 

if (isVoiture(responseApi)) {
  // Typescript connais maintenant que responseApi est une Voiture 
  
}