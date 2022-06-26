import { NextApiRequest, NextApiResponse } from "next";

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  const requestToken = req.query.code;

  const clientId = import.meta.env.VITE_GITHUB_ID;
  const clientSecret = import.meta.env.VITE_GITHUB_SECRET;

  const tokenResponse = await fetch(
    `https://github.com/login/oauth/access_token?client_id=${clientId}&client_secret=${clientSecret}&code=${requestToken}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
    }
  );
  const tokenData = await tokenResponse.json();
  const accessToken = tokenData.access_token;

  const userResponse = await fetch("https://api.github.com/user", {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer${accessToken}`,
    },
  });

  const userData = await userResponse.json();
  console.log(userData);

  const {
    name = userData.login,
    login: githubUsername,
    avatar_url: avatarUrl,
  } = userData;

  return res.redirect("/event");
}
