type Name = {
  readonly first: string;
  readonly middle?: string;
  readonly last: string;
};

export enum Status {
  FullTime,
  Temporary,
}

export type Person = {
  readonly status: Status;
  readonly name: Name;
  readonly profession: string;
};

export const introducePerson = (person?: Person): string =>
  `Hello ${person?.name?.first ?? "First"} ${person?.name?.middle ?? ""} ${
    person?.name?.last ?? "Last"
  }`;

export const isFulltimeEmployee = (person: Person): boolean =>
  person.status === Status.FullTime;

export const personToString = (
  person: Person = {
    status: Status.FullTime,
    name: {
      first: "unknown",
      last: "unknown",
    },
    profession: "unknown",
  }
): string => JSON.stringify(person, null, 2);

export const getProfessions = (personMap: { [key: number]: Person }): string =>
  Object.keys(personMap)
    .map((id) => personMap[id].profession)
    .join("\n");
