"use server";

// Integration api for Sale by Country chart
export const getSaleByCountryChart = async () => {
  const res = await fetch("http://localhost:8000/saleByCountry", {
    method: "GET",
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  });

  if (!res.ok) {
    const message = `An error has occured: ${res.status} - ${res.statusText}`;
    throw new Error(message);
  }

  return res.json();
};

// Integration api for Statistical Card
export const getStatisticalCard = async () => {
  const res = await fetch("http://localhost:8000/statisticalCard", {
    method: "GET",
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  });

  if (!res.ok) {
    const message = `An error has occured: ${res.status} - ${res.statusText}`;
    throw new Error(message);
  }

  return res.json();
};

// Integration api for Statistical Card
export const getAnalyticInfo = async () => {
  const res = await fetch("http://localhost:8000/analyticInfo", {
    method: "GET",
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  });

  if (!res.ok) {
    const message = `An error has occured: ${res.status} - ${res.statusText}`;
    throw new Error(message);
  }

  return res.json();
};
