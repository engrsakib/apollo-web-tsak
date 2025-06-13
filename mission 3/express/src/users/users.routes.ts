import express from 'express';
export const userRoutes = express.Router();

userRoutes.get('/', (req, res) => {
  res.status(200).send({
    message: 'List of users',
    users: [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
      { id: 3, name: 'Alice Johnson' },
    ],
  });
});
