interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description: "Implement a new feature in the application",
      status: "pending",
      createdAt: 2024 - 10 - 31,
    },
    {
      description: "Create a new user account",
      status: "in-progress",
      createdAt: 2024 - 10 - 30,
    },
    {
      description: "Fix a bug in the application",
      status: "finished",
      createdAt: 2024 - 11 - 20,
    },
  ],
};
