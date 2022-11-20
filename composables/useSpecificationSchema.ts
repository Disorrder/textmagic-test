import { BodyColors } from "~~/types/exterior/BodyColors.enum";
import { PaintTypes } from "~~/types/exterior/PaintTypes.enum";
import { WheelSizes } from "~~/types/exterior/WheelSizes.enum";
import { IFormSchema, IFormSchemaField } from "~~/types/FormSchema.type";
import { InputTypes } from "~~/types/InputTypes.enum";
import { SeatsMaterial } from "~~/types/interior/SeatsMaterial.enum";
import { Engines } from "~~/types/specs/Engines.enum";
import { Models } from "~~/types/specs/Models.enum";

export function useSpecificationsSchema() {
  const defaultSchema = {
    name: {
      label: "Name",
      type: InputTypes.String,
      skip: true,
    },
    model: {
      label: "Model",
      type: InputTypes.Select,
      options: Object.values(Models),
    },
    engine: {
      label: "Engine",
      type: InputTypes.Select,
      options: Object.values(Engines),
    },
    exterior: {
      label: "Exterior",
      type: InputTypes.Group,
      children: {
        bodyColor: {
          label: "Body Color",
          type: InputTypes.Select,
          options: Object.values(BodyColors),
        },
        paintType: {
          label: "Paint Type",
          type: InputTypes.Select,
          options: Object.values(PaintTypes),
        },
        wheelSize: {
          label: "Wheel Size",
          type: InputTypes.Select,
          options: Object.values(WheelSizes),
        },
      },
    },
    interior: {
      label: "Interior",
      type: InputTypes.Group,
      children: {
        seatsMaterial: {
          label: "Seats Material",
          type: InputTypes.Select,
          options: Object.values(SeatsMaterial),
        },
      },
    },
  };

  const schema = useState<IFormSchema>(() => ({ ...defaultSchema }));

  function addField(name: string, field: IFormSchemaField) {
    schema.value[name] = field;
  }

  function removeField(name: string) {
    delete schema.value[name];
  }

  return { schema, addField, removeField };
}
