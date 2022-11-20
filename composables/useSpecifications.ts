import { ICarSpecification } from "~~/types/specs/ICarSpecification.type";

const defaultContent: ICarSpecification[] = [
  {
    id: "1",
    name: "Buba",
    model: "Model S",
    engine: "electric",
    exterior: {
      bodyColor: "red",
      paintType: "metallic",
      wheelSize: "20 inches",
    },
    interior: {
      seatsMaterial: "leather",
    },
  },
  {
    id: "2",
    name: "Bob",
    model: "Model E",
    engine: "electric",
    exterior: {
      bodyColor: "white",
      paintType: "metallic",
      wheelSize: "17 inches",
    },
    interior: {
      seatsMaterial: "leather",
    },
  },
];

export function useSpecifications() {
  const idCounter = useState<number>(() => defaultContent.length + 1);

  const specifications = useState<ICarSpecification[]>(() => [
    ...defaultContent,
  ]);

  function get(id: string) {
    const value = specifications.value.find((spec) => spec.id === id);

    if (!value) {
      throw new Error(`No specification with id ${id} found`);
    }

    return { ...value };
  }

  function add(spec: ICarSpecification) {
    spec.id = String(++idCounter.value);
    specifications.value.push(spec);
  }

  function remove(id: string) {
    specifications.value = specifications.value.filter(
      (spec) => spec.id !== id
    );
  }

  function update(spec: ICarSpecification) {
    const index = specifications.value.findIndex((item) => item.id === spec.id);
    specifications.value[index] = spec;
  }

  return { specifications, get, add, remove, update };
}
