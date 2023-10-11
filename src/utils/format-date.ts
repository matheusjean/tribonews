export const formatDate = (date: string) => {
  const dateObj = new Date(date);

  return dateObj.toLocaleDateString('pt-BR');
};
