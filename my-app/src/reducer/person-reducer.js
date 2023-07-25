export function personReducer(person, action) {
  switch (action.type) {
    case "updated": {
      const { prev, current } = action;
      return {
        ...person,
        mentors: person.mentors.map((mentor) => {
          if (mentor.name === prev) {
            return { ...mentor, name: current };
          }
          return mentor;
        }),
      };
    }
    case "add": {
      const { name, title } = action;
      return {
        ...person,
        mentors: [...person.mentors, { name, title }],
      };
    }
    case "remove": {
      const { name } = action;
      return {
        ...person,
        mentors: person.mentors.filter((mentor) => mentor.name !== name),
      };
    }
    default: {
      throw Error(`알수없는 액션 타입입니다: ${action.type}`);
    }
  }
}
