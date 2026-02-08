import { BASE_URL } from "public/common/constants";

export const sendInviteRequest = async (values: any) => {
  return await fetch(
    `${BASE_URL}/api/manvel-diana-wedding/create`,
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
    `${BASE_URL}/api/manvel-diana-wedding/guests`
  );
};
