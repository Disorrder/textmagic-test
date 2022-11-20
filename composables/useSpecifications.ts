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
  const specifications = useState<ICarSpecification[]>(() => [
    ...defaultContent,
  ]);

  function add(spec: ICarSpecification) {
    specifications.value.push(spec);
  }

  function remove(id: string) {
    specifications.value = specifications.value.filter(
      (spec) => spec.id !== id
    );
  }

  return { specifications, add, remove };
}
