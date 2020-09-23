import {
  introducePerson,
  Person,
  Status,
  isFulltimeEmployee,
  personToString,
  getProfessions,
} from "./objects";

const jack: Person = {
  name: {
    first: "Jack",
    last: "Herrington",
  },
  status: Status.FullTime,
  profession: "Engineer",
};

console.log(introducePerson());
console.log(introducePerson(jack));

console.log(isFulltimeEmployee(jack));

console.log(personToString(jack));

console.log(
  getProfessions({
    1: jack,
  })
);
