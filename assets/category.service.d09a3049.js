import{R as E}from"./requestHandler.service.d566e017.js";import{C as t}from"./index.756cc2a8.js";const R="https://api-datasheets.onrender.com/api",$={getAll:()=>E.fetch(`${R}${t.REQUEST_ROUTES.CATEGORY}`),get:e=>E.fetch(`${R}${t.REQUEST_ROUTES.CATEGORY}/${e}`),create:e=>E.post(`${R}${t.REQUEST_ROUTES.CATEGORY}`,{body:e}),update:e=>E.put(`${R}${t.REQUEST_ROUTES.CATEGORY}/${e._id}`,{body:e}),delete:e=>E.delete(`${R}${t.REQUEST_ROUTES.CATEGORY}/${e}`)};export{$ as C};
