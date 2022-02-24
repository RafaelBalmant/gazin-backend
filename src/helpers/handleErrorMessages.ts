interface IHandleErrorMessages {
  [key: string]: {
    code: number;
    message: String;
  };
}

export const handleErrorMessages: IHandleErrorMessages = {
  P2002: {
    code: 500,
    message: "Já existe um registro com esse nome",
  },
};
