import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';
import Rules from './dbSchema.js';
import Validation from './middleware/validation.js';
import dotenv from 'dotenv';

dotenv.config();
const Database = process.env.DATABASE;

// Instantiate the app
const app = express();
// Define our app port.
const port = process.env.PORT || 3000;

// db config
mongoose.connect(Database, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
}).then(() => console.log( 'Database Connected' ))
.catch(err => console.log( err ));

// middlewares
app.use(express.json());
app.use(Cors());

// API endpoints
app.get('/', (req, res) => {
  res
  .status(200)
  .json({
    message: "My Rule-Validation API",
    status: "success",
    data: {
      name: "Evanson Igiri",
      github: "@evansinho",
      email: "igiri.evanson@gmail.com",
      mobile: "07037464245",
      twitter: "@iamevanson"
  }})
})

app.post('/validate-rule', Validation, async (req, res) => {
  try {
    const ruleBody = req.body

    const newRule = await Rules.create(ruleBody)
    res
    .status(201)
    .json({
      message: `field ${newRule.rule.field} successfully validated.`,
      status: "success",
      data: {
        validation: {
          error: false,
          field: `${newRule.rule.field}`,
          field_value: `${newRule.data.missions.count}`,
          condition: `${newRule.rule.condition}`,
          condition_value: `${newRule.rule.condition_value}`,
        }
      }
    });
  } catch(err) {
    res.status(400).json({ message: err.message });
  }
})

// listener
app.listen(port, () => console.log(`Server is listening on port ${port}`));
