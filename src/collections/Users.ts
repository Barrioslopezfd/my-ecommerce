import { CollectionConfig } from "payload/types";

export const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  access: {
    // TODO: temporal cambiar los trues
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: "role",
      defaultValue: "user",
      required: true,
      type: "select",
      options: [
        { value: "Admin", label: "Admin" },
        { value: "User", label: "User" },
      ],
    },
  ],
};
