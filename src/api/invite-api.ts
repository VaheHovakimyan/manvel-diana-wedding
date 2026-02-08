export const sendInviteRequest = async (values: any) => {
  return await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/vardges-tatev-wedding/create`,
    {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }
  );
};

export const getGuests = async () => {
  return await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/vardges-tatev-wedding/guests`
  );
};
