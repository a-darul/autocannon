const headers = { "Authorization": "Bearer your-access-token-1", };

const requests = [
  {
    method: "GET",
    path: "/api/endpoint1",
    headers
  },
  {
    method: "GET",
    path: "/api/endpoint2",
    headers
  },
  {
    method: "GET",
    path: "/api/endpoint3",
    headers
  }
]

module.exports = requests;