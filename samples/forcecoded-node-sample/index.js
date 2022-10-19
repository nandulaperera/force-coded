/**
 * Copyright (c) 2022, Nandula Perera (https://github.com/nandulaperera) All Rights Reserved.
 *
 * Nandula Perera licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

const express = require("express");
const cookieParser = require("cookie-parser");
const { ForceCodedClient } = require("force-coded");
const config = require("./config");

//Constants
const PORT = 5000;

//Initialize Express App
const app = express();
app.use(cookieParser());
app.use(express.json());

//Initialize the TextMe Client
const fc = new ForceCodedClient(config);

app.get("/", (req, res) => {
  res.status(200).send("It works!");
});

app.get("/profile", (req, res) => {
  fc.getUserInfo(["suvink"])
    .then((response) => {
      console.log(response);
      res.status(200).send(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});

//Start the app and listen on PORT 5000
app.listen(PORT, () => {
  console.log(`Server Started at PORT ${PORT}`);
});
