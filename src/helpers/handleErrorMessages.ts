interface IHandleErrorMessages {
  [key: string]: {
    code: number;
    message: String;
  };
}

export const handleErrorMessages: IHandleErrorMessages = {
  "User already exists": {
    code: 400,
    message: "User already exists",
  },
  "wrong code": {
    code: 500,
    message: "wrong code",
  },
  "Username or password invalid!": {
    code: 401,
    message: "Username or password invalid!",
  },
  "Level not found": {
    code: 400,
    message: "Level not found",
  },
  "Level have developer": {
    code: 400,
    message: "Level have developer",
  },
};
